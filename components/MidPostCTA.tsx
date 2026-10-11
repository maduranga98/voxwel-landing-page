"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FiDownload, FiZap, FiAlertCircle, FiMail } from "react-icons/fi";

export interface MidPostCTAData {
  position: number;
  type: "lead-magnet" | "trial" | "email-capture" | "urgency";
  content: string;
}

const STYLE_BY_TYPE: Record<
  MidPostCTAData["type"],
  { wrapper: string; icon: React.ReactNode; label: string }
> = {
  "lead-magnet": {
    wrapper: "border-primary-teal/30 bg-primary-teal/5",
    icon: <FiDownload className="w-4 h-4" />,
    label: "Free resource",
  },
  trial: {
    wrapper: "border-indigo-200 bg-indigo-50",
    icon: <FiZap className="w-4 h-4" />,
    label: "Try VoxWel",
  },
  urgency: {
    wrapper: "border-amber-300 bg-amber-50",
    icon: <FiAlertCircle className="w-4 h-4" />,
    label: "Worth knowing",
  },
  "email-capture": {
    wrapper: "border-indigo-200 bg-indigo-50",
    icon: <FiMail className="w-4 h-4" />,
    label: "Stay updated",
  },
};

/** Renders one of a blog post's mid-article CTA callouts (lead magnet, trial nudge,
 * urgency note, etc). Content is short markdown ending in a [text](/demo) link. */
export default function MidPostCTA({ cta }: { cta: MidPostCTAData }) {
  const style = STYLE_BY_TYPE[cta.type] ?? STYLE_BY_TYPE.trial;

  return (
    <aside
      className={`not-prose my-8 rounded-2xl border-2 p-5 sm:p-6 ${style.wrapper}`}
      aria-label={style.label}
    >
      <div className="flex items-start gap-3">
        <div className="shrink-0 w-8 h-8 rounded-lg bg-white/70 flex items-center justify-center text-text-primary">
          {style.icon}
        </div>
        <div className="text-sm sm:text-base leading-relaxed text-text-primary [&_a]:text-primary-teal [&_a]:font-semibold [&_a]:underline [&_a]:underline-offset-2 [&_strong]:font-bold [&_p]:m-0">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{cta.content}</ReactMarkdown>
        </div>
      </div>
    </aside>
  );
}
