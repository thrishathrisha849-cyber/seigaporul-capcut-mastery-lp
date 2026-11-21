import { useState, useEffect } from "react";

interface StepCard {
  number: string;
  title: string;
  description: string;
  iconType: "learn" | "implement" | "monetize" | "scale";
}

interface Testimonial {
  id: number;
  quote: string;
  highlight: string;
  name: string;
  role: string;
  initials: string;
}

export const METHODOLOGY_STEPS: StepCard[] = [
  {
    number: "01",
    title: "Learn",
    description: "Master software tools with structured, practical projects.",
    iconType: "learn",
  },
  {
    number: "02",
    title: "Implement",
    description: "Build real portfolio pieces that prove your capability.",
    iconType: "implement",
  },
  {
    number: "03",
    title: "Monetize",
    description:
      "Discover service ideas, pricing models, and how to reach your first 3 paying clients.",
    iconType: "monetize",
  },
  {
    number: "04",
    title: "Scale",
    description: "Turn one-off gigs into retainers and build a sustainable business.",
    iconType: "scale",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote:
      "Most courses stop at showing how the buttons work. Seigai Porul taught me how to package my Canva and CapCut skills into a",
    highlight: "₹15,000/month retainer service",
    name: "Santhosh Kumar",
    role: "Freelance Video Creator",
    initials: "SK",
  },
  {
    id: 2,
    quote:
      "Within 3 weeks of applying the Monetize framework, I closed 2 local restaurant clients for short-form reels earning",
    highlight: "₹22,000 in my first month",
    name: "Praveen Raj",
    role: "Content Creator & Editor",
    initials: "PR",
  },
  {
    id: 3,
    quote:
      "The client outreach templates and pricing strategies made all the difference. I transformed from a beginner into managing",
    highlight: "4 recurring brand retainers",
    name: "Divya Bharathi",
    role: "Social Media Strategist",
    initials: "DB",
  },
  {
    id: 4,
    quote:
      "I was stuck doing one-off ₹500 gigs. Learning how to position video editing as business growth helped me sign a",
    highlight: "₹35,000/month contract",
    name: "Karthik Vignesh",
    role: "Reels & Ads Specialist",
    initials: "KV",
  },
];

