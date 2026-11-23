"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
  FiGlobe,
} from "react-icons/fi";
import emailjs from "@emailjs/browser";

const MADU_TIMEZONE = "Asia/Colombo";

const TIMEZONES = [
  { label: "Pacific Time (US & Canada)", value: "America/Los_Angeles" },
  { label: "Mountain Time (US & Canada)", value: "America/Denver" },
  { label: "Central Time (US & Canada)", value: "America/Chicago" },
  { label: "Eastern Time (US & Canada)", value: "America/New_York" },
  { label: "Atlantic Time (Canada)", value: "America/Halifax" },
  { label: "London (GMT/BST)", value: "Europe/London" },
  { label: "Central European Time", value: "Europe/Paris" },
  { label: "Eastern European Time", value: "Europe/Helsinki" },
  { label: "Moscow Time", value: "Europe/Moscow" },
  { label: "Gulf Standard Time", value: "Asia/Dubai" },
  { label: "India Standard Time", value: "Asia/Kolkata" },
  { label: "Sri Lanka Time", value: "Asia/Colombo" },
  { label: "Bangladesh Time", value: "Asia/Dhaka" },
  { label: "Indochina Time", value: "Asia/Bangkok" },
  { label: "Singapore/Malaysia Time", value: "Asia/Singapore" },
  { label: "China Standard Time", value: "Asia/Shanghai" },
  { label: "Japan/Korea Time", value: "Asia/Tokyo" },
  { label: "Australian Eastern Time", value: "Australia/Sydney" },
  { label: "New Zealand Time", value: "Pacific/Auckland" },
];

interface FormData {
  name: string;
  email: string;
  company: string;
  employees: string;
  phone: string;
  message: string;
  selectedTimezone: string;
  meetingDate: string;
  meetingTime: string;
}

interface FieldErrors {
  name: string;
  email: string;
  company: string;
  employees: string;
  selectedTimezone: string;
  meetingDate: string;
  meetingTime: string;
}

interface Touched {
  name: boolean;
  email: boolean;
  company: boolean;
  employees: boolean;
  selectedTimezone: boolean;
  meetingDate: boolean;
  meetingTime: boolean;
}

function getTimezoneOffsetMinutes(timezone: string): number {
  const now = new Date();
  const utcStr = now.toLocaleString("en-US", { timeZone: "UTC" });
  const tzStr = now.toLocaleString("en-US", { timeZone: timezone });
  return (new Date(tzStr).getTime() - new Date(utcStr).getTime()) / 60000;
}

function generateTimeSlots(
  userTz: string
): Array<{ label: string; value: string }> {
  const slots = [];
  const maduOffsetMin = getTimezoneOffsetMinutes(MADU_TIMEZONE);
  const userOffsetMin = getTimezoneOffsetMinutes(userTz);
  const diffMin = userOffsetMin - maduOffsetMin;
  for (let h = 9; h <= 17; h++) {
    for (const m of [0, 30]) {
      if (h === 17 && m === 30) continue;
      const userTotalMin = h * 60 + m + diffMin;
      if (userTotalMin < 0 || userTotalMin >= 24 * 60) continue;
      const userH = Math.floor(userTotalMin / 60);
      const userM = userTotalMin % 60;
      const hour12User = userH > 12 ? userH - 12 : userH === 0 ? 12 : userH;
      const ampmUser = userH >= 12 ? "PM" : "AM";
      const hour12Madu = h > 12 ? h - 12 : h === 0 ? 12 : h;
      const ampmMadu = h >= 12 ? "PM" : "AM";
      const userLabel = `${hour12User}:${String(userM).padStart(2, "0")} ${ampmUser}`;
      const maduLabel = `${hour12Madu}:${m === 0 ? "00" : "30"} ${ampmMadu} SL`;
      const value = `${String(userH).padStart(2, "0")}:${String(userM).padStart(2, "0")}`;
      slots.push({ label: `${userLabel} (${maduLabel})`, value });
    }
  }
  return slots;
}

