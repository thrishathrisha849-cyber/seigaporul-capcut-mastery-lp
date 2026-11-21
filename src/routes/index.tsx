import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "../components/HeroSection";
import { TickerBand } from "../components/TickerBand";
import { CurriculumSection } from "../components/CurriculumSection";
import { ComplementarySkillsSection } from "../components/ComplementarySkillsSection";
import { PricingPlansSection } from "../components/PricingPlansSection";
import { EarnFromSkillSection } from "../components/EarnFromSkillSection";
import { CorePrincipleSection } from "../components/CorePrincipleSection";
import { FaqSection } from "../components/FaqSection";
import { FooterSection } from "../components/FooterSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SeigaPorul - Learn CapCut. Create Content. Build a Business." },
      {
        name: "description",
        content:
          "Master practical video editing skills, create engaging reels and videos, and discover how to turn your editing skills into a high-demand service businesses need.",
      },
      { property: "og:title", content: "SeigaPorul - Learn CapCut" },
      {
        property: "og:description",
        content:
          "Master practical video editing skills, create engaging reels and videos, and discover how to turn your editing skills into a high-demand service businesses need.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:image",
        content:
          "https://vibe.filesafe.space/1793681755888928104/attachments/9e9e27c0-f12c-4f88-9088-3b980b50104a.png",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:image",
        content:
          "https://vibe.filesafe.space/1793681755888928104/attachments/9e9e27c0-f12c-4f88-9088-3b980b50104a.png",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-[#FFF9F9] text-[#111111] overflow-x-hidden selection:bg-red-500 selection:text-white font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Background Subtle Geometric/Wave Lines & Ambient Glow for Section 1 */}
      <div className="absolute top-0 left-0 right-0 h-[880px] pointer-events-none overflow-hidden select-none">
        <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[1400px] h-[550px] bg-gradient-to-b from-rose-100/40 via-red-50/20 to-transparent blur-2xl" />

        <svg
          className="absolute -top-12 left-1/2 -translate-x-1/2 w-[1800px] h-[720px] opacity-35"
          viewBox="0 0 1800 720"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {Array.from({ length: 18 }).map((_, i) => (
            <path
              key={i}
              d={`M ${-200 + i * 25} 0 C ${400 + i * 15} ${120 + i * 18}, ${1100 - i * 15} ${
                260 + i * 14
              }, ${2000 - i * 20} ${50 + i * 22}`}
              stroke="#fca5a5"
              strokeWidth="0.75"
              strokeOpacity={0.25 - i * 0.008}
            />
          ))}
          {Array.from({ length: 14 }).map((_, i) => (
            <path
              key={`r-${i}`}
              d={`M ${-150 + i * 30} ${70 + i * 10} C ${550 + i * 20} ${-40 + i * 25}, ${
                1250 - i * 20
              } ${180 + i * 15}, ${1950} ${280 + i * 18}`}
              stroke="#e2e8f0"
              strokeWidth="0.8"
              strokeOpacity={0.3}
            />
          ))}
        </svg>

        {/* Ambient floating elements */}
        <div className="absolute top-[28%] left-[2.5%] xl:left-[4%] w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 shadow-xl opacity-75 blur-[4px] rotate-12" />
        <div className="absolute top-[50%] left-[3%] xl:left-[5%] w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-600 shadow-xl opacity-70 blur-[5px] -rotate-6" />
        <div className="absolute top-[71%] left-[2%] xl:left-[3.5%] w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-xl opacity-65 blur-[6px] rotate-45" />

        <div className="absolute top-[30%] right-[3%] xl:right-[4.5%] w-16 h-16 rounded-2xl bg-gradient-to-br from-lime-400 to-green-500 shadow-xl opacity-70 blur-[5px] -rotate-12" />
        <div className="absolute top-[52%] right-[2%] xl:right-[3.5%] w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-700 to-orange-800 shadow-xl opacity-65 blur-[6px] rotate-12" />
        <div className="absolute top-[69%] right-[3.5%] xl:right-[5%] w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 shadow-xl opacity-70 blur-[5px] -rotate-45" />
      </div>

      {/* Section 1: Hero & Overview */}
      <HeroSection />

      {/* Marquee Ticker Band (LEARN THE SKILL ✦ BUILD YOUR PORTFOLIO ✦ SELL YOUR SERVICE) */}
      <TickerBand />

      {/* Everything You Need to Start Earning (Curriculum Accordion) */}
      <CurriculumSection />

      {/* Skills That Work Even Better With CapCut */}
      <ComplementarySkillsSection />

      {/* Choose Your Learning Plan (Pricing Plans) */}
      <PricingPlansSection />

      {/* Section 3: Don't Just Learn the Skill. Learn How to Earn From It */}
      <EarnFromSkillSection />

      {/* Section 5: Seigaporul Core Principle (Exact Image Template) */}
      <CorePrincipleSection />

      {/* Section 6: Frequently Asked Questions (Exact Image Template) */}
      <FaqSection />

      {/* Section 7: Final Footer (Exact Image Template) */}
      <FooterSection />
    </div>
  );
}
