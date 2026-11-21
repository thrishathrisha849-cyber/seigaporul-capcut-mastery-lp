export function FooterSection() {
  return (
    <footer className="w-full select-none">
      {/* Upper Main Footer in Deep Dark Maroon */}
      <div className="bg-[#240306] text-white pb-14 px-4 sm:px-6 lg:px-12 border-t border-[#3F0B10] pt-[38px]">
        <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-14">
          {/* Left Brand Col */}
          <div className="max-w-[320px] shrink-0">
            {/* Logo */}
            <div className="flex items-center gap-2.5 text-center pl-[60px]">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#E92323] to-[#FF4D4D] flex items-center justify-center shadow-[0_2px_12px_rgba(233,35,35,0.4)]">
                <svg
                  className="w-5 h-5 text-white stroke-[2.4]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10" />
                  <path d="M12 6a6 6 0 1 0 6 6" />
                  <circle cx="12" cy="12" r="2" fill="currentColor" />
                </svg>
              </div>
              <span className="text-[24px] sm:text-[26px] font-black tracking-tight text-white">
                Seiga<span className="text-[#E92323]">Porul</span>
              </span>
            </div>

            {/* Tagline / Subtitle */}
            <p className="mt-4 text-[13px] sm:text-[13.5px] leading-[1.45] text-[#D1D5DB]/85 font-normal pl-[60px] pb-[px] mb-[-20px]">
              Turn Your Skills Into a Business.
              <br />
              Learn, Implement, Monetize, and
              <br />
              Scale with Tamil Business Tribe
            </p>
          </div>

          {/* Right Navigation Columns */}
          <div className="w-full flex-1 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 pt-1 lg:pt-1">
            {/* Col 1 with BUNDLES header */}
            <div className="flex flex-col">
              <span className="text-[11.5px] sm:text-[12px] font-extrabold tracking-[0.16em] uppercase text-[#D2FF3A] mb-3 sm:mb-4">
                BUNDLES
              </span>
              <ul className="space-y-2.5 text-[13px] sm:text-[13.5px] text-[#E5E7EB]/90">
                <li>
                  <a
                    href="#pricing-plans"
                    className="hover:text-white hover:underline transition-colors block"
                  >
                    Creator to Agency
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing-plans"
                    className="hover:text-white hover:underline transition-colors block"
                  >
                    Micro-SaaS Mastery
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 2 */}
            <div className="flex flex-col sm:pt-[29px]">
              <ul className="space-y-2.5 text-[13px] sm:text-[13.5px] text-[#E5E7EB]/90">
                <li>
                  <a
                    href="#pricing-plans"
                    className="hover:text-white hover:underline transition-colors block"
                  >
                    E-Commerce Operations
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing-plans"
                    className="hover:text-white hover:underline transition-colors block"
                  >
                    Consulting Foundation
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3 */}
            <div className="flex flex-col sm:pt-[29px]">
              <ul className="space-y-2.5 text-[13px] sm:text-[13.5px] text-[#E5E7EB]/90">
                <li>
                  <a
                    href="#pricing-plans"
                    className="hover:text-white hover:underline transition-colors block"
                  >
                    E-Commerce Operations
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing-plans"
                    className="hover:text-white hover:underline transition-colors block"
                  >
                    Consulting Foundation
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4 */}
            <div className="flex flex-col sm:pt-[29px]">
              <ul className="space-y-2.5 text-[13px] sm:text-[13.5px] text-[#E5E7EB]/90">
                <li>
                  <a
                    href="#pricing-plans"
                    className="hover:text-white hover:underline transition-colors block"
                  >
                    E-Commerce Operations
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing-plans"
                    className="hover:text-white hover:underline transition-colors block"
                  >
                    Consulting Foundation
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Red Copyright Bar */}
      <div className="w-full bg-[#E92323] text-white py-3.5 px-4 text-center">
        <p className="text-[13px] sm:text-[14px] font-medium tracking-wide">
          Copyright© 2026 by SeigaPorul
        </p>
      </div>
    </footer>
  );
}
