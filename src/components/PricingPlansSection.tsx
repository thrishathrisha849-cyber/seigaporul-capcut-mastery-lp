export function PricingPlansSection() {
  return (
    <>
      {/* Section 2 Main Content Container */}
      <div
        id="explore"
        className="relative w-full max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-24 flex flex-col items-center scroll-mt-4"
      >
        {/* Section 2 Header */}
        <h2 className="text-center font-extrabold text-[32px] sm:text-[42px] md:text-[46px] tracking-[-0.03em] leading-tight text-[#111111]">
          Choose Your <span className="text-[#E92323]">Learning Plan</span>
        </h2>
        <p className="mt-2.5 mb-14 sm:mb-16 text-center text-[14px] sm:text-[15.5px] text-[#555555] max-w-[700px] font-normal px-2">
          Select the standalone CapCut course or expand into our comprehensive multi-software
          creator bundles.
        </p>

        {/* 3 Pricing Cards Grid */}
        <div className="w-full max-w-[1160px] grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch justify-center">
          {/* Card 1: Standalone Course */}
          <div className="bg-white rounded-[24px] border border-[#E5E7EB] p-7 sm:p-8 flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-md transition">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3.5">
                <span className="text-[11px] font-bold text-[#6B7280] uppercase tracking-wider">
                  STANDALONE COURSE
                </span>
                <span className="px-3 py-0.5 rounded-full bg-[#F9FAFB] border border-[#E5E7EB] text-[#4B5563] text-[11.5px] font-medium">
                  Self-Paced
                </span>
              </div>
              <h3 className="text-[24px] sm:text-[26px] font-extrabold text-[#111111] tracking-tight leading-snug">
                CapCut Course
              </h3>
              <p className="mt-2.5 text-[13px] text-[#555555] leading-relaxed">
                Essential masterclass for creators wanting to master CapCut Desktop and Mobile to
                produce viral social videos.
              </p>

              <div className="mt-6 mb-7 flex items-baseline gap-2.5 flex-wrap">
                <span className="text-[34px] sm:text-[38px] font-black text-[#111111] tracking-tight leading-none">
                  ₹499
                </span>
                <span className="text-[15px] font-semibold text-[#9CA3AF] line-through leading-none">
                  ₹1,999
                </span>
                <span className="px-2 py-0.5 rounded-[4px] bg-[#E8F8F0] text-[#059669] text-[11px] font-bold tracking-wide">
                  50% OFF
                </span>
              </div>

              <div className="h-px bg-[#F1F3F5] w-full mb-6" />
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#9CA3AF] mb-2.5">
                CURRICULUM SCOPE:
              </p>
              <div className="inline-block bg-[#F3F4F6] text-[#1F2937] text-[11.5px] font-semibold px-3 py-1 rounded-[6px] mb-6">
                Complete 5-Module CapCut Course
              </div>

              <ul className="space-y-3.5 text-[13px] text-[#374151]">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#E92323] font-bold text-[14px] mt-0.5 shrink-0">✓</span>
                  <span>Complete 5-Module CapCut curriculum</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#E92323] font-bold text-[14px] mt-0.5 shrink-0">✓</span>
                  <span>Desktop & Mobile video workflows</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#E92323] font-bold text-[14px] mt-0.5 shrink-0">✓</span>
                  <span>4K practice footage & LUT pack</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#E92323] font-bold text-[14px] mt-0.5 shrink-0">✓</span>
                  <span>Client pitch templates & pricing calculator</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4">
              <a
                href="https://pay.capcut.seigaporul.in"
                className="w-full flex items-center justify-center py-3 px-6 rounded-full bg-white hover:bg-[#F9FAFB] text-[#111111] font-bold text-[14px] border border-[#111111] transition shadow-xs text-center cursor-pointer active:scale-[0.98]"
              >
                Enroll in CapCut
              </a>
            </div>
          </div>

          {/* Card 2: 3-IN-1 CREATOR SUITE */}
          <div className="relative bg-white rounded-[24px] border-2 border-[#E92323] p-7 sm:p-8 flex flex-col justify-between shadow-[0_12px_36px_rgba(233,35,35,0.12)]">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#E92323] text-white text-[10.5px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm whitespace-nowrap">
              <span>◎</span>
              <span>BEST VALUE FOR CREATORS</span>
            </div>

            <div>
              <div className="flex items-center justify-between gap-2 mb-3.5 mt-1">
                <span className="text-[11.5px] font-extrabold text-[#E92323] uppercase tracking-wider">
                  3-IN-1 CREATOR SUITE
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#FFF0F0] border border-[#FFE0E0] text-[#E92323] text-[11px] font-semibold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-[24px] sm:text-[26px] font-extrabold text-[#111111] tracking-tight leading-snug">
                Creative Skill Bundle
              </h3>
              <p className="mt-2.5 text-[13px] text-[#555555] leading-relaxed">
                The ultimate video production stack. CapCut for rapid reels, Premiere Pro for
                long-form client edits, and After Effects for kinetic motion graphics.
              </p>

              <div className="mt-6 mb-7 flex items-baseline gap-2.5 flex-wrap">
                <span className="text-[34px] sm:text-[38px] font-black text-[#E92323] tracking-tight leading-none">
                  ₹3,749
                </span>
                <span className="text-[15px] font-semibold text-[#9CA3AF] line-through leading-none">
                  ₹9,999
                </span>
                <span className="px-2 py-0.5 rounded-[4px] bg-[#E8F8F0] text-[#059669] text-[11px] font-bold tracking-wide">
                  55% OFF
                </span>
              </div>

              <div className="h-px bg-[#FEE2E2] w-full mb-6" />
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#9CA3AF] mb-2.5">
                6 CORE SOFTWARE PROGRAMS:
              </p>
              <div className="flex items-center gap-2 flex-wrap mb-6">
                <span className="bg-[#FFF0F0] text-[#E92323] border border-[#FECACA] text-[11px] font-bold px-2.5 py-1 rounded-[6px]">
                  CapCut Mastery
                </span>
                <span className="bg-[#F3F4F6] text-[#374151] text-[11px] font-semibold px-2.5 py-1 rounded-[6px]">
                  Canva Mastery
                </span>
                <span className="bg-[#F3F4F6] text-[#374151] text-[11px] font-semibold px-2.5 py-1 rounded-[6px]">
                  Photoshop Mastery
                </span>
                <span className="bg-[#F3F4F6] text-[#374151] text-[11px] font-semibold px-2.5 py-1 rounded-[6px]">
                  Logo Design Mastery
                </span>
                <span className="bg-[#F3F4F6] text-[#374151] text-[11px] font-semibold px-2.5 py-1 rounded-[6px]">
                  Illustrator Mastery
                </span>
                <span className="bg-[#F3F4F6] text-[#374151] text-[11px] font-semibold px-2.5 py-1 rounded-[6px]"></span>
              </div>

              <ul className="space-y-3.5 text-[13px] text-[#374151]">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#E92323] font-bold text-[14px] mt-0.5 shrink-0">✓</span>
                  <span className="font-bold text-[#111111]">Everything In CapCut Course</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#E92323] font-bold text-[14px] mt-0.5 shrink-0">✓</span>
                  <span> Complete Graphic Design &amp; Video Editing Training</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#E92323] font-bold text-[14px] mt-0.5 shrink-0">✓</span>
                  <span>Professional Logo, Branding &amp; Social Media Design</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#E92323] font-bold text-[14px] mt-0.5 shrink-0">✓</span>
                  <span>Advanced Photo Editing, Manipulation &amp; Visual Effects</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#E92323] font-bold text-[14px] mt-0.5 shrink-0">✓</span>
                  <span> Reels, Shorts, Motion Graphics &amp; Video Editing</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4">
              <a
                href="https://pay.designing.seigaporul.in/designing-bundle-page"
                className="w-full flex items-center justify-center py-3 px-6 rounded-full bg-[#E92323] hover:bg-[#D41C1C] text-white font-bold text-[14px] transition shadow-[0_4px_14px_rgba(233,35,35,0.35)] text-center cursor-pointer active:scale-[0.98]"
              >
                Get Designing Bundle
              </a>
            </div>
          </div>

          {/* Card 3: Complete Skill Bundle */}
          <div className="bg-white rounded-[24px] border border-[#E5E7EB] p-7 sm:p-8 flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-md transition">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3.5">
                <span className="text-[11px] font-bold text-[#6B7280] uppercase tracking-wider">
                  AGENCY ECOSYSTEM
                </span>
                <span className="px-3 py-0.5 rounded-full bg-[#F9FAFB] border border-[#E5E7EB] text-[#4B5563] text-[11.5px] font-medium">
                  All-Access
                </span>
              </div>
              <h3 className="text-[24px] sm:text-[26px] font-extrabold text-[#111111] tracking-tight leading-snug">
                Seigaporul
              </h3>
              <p className="mt-2.5 text-[13px] text-[#555555] leading-relaxed">
                Complete creative and digital marketing arsenal. Built for creators starting a
                digital media agency or scaling high-ticket offerings.
              </p>

              <div className="mt-6 mb-7 flex items-baseline gap-2.5 flex-wrap">
                <span className="text-[34px] sm:text-[38px] font-black text-[#111111] tracking-tight leading-none">
                  ₹*****
                </span>
                <span className="text-[15px] font-semibold text-[#9CA3AF] line-through leading-none">
                  ₹24,999
                </span>
                <span className="px-2 py-0.5 rounded-[4px] bg-[#E8F8F0] text-[#059669] text-[11px] font-bold tracking-wide">
                  60% OFF
                </span>
              </div>

              <div className="h-px bg-[#F1F3F5] w-full mb-6" />
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#9CA3AF] mb-2.5">
                INCLUDES 15+ CORE MASTERCLASSES:
              </p>
              <div className="flex items-center gap-1.5 flex-wrap mb-6">
                <span className="bg-[#F3F4F6] text-[#374151] text-[11px] font-semibold px-2 py-0.5 rounded-[5px]">
                  Canva Mastery
                </span>
                <span className="bg-[#F3F4F6] text-[#374151] text-[11px] font-semibold px-2 py-0.5 rounded-[5px]">
                  Capcut Mastery
                </span>
                <span className="bg-[#F3F4F6] text-[#374151] text-[11px] font-semibold px-2 py-0.5 rounded-[5px]">
                  Logo Design Mastery
                </span>
                <span className="bg-[#F3F4F6] text-[#374151] text-[11px] font-semibold px-2 py-0.5 rounded-[5px]">
                  Photoshop Mastery
                </span>
                <span className="bg-[#F3F4F6] text-[#374151] text-[11px] font-semibold px-2 py-0.5 rounded-[5px]">
                  Illustrator Mastery
                </span>
                <span className="bg-[#F3F4F6] text-[#374151] text-[11px] font-semibold px-2 py-0.5 rounded-[5px]">
                  21+Courses
                </span>
              </div>

              <ul className="space-y-3.5 text-[13px] text-[#374151]">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#E92323] font-bold text-[14px] mt-0.5 shrink-0">✓</span>
                  <span className="font-bold text-[#111111]">
                    Entire Seigai Porul Academy Library
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#E92323] font-bold text-[14px] mt-0.5 shrink-0">✓</span>
                  <span>Photoshop, Illustrator & Canva Brand Mastery</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#E92323] font-bold text-[14px] mt-0.5 shrink-0">✓</span>
                  <span>Meta Ads & High-Converting Funnel Setup</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#E92323] font-bold text-[14px] mt-0.5 shrink-0">✓</span>
                  <span>1-on-1 Monthly Mentorship & Agency Contracts</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#E92323] font-bold text-[14px] mt-0.5 shrink-0">✓</span>
                  <span>Priority Support & Lifetime Updates</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4">
              <a
                href="#enroll-all-access"
                className="w-full flex items-center justify-center py-3 px-6 rounded-full bg-white hover:bg-[#F9FAFB] text-[#111111] font-bold text-[14px] border border-[#111111] transition shadow-xs text-center cursor-pointer active:scale-[0.98]"
              >
                Comming Soon
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
