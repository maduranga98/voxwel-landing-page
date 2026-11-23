"use client";

import { useState } from "react";
import Image from "next/image";

const tabs = [
  { label: "🛡️ Anonymous Reports", color: "red" },
  { label: "💬 Team Pulse", color: "blue" },
  { label: "⭐ Recognition Feed", color: "purple" },
];

const tabContent = [
  {
    title: "Anonymous Reports",
    description:
      "A fully encrypted channel where employees report harassment, fraud, and safety violations with complete anonymity. Every submission is AES-256 encrypted end-to-end. No trace. No fear. No retaliation risk.",
    features: [
      "Report workplace harassment, fraud, safety issues",
      "Completely anonymous — zero metadata stored",
      "Priority auto-tagging and category selection",
      "7-stage resolution workflow",
      "File attachment support",
      "Two-way anonymous communication with admin",
    ],
    url: "app.voxwel.com/problems",
    screenshot: "/screenshots/problems-wall.avif",
    alt: "VoxWel Problems Feed showing anonymous employee reports with priority badges and status tracking",
  },
  {
    title: "Team Pulse",
    description:
      "An open discussion channel for team-wide conversations, ideas, and questions. Monitor workplace sentiment and surface morale issues before they become formal complaints or resignation letters.",
    features: [
      "Open, named team discussions",
      "Ideas & suggestions, questions, policy clarifications",
      "Category-based organization",
      "Upvote/downvote system surfaces popular concerns",
      "Admin can respond publicly or privately",
      "Searchable by keyword and category",
    ],
    url: "app.voxwel.com/discussions",
    screenshot: "/screenshots/discussions-wall.avif",
    alt: "VoxWel Team Pulse showing discussions and team conversations",
  },
  {
    title: "Recognition Feed",
    description:
      "Celebrate team wins, milestones, and achievements publicly. Balance your reporting culture with a culture of genuine appreciation. Show employees the platform isn't just for problems.",
    features: [
      "Team achievements and anniversary celebrations",
      "Public shout-outs and peer recognition",
      "Company-wide visibility across departments",
      "Positive culture building alongside accountability",
      "React and comment on colleague milestones",
      "Admin can pin and highlight top recognitions",
    ],
    url: "app.voxwel.com/creative",
    screenshot: "/screenshots/creative-wall.avif",
    alt: "VoxWel Recognition Feed showing team achievements and celebrations",
  },
];

const featureTiles = [
  {
    icon: "🔒",
    title: "Military Encryption",
    desc: "AES-256 end-to-end on every report. Unreadable in transit and at rest.",
  },
  {
    icon: "📊",
    title: "Real-Time Analytics",
    desc: "Resolution rates, trends, engagement scores. Always current.",
  },
  {
    icon: "⚡",
    title: "24hr Setup",
    desc: "QR code + link. No IT project. Live the same day you sign up.",
  },
  {
    icon: "📋",
    title: "Audit Trail",
    desc: "Every action timestamped and logged. Built for compliance reviews.",
  },
  {
    icon: "🔔",
    title: "Smart Alerts",
    desc: "Critical reports surface immediately. Never miss urgent issues.",
  },
  {
    icon: "👥",
    title: "Role-Based Access",
    desc: "Separate views for HR, Legal, Compliance, and Management.",
  },
];

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const content = tabContent[activeTab];

  return (
    <section id="features" className="bg-slate-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-4">
          Three Channels. One Platform.
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Whistleblowing software features your HR and compliance team needs
        </h2>
        <p className="text-slate-600 text-lg mb-16 max-w-2xl">
          Anonymous employee reporting software built for real anonymity, real
          compliance, and real workplace culture.
        </p>

        {/* Tab buttons */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === i
                  ? "bg-indigo-600 text-white shadow-md"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left — description */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              {content.title}
            </h3>
            <p className="text-slate-600 mb-6">{content.description}</p>
            <div className="space-y-2">
              {content.features.map((f) => (
                <div
                  key={f}
                  className="flex items-center gap-2 text-sm text-slate-700"
                >
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full shrink-0"></div>
                  {f}
                </div>
              ))}
            </div>
          </div>

          {/* Right — screenshot */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200">
            <div className="bg-slate-800 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
              </div>
              <span className="text-slate-400 text-xs font-mono ml-2">
                {content.url}
              </span>
            </div>
            <Image
              src={content.screenshot}
              alt={content.alt}
              width={800}
              height={480}
              className="w-full transition-opacity duration-300"
              style={{
                objectFit: "cover",
                objectPosition: "top",
                maxHeight: "480px",
              }}
            />
          </div>
        </div>

        {/* Feature tiles grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
          {featureTiles.map((f, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-xl p-5 flex items-start gap-4 hover:border-indigo-200 hover:shadow-sm transition-all"
            >
              <span className="text-2xl">{f.icon}</span>
              <div>
                <h4 className="font-semibold text-slate-900 text-sm mb-1">
                  {f.title}
                </h4>
                <p className="text-slate-500 text-sm">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