export function EarnFromSkillSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentSlide] ?? TESTIMONIALS[0]!;

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 select-none overflow-hidden border-t border-[#F0F0F0] bg-white text-[#111111]">
      <div className="relative z-10 max-w-[1180px] mx-auto">
        {/* Main Grid: Left Column (Heading + Text + CTA) & Right Column (4 Step Cards Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col items-start pt-1">
            {/* Red 03 Badge */}
            <div className="inline-flex items-center justify-center px-3.5 py-1 rounded-[6px] bg-[#FFF0F0] text-[#E92323] text-[13px] font-black tracking-wide mb-5">
              03
            </div>

            {/* Main Headline */}
            <h2 className="text-[32px] sm:text-[38px] lg:text-[42px] font-black tracking-tight leading-[1.15] text-[#111111]">
              Don&apos;t Just Learn the Skill.{" "}
              <span className="text-[#E92323]">Learn How to Earn</span> From It.
            </h2>

            {/* Subtitle / Description */}
            <p className="mt-4 text-[14px] sm:text-[15px] leading-relaxed max-w-[480px] text-[#555555]">
              Every learning path connects technical tools with the business side — because a skill
              only changes your life when someone pays you for it.
            </p>

            {/* CTA Button: Explore Bundles */}
            <div className="mt-8">
              <a
                href="https://pay.capcut.seigaporul.in/capcut-payment-page-page"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full hover:bg-[#E92323] text-white font-bold text-[14px] shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition duration-200 active:scale-[0.98] cursor-pointer border-qb-highlight-grammar-error-emphasized-underline-color bg-black"
              >
                <span className="bg-qb-highlight-grammar-error-emphasized-underline-color">
                  Get Started With CapCut
                </span>
                <span className="font-bold text-base leading-none">→</span>
              </a>
            </div>
          </div>

          {/* Right Column: 2x2 Grid of 4 Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {METHODOLOGY_STEPS.map((step) => (
              <div
                key={step.number}
                className="rounded-[18px] sm:rounded-[20px] border p-5 sm:p-6 flex flex-col justify-between shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-[#E5E7EB] transition duration-200 bg-[#fff5f5] border-0"
              >
                <div>
                  {/* Top row: Icon + Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FFF0F0] flex items-center justify-center text-[#E92323]">
                      {step.iconType === "learn" && (
                        <svg
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
                          <path d="M6 6h10" />
                          <path d="M6 10h10" />
                        </svg>
                      )}
                      {step.iconType === "implement" && (
                        <svg
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="2" y="3" width="20" height="14" rx="2" />
                          <line x1="8" y1="21" x2="16" y2="21" />
                          <line x1="12" y1="17" x2="12" y2="21" />
                        </svg>
                      )}
                      {step.iconType === "monetize" && (
                        <svg
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 6v12M15 9.5a2.5 2.5 0 0 0-5 0c0 3 5 2 5 5a2.5 2.5 0 0 1-5 0" />
                        </svg>
                      )}
                      {step.iconType === "scale" && (
                        <svg
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="18" y1="20" x2="18" y2="10" />
                          <line x1="12" y1="20" x2="12" y2="4" />
                          <line x1="6" y1="20" x2="6" y2="14" />
                        </svg>
                      )}
                    </div>

                    <span className="text-[#D1D5DB] font-extrabold text-[15px] tracking-tight">
                      {step.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[19px] sm:text-[20px] font-extrabold text-[#111111] tracking-tight">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-[13px] sm:text-[13.5px] text-[#555555] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Testimonial Banner with 4 Slides, Prev/Next Arrows & Indicators */}
        <div className="relative mt-12 sm:mt-16 w-full rounded-[18px] sm:rounded-[20px] bg-[#FFF5F5] border border-[#FFE2E2] p-5 sm:p-6 lg:p-7 shadow-sm transition-all duration-300">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 min-h-[92px]">
            {/* Quote and Highlight */}
            <div className="flex items-start gap-3.5 flex-1 transition-opacity duration-300">
              <span className="text-[#E92323] text-2xl font-serif leading-none mt-0.5 select-none shrink-0">
                “
              </span>
              <p className="text-[13.5px] sm:text-[14.5px] text-[#2D2D2D] font-normal leading-relaxed">
                {current.quote}{" "}
                <strong className="font-extrabold text-[#111111]">{current.highlight}</strong>{" "}
                within 6 weeks.
              </p>
            </div>

            {/* Author Profile */}
            <div className="flex items-center gap-3 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-[#FED7D7]/60">
              <div className="w-9 h-9 rounded-full bg-[#E92323] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                {current.initials}
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[13px] font-bold text-[#111111] leading-tight">
                  {current.name}
                </span>
                <span className="text-[11.5px] text-[#777777] leading-tight mt-0.5">
                  {current.role}
                </span>
              </div>
            </div>
          </div>

          {/* Slider Controls: Arrows & 4 Pagination Dots */}
          <div className="mt-4 pt-3 border-t border-[#FFE2E2]/60 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentSlide === idx
                      ? "w-7 bg-[#E92323]"
                      : "w-2 bg-[#E92323]/25 hover:bg-[#E92323]/50"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={prevSlide}
                aria-label="Previous testimonial"
                className="w-7 h-7 rounded-full bg-white/80 hover:bg-white text-[#2D2D2D] hover:text-[#E92323] flex items-center justify-center border border-[#FFE2E2] shadow-2xs transition active:scale-95 cursor-pointer"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next testimonial"
                className="w-7 h-7 rounded-full bg-white/80 hover:bg-white text-[#2D2D2D] hover:text-[#E92323] flex items-center justify-center border border-[#FFE2E2] shadow-2xs transition active:scale-95 cursor-pointer"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
