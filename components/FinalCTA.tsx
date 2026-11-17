"use client";

import { useState, useEffect, FormEvent } from "react";
import { CheckCircle, Loader2, Calendar } from "lucide-react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGlobe,
  FiCheckCircle,
} from "react-icons/fi";

interface BookingFormData {
  name: string;
  email: string;
  company: string;
  companySize: string;
  meetingDate: string;
  meetingTime: string;
}

interface FieldErrors {
  name: string;
  email: string;
  company: string;
  companySize: string;
  meetingDate: string;
  meetingTime: string;
}

const trustStats = [
  "14-day free trial",
  "No credit card required",
  "Setup in 24 hours",
  "Cancel anytime",
];

function generateTimeSlots() {
  const slots = [];
  for (let h = 9; h <= 17; h++) {
    for (const m of [0, 30]) {
      if (h === 17 && m === 30) continue;
      const hour12 = h > 12 ? h - 12 : h === 0 ? 12 : h;
      const ampm = h >= 12 ? "PM" : "AM";
      const label = `${hour12}:${m === 0 ? "00" : "30"} ${ampm}`;
      const value = `${String(h).padStart(2, "0")}:${m === 0 ? "00" : "30"}`;
      slots.push({ label, value });
    }
  }
  return slots;
}

const timeSlots = generateTimeSlots();

