export function TickerBand() {
  return (
    <div className="w-full bg-white border-y border-[#EEEEEE] py-4 overflow-hidden select-none">
      <div className="flex items-center gap-7 sm:gap-10 whitespace-nowrap animate-marquee">
        {Array.from({ length: 6 }).map((_, idx) => (
          <div key={idx} className="flex items-center gap-7 sm:gap-10 shrink-0">
            <div className="flex items-center gap-2 text-[14px] sm:text-[15.5px] font-extrabold tracking-wider uppercase">
              <span className="text-[#E92323]">LEARN</span>
              <span className="text-[#111111]">THE SKILL</span>
            </div>
            <span className="text-[#D1D5DB] text-lg select-none">✦</span>

            <div className="flex items-center gap-2 text-[14px] sm:text-[15.5px] font-extrabold tracking-wider uppercase">
              <span className="text-[#E92323]">BUILD</span>
              <span className="text-[#111111]">YOUR PORTFOLIO</span>
            </div>
            <span className="text-[#D1D5DB] text-lg select-none">✦</span>

            <div className="flex items-center gap-2 text-[14px] sm:text-[15.5px] font-extrabold tracking-wider uppercase">
              <span className="text-[#E92323]">SELL</span>
              <span className="text-[#111111]">YOUR SERVICE</span>
            </div>
            <span className="text-[#D1D5DB] text-lg select-none">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
