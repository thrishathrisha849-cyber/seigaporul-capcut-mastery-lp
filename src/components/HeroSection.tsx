export function HeroSection() {
  const heroImage =
    "https://vibe.filesafe.space/1793681755888928104/attachments/550f2939-e855-47eb-9f2b-761edb27f368.jpg";

  return (
    <div className="relative z-10 max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center pb-12 pt-[15px]">
      {/* 1. Header Logo: SeigaPorul */}
      <div className="flex items-center justify-center gap-2.5 mb-5 sm:mb-6">
        <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center">
          <svg
            className="w-9 h-9 sm:w-10 sm:h-10 text-[#E92323]"
            viewBox="0 0 40 40"
            fill="currentColor"
          >
            <path d="M20 2C10.06 2 2 10.06 2 20s8.06 18 18 18c4.32 0 8.27-1.52 11.37-4.06l-3.32-3.32C25.75 32.22 23 33.14 20 33.14 12.74 33.14 6.86 27.26 6.86 20S12.74 6.86 20 6.86c5.77 0 10.66 3.69 12.44 8.85l4.63-1.63C34.78 7.37 27.91 2 20 2z" />
            <path
              d="M20 11.5c-4.69 0-8.5 3.81-8.5 8.5s3.81 8.5 8.5 8.5c2.51 0 4.76-1.09 6.32-2.82l-3.23-3.23c-.76.74-1.83 1.19-3.09 1.19-2.38 0-4.32-1.94-4.32-4.32 0-2.38 1.94-4.32 4.32-4.32 1.34 0 2.5.61 3.25 1.57l3.29-3.29C24.78 12.21 22.5 11.5 20 11.5z"
              fill="#E92323"
            />
          </svg>
        </div>
        <span className="text-[27px] sm:text-[32px] font-black tracking-tight text-[#171717] leading-none">
          Seiga<span className="text-[#E92323]">Porul</span>
        </span>
      </div>

      {/* 2. Primary Headline - Single line across devices, never breaking the price */}
      <h1 className="text-center font-extrabold text-[22px] sm:text-[30px] md:text-[36px] lg:text-[44px] xl:text-[48px] tracking-[-0.03em] leading-tight text-[#000000] max-w-7xl w-full mx-auto px-4 sm:whitespace-nowrap mt-[-10px]">
        One Skill Could Earn You{" "}
        <span className="text-[#ED1F24] whitespace-nowrap">₹20K–₹70K/Month.</span>
      </h1>

      {/* 3. Sub-headline / paragraph with proper small text size */}
      <p className="text-center text-[12px] sm:text-[13px] md:text-[13.5px] leading-relaxed text-[#4A4A4A] max-w-[850px] font-normal px-4 mb-8 mt-[5px]">
        Learn CapCut video editing, create professional reels and brand videos, and turn your skill
        into a paid service. Discover how to find clients, price your work, and build a potential
        monthly income of{" "}
        <span className="whitespace-nowrap font-medium text-[#111111]">₹20K–₹70K.</span>
      </p>

      {/* 4. Middle Section: Video Player Card (Left) + Highlights Column (Right) */}
      <div className="w-full max-w-[1040px] grid grid-cols-1 lg:grid-cols-[600px_1fr] gap-7 lg:gap-11 items-center justify-center mt-[-10px]">
        {/* Image Display Card */}
        <div className="w-full">
          <div className="relative rounded-[22px] overflow-hidden bg-black shadow-[0_18px_45px_-10px_rgba(0,0,0,0.3)] border border-slate-900">
            <div className="aspect-[16/9] relative overflow-hidden flex items-center justify-center">
              <img src={heroImage} alt="CapCut Mastery" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Highlights Stack: Mobile-la 2 columns (2 elements per row) / lg-la 1 column vertical stack */}
        <div className="w-full grid grid-cols-2 lg:grid-cols-1 gap-x-4 gap-y-5 sm:gap-6 justify-center items-center lg:items-start py-2">
          {/* Feature 1 */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start lg:flex-row lg:items-center gap-2.5 sm:gap-4 text-center sm:text-left justify-center lg:justify-start">
            <div className="w-11 h-11 rounded-2xl bg-red-100/70 text-[#E92323] flex items-center justify-center shrink-0 shadow-sm">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[12px] sm:text-[13.5px] font-medium text-[#505050] leading-none mb-1 sm:mb-1.5">
                Learning Methodlogy
              </span>
              <span className="text-[18px] sm:text-[23px] lg:text-[25px] font-black text-[#E92323] leading-none tracking-tight">
                Self-Paced
              </span>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start lg:flex-row lg:items-center gap-2.5 sm:gap-4 text-center sm:text-left justify-center lg:justify-start">
            <div className="w-11 h-11 rounded-2xl bg-red-100/70 text-[#E92323] flex items-center justify-center shrink-0 shadow-sm">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                <rect x="2" y="4" width="20" height="15" rx="3" fill="#E92323" />
                <polygon points="10,8 16,11.5 10,15" fill="#ffffff" />
                <line
                  x1="2"
                  y1="21"
                  x2="22"
                  y2="21"
                  stroke="#E92323"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[12px] sm:text-[13.5px] font-medium text-[#505050] leading-none mb-1 sm:mb-1.5">
                Timing Starts at
              </span>
              <span className="text-[18px] sm:text-[23px] lg:text-[25px] font-black text-[#E92323] leading-none tracking-tight">
                Immediately
              </span>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start lg:flex-row lg:items-center gap-2.5 sm:gap-4 text-center sm:text-left justify-center lg:justify-start">
            <div className="w-11 h-11 rounded-2xl bg-red-100/70 text-[#E92323] flex items-center justify-center shrink-0 shadow-sm">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                <line x1="9" y1="7" x2="15" y2="7" />
                <line x1="9" y1="11" x2="15" y2="11" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[12px] sm:text-[13.5px] font-medium text-[#505050] leading-none mb-1 sm:mb-1.5">
                Course Hours
              </span>
              <span className="text-[18px] sm:text-[23px] lg:text-[25px] font-black text-[#E92323] leading-none tracking-tight">
                5+ Hours
              </span>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start lg:flex-row lg:items-center gap-2.5 sm:gap-4 text-center sm:text-left justify-center lg:justify-start">
            <div className="w-11 h-11 rounded-2xl bg-red-100/70 text-[#E92323] flex items-center justify-center shrink-0 shadow-sm">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="7" width="20" height="15" rx="3" />
                <path d="M17 2l-5 5-5-5" />
                <circle cx="12" cy="14" r="2.5" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[12px] sm:text-[13.5px] font-medium text-[#505050] leading-none mb-1 sm:mb-1.5">
                Will be Held in
              </span>
              <span className="text-[18px] sm:text-[23px] lg:text-[25px] font-black text-[#E92323] leading-none tracking-tight">
                TBT Course Portal
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Bottom Pricing & CTA Card */}
      <div className="w-full max-w-[1040px] bg-[#FFF6F6] rounded-[22px] px-6 sm:px-9 py-5 sm:py-6 shadow-[0_4px_25px_rgba(240,100,100,0.06)] border border-[#FFE2E2] text-center mt-[30px]">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2.5 mb-1.5 text-center pl-5">
              <span className="text-[14px] font-medium text-[#333333]">Special Course Access</span>
              <span className="px-2.5 py-0.5 rounded-[5px] bg-[#E92323] text-white text-[10.5px] font-black tracking-wider uppercase">
                30% OFF
              </span>
            </div>
            <div className="flex items-baseline gap-2.5 flex-wrap text-center">
              <span className="text-[34px] sm:text-[38px] font-black text-[#E92323] tracking-tight leading-none text-center pl-[60px]">
                ₹499
              </span>
              <span className="text-[15px] sm:text-[16px] font-bold text-[#444444] line-through leading-none">
                ₹1,999
              </span>
              <span className="text-[13.5px] sm:text-[14px] font-medium text-[#737373] leading-none pl-10"></span>
            </div>
            <div className="mt-2.5 flex items-center gap-1.5 text-[13px] sm:text-[13.5px] text-[#444444]">
              <span className="text-[#15803D] font-bold text-[14px] pt-[px] mt-[-10px]">✅</span>
              <span className="pb-[px] mb-[-10px]">
                <strong className="font-bold text-[#111111]">Tamil Language Instruction</strong>{" "}
                With English project templates
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2.5 shrink-0 justify-center w-full md:w-[270px]">
            <a
              href="https://pay.capcut.seigaporul.in/capcut-payment-page-page"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#E92323] hover:bg-[#D41C1C] text-white font-bold text-[14.5px] sm:text-[15px] transition shadow-[0_4px_14px_rgba(233,35,35,0.35)] text-center cursor-pointer active:scale-[0.98]"
            >
              <span>Get Started With CapCut</span>
              <span className="text-base font-bold">→</span>
            </a>
            <a
              href="#explore"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-6 rounded-full bg-white hover:bg-slate-50 text-[#111111] font-bold text-[14px] sm:text-[14.5px] border border-[#111111] transition text-center cursor-pointer active:scale-[0.98]"
            >
              <span>Explore What's Included</span>
              <span className="text-base font-bold">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
