const steps = [
  {
    step: "01",
    title: "Deploy Instantly",
    body: "Send your team a QR code or link. No app download. No IT project. No lengthy onboarding. Your anonymous reporting channel is live today.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Employees Report Safely",
    body: "Harassment, fraud, safety violations, discrimination — employees submit with complete anonymity. AES-256 encryption means no one can trace the source, not even IT.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "You Act Before It Escalates",
    body: "Receive instant alerts. Manage reports through a 7-stage documented workflow. Respond confidentially. Build your compliance audit trail automatically.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-slate-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-4">
          How It Works
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Launch your whistleblowing channel in 24 hours
        </h2>
        <p className="text-slate-600 text-lg mb-16 max-w-2xl">
          No IT project. No lengthy onboarding. No app install required.
        </p>

        {/* 3 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-10 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-indigo-200 via-indigo-400 to-indigo-200 z-0" />

          {steps.map((step, i) => (
            <div
              key={step.step}
              className={`fade-up fade-up-delay-${i + 1} relative bg-white rounded-2xl p-8 border border-slate-200 shadow-sm z-10`}
            >
              {/* Step number */}
              <div className="text-xs font-bold text-slate-400 tracking-widest mb-4">
                STEP {step.step}
              </div>
              {/* Icon circle */}
              <div className="w-14 h-14 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-indigo-200">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
