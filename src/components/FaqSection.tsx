import { useState } from "react";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    question: "1. What is Seigai Porul?",
    answer:
      "Seigai Porul is a modern skill-to-income learning ecosystem built for creators, freelancers, and aspiring entrepreneurs in Tamil Nadu and worldwide. We focus on high-impact digital skills like CapCut video editing, Canva design, and copywriting, coupled with real-world monetization frameworks so you can start landing clients.",
  },
  {
    id: 2,
    question: "2. Who are these courses for?",
    answer:
      "Our courses are designed for beginners, content creators, freelancers, and small business owners who want to produce scroll-stopping videos, build a compelling portfolio, and generate a steady stream of income or retainers without prior editing experience.",
  },
  {
    id: 3,
    question: "3. Can I start if I haven't started a business yet?",
    answer:
      "Absolutely! You do not need an existing business or brand. Our step-by-step curriculum begins from absolute ground zero: mastering the tools, building proof of work, and following our proven client-acquisition templates to land your first 3 paying clients.",
  },
  {
    id: 4,
    question: "4. Can I buy individual mini-courses?",
    answer:
      "Yes, you can enroll in individual skill courses (like CapCut Foundations or Canva for Creators) at ₹499 each, or unlock the entire suite with our value-packed Starter Bundle or Freelancer Cohort for maximum savings and mentorship.",
  },
  {
    id: 5,
    question: "5. What is included in the bundles?",
    answer:
      "Bundles include complete access to our core mini-courses, practical video editing templates, font & asset packs, monetization roadmaps, client outreach scripts, project reviews, and entry into our private creator community.",
  },
  {
    id: 6,
    question: "6. Who teaches the courses?",
    answer:
      "All lessons are crafted and taught by experienced Tamil creators and active industry freelancers who manage real client video pipelines and retainer businesses daily.",
  },
  {
    id: 7,
    question: "7. Will I learn how to make money from my skills?",
    answer:
      "Yes, this is our core philosophy. We don't just teach software buttons; every track contains dedicated modules on service packaging, pricing strategies, outreach DM scripts, and retainer pitching (₹15,000–₹50,000/month models).",
  },
  {
    id: 8,
    question: "8. How can I choose the right skill?",
    answer:
      "If you're unsure where to start, CapCut short-form editing is currently in the highest demand from Instagram reels and YouTube shorts creators. You can combine it with Canva or Copywriting to offer a high-value full-package service.",
  },
  {
    id: 9,
    question: "9. How do I access the courses?",
    answer:
      "Immediately after enrollment, you receive instant lifetime access to the video lessons, downloadable resources, and community access link directly via email and WhatsApp.",
  },
];

export function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative w-full bg-white text-[#111111] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 select-none border-t border-[#F0EAEA]">
      <div className="max-w-[860px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-[32px] sm:text-[40px] lg:text-[46px] font-black tracking-tight text-[#111111]">
            Frequently Asked <span className="text-[#E92323]">Questions</span>
          </h2>
          <p className="mt-3 text-[14px] sm:text-[15.5px] text-[#444444] font-normal max-w-[620px] mx-auto leading-relaxed">
            Everything you need to know about our courses, cohorts, and business methodology.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-3">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-[10px] sm:rounded-[12px] bg-[#FFF5F5] border border-[#FFE7E7]/80 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between px-5 sm:px-6 py-4 text-left cursor-pointer hover:bg-[#FFEFEF]/70 transition-colors duration-150 group"
                  aria-expanded={isOpen}
                >
                  <span className="text-[14px] sm:text-[15px] font-semibold text-[#1A1A1A] group-hover:text-[#E92323] transition-colors pr-4 leading-snug">
                    {item.question}
                  </span>
                  <svg
                    className={`w-4 h-4 text-[#555555] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#E92323]" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-4 pt-1 text-[13.5px] sm:text-[14px] text-[#4B5563] leading-relaxed border-t border-[#FFE2E2]/60 animate-fadeIn">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
