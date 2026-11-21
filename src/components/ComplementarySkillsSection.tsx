import { SKILL_CARDS } from "../lib/complementary-skills-data";

export function ComplementarySkillsSection() {
  return (
    <section className="relative w-full bg-[#390404] text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
      {/* Subtle radial ambient warm glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[380px] bg-red-600/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-[1160px] mx-auto flex flex-col items-center mt-[-40px] mb-[-50px]">
        {/* Section Heading matching exact image */}
        <h2 className="text-center font-black text-[28px] sm:text-[38px] md:text-[44px] lg:text-[48px] tracking-tight leading-tight">
          <span className="text-[#D8E619]">Skills That Work</span>{" "}
          <span className="text-white">Even Better With CapCut.</span>
        </h2>

        {/* Subheading text */}
        <p className="mt-2.5 sm:mt-3 text-center text-[13px] sm:text-[14.5px] md:text-[15.5px] text-[#D8C7C7] max-w-[850px] font-normal leading-relaxed">
          Explore complementary skills that can help you expand your creative services and deliver
          more value to clients.
        </p>

        {/* 3 Course Skill Cards matching exact layout */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 mt-10 sm:mt-12 mb-12 sm:mb-14">
          {SKILL_CARDS.map((card, index) => (
            <div key={index} className="flex flex-col group">
              {/* Image Card Container */}
              <div className="relative w-full aspect-[16/9.1] rounded-[18px] sm:rounded-[20px] overflow-hidden bg-black/50 border border-white/10 shadow-[0_12px_28px_rgba(0,0,0,0.45)] group-hover:border-white/25 transition duration-300">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
                />
              </div>

              {/* Content underneath matching reference */}
              <div className="pt-4 flex flex-col items-start text-left">
                <h3 className="text-[17px] sm:text-[18px] font-bold text-white tracking-normal">
                  {card.title}
                </h3>
                <p className="mt-1.5 text-[12.5px] sm:text-[13px] text-[#C9B3B3] leading-relaxed">
                  {card.desc}
                </p>
                <a
                  href="#view-course"
                  className="mt-3.5 inline-flex items-center text-[13px] font-medium text-[#D8E619] hover:underline transition-all group-hover:translate-x-0.5 duration-200"
                >
                  {card.linkText}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Pill Button */}
        <div className="flex justify-center">
          <a
            href="#view-full-course"
            className="px-8 sm:px-9 py-3 rounded-full bg-white text-[#111111] hover:bg-slate-100 font-bold text-[14px] sm:text-[15px] shadow-[0_4px_20px_rgba(0,0,0,0.25)] flex items-center justify-center gap-1.5 transition duration-200 active:scale-95 cursor-pointer"
          >
            <span>View Full Course</span>
            <span className="font-bold text-base leading-none">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
