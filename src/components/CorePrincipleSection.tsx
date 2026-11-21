export function CorePrincipleSection() {
  return (
    <section className="relative w-full bg-[#FFF9F9] text-[#111111] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-t border-[#F0EAEA] overflow-hidden select-none">
      <div className="relative z-10 max-w-[1040px] mx-auto flex flex-col items-center text-center">
        {/* Core Principle Quote */}
        <h2 className="text-[26px] sm:text-[34px] md:text-[38px] lg:text-[42px] font-black tracking-[-0.025em] leading-[1.3] sm:leading-[1.28] text-[#111111] max-w-[980px]">
          &ldquo;You don&apos;t need to know everything before you start.{" "}
          <span className="text-[#E92323]">Start with one skill.</span> Learn to{" "}
          <span className="text-[#E92323]">use it.</span> Discover how to{" "}
          <span className="text-[#E92323]">sell it.</span> Build from there.&rdquo;
        </h2>

        {/* Subtitle Label */}
        <p className="mt-5 sm:mt-6 text-[11.5px] sm:text-[12.5px] tracking-[0.2em] font-bold uppercase text-[#333333]">
          SEIGAPORUL CORE PRINCIPLE
        </p>

        {/* CTA Button */}
        <div className="mt-7 sm:mt-8">
          <a
            href="https://pay.capcut.seigaporul.in/capcut-payment-page-page"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-8 sm:px-9 py-3 rounded-full bg-[#E92323] hover:bg-[#D41C1C] text-white font-bold text-[14px] sm:text-[15px] shadow-[0_4px_16px_rgba(233,35,35,0.28)] transition-all duration-200 active:scale-[0.98] cursor-pointer"
          >
            <span>Get Started</span>
            <span className="font-bold text-base leading-none">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
