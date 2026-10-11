import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  FiTarget,
  FiHeart,
  FiUsers,
  FiShield,
  FiAward,
  FiTrendingUp,
} from "react-icons/fi";

export const metadata: Metadata = {
  title: "About VoxWel | Anonymous Workplace Reporting",
  description:
    "VoxWel was built to bridge the gap between what employees see and what companies know. Learn about our mission to protect every employee voice with military-grade AES-256 encryption.",
  alternates: {
    canonical: "https://voxwel.com/about",
  },
  openGraph: {
    title: "About VoxWel — Anonymous Workplace Reporting Platform",
    description:
      "Built to bridge the gap between what employees see and what companies know. Protecting every employee voice with military-grade encryption.",
    url: "https://voxwel.com/about",
  },
};

export default function AboutPage() {
  const values = [
    {
      icon: <FiShield className="w-8 h-8" />,
      title: "Protection First",
      description:
        "We believe every employee deserves a safe, secure channel to voice concerns without fear of retaliation.",
    },
    {
      icon: <FiHeart className="w-8 h-8" />,
      title: "Transparency",
      description:
        "Building trust through honest communication and clear processes that benefit both employees and employers.",
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "Empowerment",
      description:
        "Giving voice to those who see problems firsthand, empowering companies to act before it's too late.",
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: "Innovation",
      description:
        "Leveraging cutting-edge technology to solve age-old workplace communication challenges.",
    },
  ];

  const team = [
    {
      role: "Our Mission",
      description:
        "To revolutionize workplace communication by providing a secure, anonymous platform that protects employees and companies alike. We're building a world where problems are caught early, cultures are healthier, and businesses thrive.",
      icon: <FiTarget className="w-12 h-12" />,
    },
    {
      role: "Our Vision",
      description:
        "A future where every company has an early warning system for workplace issues,preventing lawsuits, protecting reputations, and creating safer, more transparent work environments.",
      icon: <FiAward className="w-12 h-12" />,
    },
  ];

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-background-white">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="section-container">
          {/* Header with back link */}
          <div className="mb-12">
            <Link
              href="/"
              className="text-primary-teal hover:underline text-sm mb-4 inline-block"
            >
              ← Back to Home
            </Link>
          </div>

          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-sm font-bold text-primary-teal uppercase tracking-wide mb-4">
              About VoxWel
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6 leading-tight">
              Your Partner in{" "}
              <span className="text-primary-teal">Workplace Safety</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-text-secondary max-w-4xl mx-auto">
              Born from the reality that employees see problems every day but
              fear speaking up. We created VoxWel to bridge that gap,protecting
              both people and companies.
            </p>
          </div>

          {/* Mission and Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {team.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-primary-teal hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary-teal/10 rounded-full flex items-center justify-center text-primary-teal">
                    {item.icon}
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-text-primary">
                    {item.role}
                  </h4>
                </div>
                <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Our Values */}
          <div className="bg-gradient-to-br from-primary-navy to-primary-teal rounded-3xl p-8 md:p-12 text-white mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Our Core Values
              </h3>
              <p className="text-base md:text-lg text-white/90 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 text-white">
                    {value.icon}
                  </div>
                  <h5 className="text-lg font-bold mb-3">{value.title}</h5>
                  <p className="text-sm text-white/80 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* The Story */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-l-4 border-primary-teal">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-text-primary mb-6">
              Why We Built VoxWel
            </h3>
            <div className="space-y-4 text-base md:text-lg text-text-secondary leading-relaxed">
              <p>
                We've seen it happen too many times: employees witness
                harassment, fraud, safety violations, or corruption,but stay
                silent out of fear. Fear of losing their job. Fear of
                retaliation. Fear that nothing will change.
              </p>
              <p>
                Meanwhile, company leadership remains in the dark. By the time
                they find out about the problem, it's already a lawsuit, media
                scandal, or criminal investigation. Millions of dollars in
                damages. Reputations destroyed. Lives ruined.
              </p>
              <p className="font-semibold text-primary-teal">
                It doesn't have to be this way.
              </p>
              <p>
                VoxWel creates a secure bridge between employees who see
                problems and leaders who can fix them,before those problems
                explode. With military-grade anonymity, smart escalation, and
                complete audit trails, we help companies catch storms before
                they hit.
              </p>
              <p>
                Because the best time to solve a problem is before it becomes a
                crisis.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-teal text-white rounded-lg font-bold text-base md:text-lg hover:bg-primary-teal/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <FiShield />
              Join Us in Making Workplaces Safer
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