export default function FinalCTA() {
  const [todayStr, setTodayStr] = useState("");
  const [maxDateStr, setMaxDateStr] = useState("");
  const [userTimezone, setUserTimezone] = useState("");
  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    email: "",
    company: "",
    companySize: "",
    meetingDate: "",
    meetingTime: "",
  });
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({
    name: "",
    email: "",
    company: "",
    companySize: "",
    meetingDate: "",
    meetingTime: "",
  });
  const [touched, setTouched] = useState<Record<keyof FieldErrors, boolean>>({
    name: false,
    email: false,
    company: false,
    companySize: false,
    meetingDate: false,
    meetingTime: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [confirmedDetails, setConfirmedDetails] = useState({
    date: "",
    time: "",
    meetLink: "",
    email: "",
  });
  const [linkCopied, setLinkCopied] = useState(false);

  useEffect(() => {
    const today = new Date();
    setTodayStr(today.toISOString().split("T")[0]);
    const max = new Date();
    max.setDate(max.getDate() + 60);
    setMaxDateStr(max.toISOString().split("T")[0]);
    setUserTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone);
  }, []);

  const validateField = (name: keyof FieldErrors, value: string): string => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (value.trim().length < 2) return "Name must be at least 2 characters";
        return "";
      case "email":
        if (!value.trim()) return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return "Please enter a valid email";
        return "";
      case "company":
        if (!value.trim()) return "Company name is required";
        return "";
      case "companySize":
        if (!value) return "Please select company size";
        return "";
      case "meetingDate": {
        if (!value) return "Please select a date";
        const sel = new Date(value + "T12:00:00");
        const now = new Date();
        now.setHours(0, 0, 0, 0);
        if (sel < now) return "Please select a future date";
        return "";
      }
      case "meetingTime":
        if (!value) return "Please select a time";
        return "";
      default:
        return "";
    }
  };

  const formatDateForEmail = (dateStr: string) => {
    if (!dateStr) return "";
    const date = new Date(dateStr + "T12:00:00");
    return date.toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const formatTimeForEmail = (timeStr: string) => {
    if (!timeStr) return "";
    const [h, m] = timeStr.split(":").map(Number);
    const hour12 = h > 12 ? h - 12 : h === 0 ? 12 : h;
    const ampm = h >= 12 ? "PM" : "AM";
    return `${hour12}:${m === 0 ? "00" : "30"} ${ampm}`;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name as keyof FieldErrors]) {
      const error = validateField(name as keyof FieldErrors, value);
      setFieldErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name as keyof FieldErrors, value);
    setFieldErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleCopyLink = async () => {
    const textToCopy = `VoxWel Demo Details
📅 Date: ${confirmedDetails.date}
⏰ Time: ${confirmedDetails.time} (${userTimezone})
🔗 Meet Link: ${confirmedDetails.meetLink}`;

    try {
      await navigator.clipboard.writeText(textToCopy);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 3000);
    } catch {
      const el = document.createElement("textarea");
      el.value = textToCopy;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 3000);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors: FieldErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      company: validateField("company", formData.company),
      companySize: validateField("companySize", formData.companySize),
      meetingDate: validateField("meetingDate", formData.meetingDate),
      meetingTime: validateField("meetingTime", formData.meetingTime),
    };

    setFieldErrors(errors);
    setTouched({
      name: true,
      email: true,
      company: true,
      companySize: true,
      meetingDate: true,
      meetingTime: true,
    });

    if (Object.values(errors).some((e) => e !== "")) {
      setSubmitError("Please fix the errors above");
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch(
        "https://us-central1-company-voice-ba26f.cloudfunctions.net/sendDemoBooking",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            company: formData.company,
            companySize: formData.companySize,
            meetingDateISO: formData.meetingDate,
            meetingTimeISO: formData.meetingTime,
            meetingDate: formatDateForEmail(formData.meetingDate),
            meetingTime: formatTimeForEmail(formData.meetingTime),
            timezone: userTimezone,
            message: "",
          }),
        }
      );

      if (response.status === 409) {
        setSubmitError("That time was just taken. Please choose another slot.");
        return;
      }
      if (!response.ok) throw new Error("Failed to send booking");
      const result = await response.json().catch(() => ({}));
      const meetLink: string =
        result.meetLink || process.env.NEXT_PUBLIC_GOOGLE_MEET_LINK || "";

      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "demo_booking_submitted", {
          event_category: "engagement",
          event_label: "Final CTA Booking",
          value: formData.companySize,
        });
      }

      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", "Lead", {
          content_name: "Final CTA Booking",
          content_category: "Demo Request",
        });
      }

      setBookingConfirmed(true);
      setConfirmedDetails({
        date: formatDateForEmail(formData.meetingDate),
        time: formatTimeForEmail(formData.meetingTime),
        meetLink,
        email: formData.email,
      });
    } catch {
      setSubmitError(
        "Something went wrong. Please try again or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputBase =
    "w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all text-slate-900 text-sm";

  const inputClass = (field: keyof FieldErrors) =>
    `${inputBase} ${
      fieldErrors[field] && touched[field]
        ? "border-red-400 focus:ring-red-400"
        : !fieldErrors[field] && touched[field] && formData[field]
        ? "border-emerald-400 focus:ring-emerald-400"
        : "border-slate-300 focus:ring-indigo-500 focus:border-indigo-500"
    }`;

  return (
    <section id="contact" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Your employees have something to say.{" "}
            <span className="text-indigo-600">Give them a safe way to say it.</span>
          </h2>
          <p className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto">
            Book a free 15-minute demo or reach out directly — our team responds
            within 24 hours.
          </p>
        </div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* ── LEFT: Booking form card ──────────────────────────────────── */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">

            {/* Card header */}
            <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 px-8 py-6">
              <h3 className="text-xl font-bold text-white">Book Your Free Demo</h3>
              <p className="text-indigo-100 text-sm mt-1">
                15 minutes · No credit card · No commitment
              </p>
            </div>

            {bookingConfirmed ? (
              /* ── Confirmation card ── */
              <div className="p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-9 h-9 text-emerald-500" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-1">You&apos;re booked!</h4>
                <p className="text-slate-500 text-sm mb-6">
                  A confirmation has been sent to{" "}
                  <span className="font-semibold text-slate-700">{confirmedDetails.email}</span>
                </p>

                <div className="w-full bg-slate-50 border border-slate-200 rounded-xl p-5 mb-5 text-left space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-lg">📅</span>
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wide font-medium">Date</p>
                      <p className="text-slate-800 font-semibold">{confirmedDetails.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-lg">⏰</span>
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wide font-medium">Time</p>
                      <p className="text-slate-800 font-semibold">
                        {confirmedDetails.time}{" "}
                        <span className="text-slate-400 font-normal text-xs">({userTimezone})</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full mb-5">
                  <p className="text-xs text-slate-400 uppercase tracking-wide font-medium text-left mb-2">
                    Google Meet Link
                  </p>
                  <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-4 py-3">
                    <div className="flex flex-col gap-1 flex-1 text-left">
                      <span className="text-xs text-slate-500">📅 {confirmedDetails.date}</span>
                      <span className="text-xs text-slate-500">⏰ {confirmedDetails.time} ({userTimezone})</span>
                      <span className="text-xs text-slate-600 font-mono truncate">🔗 {confirmedDetails.meetLink}</span>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyLink}
                      className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                        linkCopied
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-indigo-600 text-white hover:bg-indigo-700"
                      }`}
                    >
                      {linkCopied ? (
                        <>
                          <CheckCircle className="w-3.5 h-3.5" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                          Copy Details
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <a
                  href={confirmedDetails.meetLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors mb-3"
                >
                  🔗 Join Meeting
                </a>
                <p className="text-xs text-slate-400">
                  Check your inbox — a calendar confirmation was also sent to you.
                </p>
              </div>
            ) : (
              /* ── Booking form ── */
              <form onSubmit={handleSubmit} noValidate className="p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Jane Smith"
                        className={inputClass("name")}
                      />
                      {!fieldErrors.name && touched.name && formData.name && (
                        <FiCheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-500" />
                      )}
                    </div>
                    {fieldErrors.name && touched.name && (
                      <p className="mt-1 text-xs text-red-600">{fieldErrors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Work Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="jane@company.com"
                        className={inputClass("email")}
                      />
                      {!fieldErrors.email && touched.email && formData.email && (
                        <FiCheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-500" />
                      )}
                    </div>
                    {fieldErrors.email && touched.email && (
                      <p className="mt-1 text-xs text-red-600">{fieldErrors.email}</p>
                    )}
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Your Company Inc."
                      className={inputClass("company")}
                    />
                    {!fieldErrors.company && touched.company && formData.company && (
                      <FiCheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-500" />
                    )}
                  </div>
                  {fieldErrors.company && touched.company && (
                    <p className="mt-1 text-xs text-red-600">{fieldErrors.company}</p>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Company Size */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Company Size <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`${inputClass("companySize")} appearance-none bg-white`}
                    >
                      <option value="">Select size</option>
                      <option value="1-10">1–10 employees</option>
                      <option value="11-50">11–50 employees</option>
                      <option value="51-200">51–200 employees</option>
                      <option value="201-500">201–500 employees</option>
                      <option value="501+">501+ employees</option>
                    </select>
                    {fieldErrors.companySize && touched.companySize && (
                      <p className="mt-1 text-xs text-red-600">{fieldErrors.companySize}</p>
                    )}
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Preferred Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="meetingDate"
                      value={formData.meetingDate}
                      min={todayStr}
                      max={maxDateStr}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`${inputClass("meetingDate")} bg-white`}
                    />
                    {fieldErrors.meetingDate && touched.meetingDate && (
                      <p className="mt-1 text-xs text-red-600">{fieldErrors.meetingDate}</p>
                    )}
                  </div>
                </div>

                {/* Time */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Preferred Time <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="meetingTime"
                    value={formData.meetingTime}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`${inputClass("meetingTime")} appearance-none bg-white`}
                  >
                    <option value="">Select a time</option>
                    {timeSlots.map((slot) => (
                      <option key={slot.value} value={slot.value}>
                        {slot.label}
                      </option>
                    ))}
                  </select>
                  {fieldErrors.meetingTime && touched.meetingTime && (
                    <p className="mt-1 text-xs text-red-600">{fieldErrors.meetingTime}</p>
                  )}
                  {userTimezone && (
                    <p className="text-xs text-slate-400 mt-1">Timezone: {userTimezone}</p>
                  )}
                </div>

                {submitError && (
                  <p className="text-red-600 text-sm">{submitError}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-indigo-600 text-white rounded-lg font-semibold text-base hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Calendar className="w-5 h-5" />
                      Book My Free Demo
                    </>
                  )}
                </button>

                <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 pt-1">
                  {trustStats.map((stat) => (
                    <span key={stat} className="text-xs text-slate-400">
                      ✓ {stat}
                    </span>
                  ))}
                </div>
              </form>
            )}
          </div>

          {/* ── RIGHT: Contact info ──────────────────────────────────────── */}
          <div className="space-y-6">

            {/* Get in Touch */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
              <h4 className="text-lg font-bold text-slate-900 mb-6">Get in Touch</h4>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 shrink-0">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm mb-0.5">Email Us</p>
                    <a
                      href="mailto:maduranga@voxwel.com"
                      className="text-indigo-600 hover:underline text-sm"
                    >
                      maduranga@voxwel.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 shrink-0">
                    <FiPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm mb-0.5">Call Us</p>
                    <a
                      href="tel:+9476620655"
                      className="text-indigo-600 hover:underline text-sm"
                    >
                      +94 (76) 620-6555
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Offices */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
              <h4 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <FiGlobe className="w-5 h-5 text-indigo-600" />
                Our Offices
              </h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4 pb-6 border-b border-slate-100">
                  <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center shrink-0">
                    <FiMapPin className="w-5 h-5 text-slate-500" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-1.5">
                      <span>🇬🇧</span> United Kingdom
                    </p>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Office 4157, 58 Peregrine Road
                      <br />
                      Hainault, Ilford, Essex
                      <br />
                      United Kingdom, IG6 3SZ
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center shrink-0">
                    <FiMapPin className="w-5 h-5 text-slate-500" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-1.5">
                      <span>🇱🇰</span> Sri Lanka
                    </p>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Kurunegala Road
                      <br />
                      Kuliyapitiya
                      <br />
                      Kurunegala, Sri Lanka
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why VoxWel */}
            <div className="bg-indigo-50 rounded-2xl border border-indigo-100 p-8">
              <h4 className="text-lg font-bold text-slate-900 mb-5">
                Why Choose VoxWel?
              </h4>
              <ul className="space-y-3">
                {[
                  ["24-hour setup", "Deploy in minutes, not months"],
                  ["Military-grade security", "True anonymity guaranteed"],
                  ["$1 per employee", "Affordable protection for any size"],
                  ["24/7 support", "We're here when you need us"],
                ].map(([bold, rest]) => (
                  <li key={bold} className="flex items-start gap-3">
                    <FiCheckCircle className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm">
                      <strong>{bold}:</strong> {rest}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