export default function Contact() {
  const [todayStr, setTodayStr] = useState("");
  const [maxDateStr, setMaxDateStr] = useState("");

  // ── Form state — preserved exactly ───────────────────────────────────────
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    employees: "",
    phone: "",
    message: "",
    selectedTimezone: "",
    meetingDate: "",
    meetingTime: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({
    name: "",
    email: "",
    company: "",
    employees: "",
    selectedTimezone: "",
    meetingDate: "",
    meetingTime: "",
  });
  const [touched, setTouched] = useState<Touched>({
    name: false,
    email: false,
    company: false,
    employees: false,
    selectedTimezone: false,
    meetingDate: false,
    meetingTime: false,
  });

  useEffect(() => {
    const today = new Date();
    setTodayStr(today.toISOString().split("T")[0]);
    const max = new Date();
    max.setDate(max.getDate() + 60);
    setMaxDateStr(max.toISOString().split("T")[0]);
    setFormData((prev: FormData) => ({
      ...prev,
      selectedTimezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    }));
  }, []);

  // ── Validation — preserved exactly ───────────────────────────────────────
  const validateField = (name: string, value: string) => {
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
      case "employees":
        if (!value) return "Please select employee range";
        return "";
      case "selectedTimezone":
        if (!value) return "Please select a timezone";
        return "";
      case "meetingDate": {
        if (!value) return "";
        const sel = new Date(value + "T12:00:00");
        const now = new Date();
        now.setHours(0, 0, 0, 0);
        if (sel < now) return "Please select a future date";
        return "";
      }
      case "meetingTime":
        if (!value && formData.meetingDate) return "Please select a time";
        return "";
      default:
        return "";
    }
  };

  const formatTimeForEmail = (timeStr: string, tz: string): string => {
    if (!timeStr) return "Not specified";
    const [h, m] = timeStr.split(":").map(Number);
    const hour12 = h > 12 ? h - 12 : h === 0 ? 12 : h;
    const ampm = h >= 12 ? "PM" : "AM";
    const userTime = `${hour12}:${String(m).padStart(2, "0")} ${ampm}`;

    const maduOffsetMin = getTimezoneOffsetMinutes(MADU_TIMEZONE);
    const userOffsetMin = getTimezoneOffsetMinutes(tz);
    const diffMin = maduOffsetMin - userOffsetMin;
    const userTotalMin = h * 60 + m;
    const maduTotalMin =
      ((userTotalMin + diffMin) % (24 * 60) + 24 * 60) % (24 * 60);
    const maduH = Math.floor(maduTotalMin / 60);
    const maduM = maduTotalMin % 60;
    const maduHour12 = maduH > 12 ? maduH - 12 : maduH === 0 ? 12 : maduH;
    const maduAmpm = maduH >= 12 ? "PM" : "AM";
    const maduTime = `${maduHour12}:${String(maduM).padStart(2, "0")} ${maduAmpm}`;

    return `${userTime} (${tz}) / ${maduTime} (Sri Lanka Time)`;
  };

  // ── Handlers — preserved exactly ─────────────────────────────────────────
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (touched[name as keyof Touched]) {
      const error = validateField(name, value);
      setFieldErrors({ ...fieldErrors, [name]: error });
    }
  };

  const handleBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    const error = validateField(name, value);
    setFieldErrors({ ...fieldErrors, [name]: error });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          employees: formData.employees,
          phone: formData.phone || "Not provided",
          message: formData.message || "No message provided",
          reply_to: formData.email,
          timezone: formData.selectedTimezone || "Not specified",
          meeting_date: formData.meetingDate
            ? new Date(formData.meetingDate + "T12:00:00").toLocaleDateString(
                "en-GB",
                {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }
              )
            : "Not specified",
          meeting_time: formatTimeForEmail(
            formData.meetingTime,
            formData.selectedTimezone
          ),
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      console.log("Email sent successfully:", result);
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        employees: "",
        phone: "",
        message: "",
        selectedTimezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        meetingDate: "",
        meetingTime: "",
      });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error: any) {
      console.error("Error sending email:", error);
      setStatus("error");
      setErrorMessage(
        error.text ||
          "Failed to send message. Please try again or email us directly."
      );
      setTimeout(() => {
        setStatus("idle");
        setErrorMessage("");
      }, 5000);
    }
  };

  // ── Shared input class helper ─────────────────────────────────────────────
  const inputClass = (field: keyof FieldErrors) =>
    `w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all text-slate-900 ${
      fieldErrors[field] && touched[field]
        ? "border-red-400 focus:ring-red-400"
        : !fieldErrors[field] &&
          touched[field] &&
          formData[field as keyof FormData]
        ? "border-emerald-400 focus:ring-emerald-400"
        : "border-slate-300 focus:ring-indigo-500 focus:border-indigo-500"
    }`;

  const timeSlots = generateTimeSlots(
    formData.selectedTimezone || MADU_TIMEZONE
  );

  return (
    <section
      id="contact"
      className="bg-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Ready to protect your workplace?
          </h2>
          <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto">
            Book a demo or get instant access. Our team responds within 24 hours.
          </p>
        </div>

        {/* Demo booking CTA */}
        <div className="text-center mb-12 pb-12 border-b border-slate-200">
          <span className="inline-block bg-indigo-50 text-indigo-700 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
            Prefer to talk first?
          </span>
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            Book a 20-minute demo
          </h3>
          <p className="text-slate-500 mb-6 max-w-md mx-auto">
            See VoxWel live. Get your questions answered. No commitment, no sales pressure.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            📅 Schedule a Demo →
          </Link>
          <p className="text-xs text-slate-400 mt-3">
            Usually responds within 2 hours during business hours
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* ── Contact Form ────────────────────────────────────────────── */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-10">
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Get Instant Access
            </h3>
            <p className="text-slate-500 text-sm mb-6">
              Submit your details and receive your login credentials via email
              immediately.
            </p>

            {/* Success */}
            {status === "success" && (
              <div className="mb-6 p-4 bg-emerald-50 border border-emerald-300 rounded-lg flex items-start gap-3">
                <FiCheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-emerald-800 font-semibold">
                    Welcome to VoxWel!
                  </p>
                  <p className="text-emerald-700 text-sm mt-1">
                    Check your email for login credentials and setup
                    instructions. You&apos;ll be up and running in minutes!
                  </p>
                </div>
              </div>
            )}

            {/* Error */}
            {status === "error" && (
              <div className="mb-6 p-4 bg-red-50 border border-red-300 rounded-lg flex items-start gap-3">
                <FiAlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-red-800 font-semibold">
                    Oops! Something went wrong
                  </p>
                  <p className="text-red-700 text-sm mt-1">{errorMessage}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name + Email */}
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 mb-1.5"
                  >
                    Full Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={inputClass("name")}
                      placeholder="Jane Smith"
                      disabled={status === "submitting"}
                    />
                    {touched.name && !fieldErrors.name && formData.name && (
                      <FiCheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-500" />
                    )}
                  </div>
                  {fieldErrors.name && touched.name && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <FiAlertCircle className="w-3 h-3" />
                      {fieldErrors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-1.5"
                  >
                    Work Email *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={inputClass("email")}
                      placeholder="jane@company.com"
                      disabled={status === "submitting"}
                    />
                    {touched.email && !fieldErrors.email && formData.email && (
                      <FiCheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-500" />
                    )}
                  </div>
                  {fieldErrors.email && touched.email && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <FiAlertCircle className="w-3 h-3" />
                      {fieldErrors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Company */}
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-slate-700 mb-1.5"
                >
                  Company Name *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputClass("company")}
                    placeholder="Your Company Inc."
                    disabled={status === "submitting"}
                  />
                  {touched.company &&
                    !fieldErrors.company &&
                    formData.company && (
                      <FiCheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-500" />
                    )}
                </div>
                {fieldErrors.company && touched.company && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <FiAlertCircle className="w-3 h-3" />
                    {fieldErrors.company}
                  </p>
                )}
              </div>

              {/* Employees + Phone */}
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="employees"
                    className="block text-sm font-medium text-slate-700 mb-1.5"
                  >
                    Number of Employees *
                  </label>
                  <select
                    id="employees"
                    name="employees"
                    required
                    value={formData.employees}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputClass("employees")}
                    disabled={status === "submitting"}
                  >
                    <option value="">Select range</option>
                    <option value="1-50">1–50</option>
                    <option value="51-100">51–100</option>
                    <option value="101-250">101–250</option>
                    <option value="251-500">251–500</option>
                    <option value="501-1000">501–1,000</option>
                    <option value="1000+">1,000+</option>
                  </select>
                  {fieldErrors.employees && touched.employees && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <FiAlertCircle className="w-3 h-3" />
                      {fieldErrors.employees}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-slate-700 mb-1.5"
                  >
                    Phone Number{" "}
                    <span className="text-slate-400 font-normal">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-slate-900"
                    placeholder="+1 (555) 123-4567"
                    disabled={status === "submitting"}
                  />
                </div>
              </div>

              {/* Timezone */}
              <div>
                <label
                  htmlFor="selectedTimezone"
                  className="block text-sm font-medium text-slate-700 mb-1.5"
                >
                  Your Timezone
                </label>
                <select
                  id="selectedTimezone"
                  name="selectedTimezone"
                  value={formData.selectedTimezone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={inputClass("selectedTimezone")}
                  disabled={status === "submitting"}
                >
                  <option value="">Select timezone</option>
                  {TIMEZONES.map((tz) => (
                    <option key={tz.value} value={tz.value}>
                      {tz.label}
                    </option>
                  ))}
                </select>
                {fieldErrors.selectedTimezone && touched.selectedTimezone && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <FiAlertCircle className="w-3 h-3" />
                    {fieldErrors.selectedTimezone}
                  </p>
                )}
              </div>

              {/* Preferred Date + Time */}
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="meetingDate"
                    className="block text-sm font-medium text-slate-700 mb-1.5"
                  >
                    Preferred Date{" "}
                    <span className="text-slate-400 font-normal">(optional)</span>
                  </label>
                  <input
                    type="date"
                    id="meetingDate"
                    name="meetingDate"
                    value={formData.meetingDate}
                    min={todayStr}
                    max={maxDateStr}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`${inputClass("meetingDate")} bg-white`}
                    disabled={status === "submitting"}
                  />
                  {fieldErrors.meetingDate && touched.meetingDate && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <FiAlertCircle className="w-3 h-3" />
                      {fieldErrors.meetingDate}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="meetingTime"
                    className="block text-sm font-medium text-slate-700 mb-1.5"
                  >
                    Preferred Time{" "}
                    <span className="text-slate-400 font-normal">(optional)</span>
                  </label>
                  <select
                    id="meetingTime"
                    name="meetingTime"
                    value={formData.meetingTime}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`${inputClass("meetingTime")} appearance-none bg-white`}
                    disabled={status === "submitting"}
                  >
                    <option value="">Select a time</option>
                    {timeSlots.map((slot) => (
                      <option key={slot.value} value={slot.value}>
                        {slot.label}
                      </option>
                    ))}
                  </select>
                  {fieldErrors.meetingTime && touched.meetingTime && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <FiAlertCircle className="w-3 h-3" />
                      {fieldErrors.meetingTime}
                    </p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all resize-none text-slate-900"
                  placeholder="Tell us about your needs..."
                  disabled={status === "submitting"}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-4 bg-indigo-600 text-white rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden"
              >
                {status === "submitting" && (
                  <div className="absolute inset-0 bg-indigo-700/30 animate-pulse" />
                )}
                {status === "submitting" ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    <span>Setting up your account…</span>
                  </>
                ) : (
                  <>
                    Get Instant Access →
                    <FiSend className="w-4 h-4" />
                  </>
                )}
              </button>

              <p className="text-xs text-slate-400 text-center">
                By submitting this form, you agree to our{" "}
                <a
                  href="/privacy-policy"
                  className="text-indigo-600 hover:underline"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </form>
          </div>

          {/* ── Right column: contact info ───────────────────────────────── */}
          <div className="space-y-6">
            {/* Contact cards */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
              <h4 className="text-lg font-bold text-slate-900 mb-6">
                Get in Touch
              </h4>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 shrink-0">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm mb-0.5">
                      Email Us
                    </p>
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
                    <p className="font-semibold text-slate-900 text-sm mb-0.5">
                      Call Us
                    </p>
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
                      61 Bridge Street
                      <br />
                      Kington, England
                      <br />
                      United Kingdom, HR5 3DJ
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
                      {bold}:
                      {rest}
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
