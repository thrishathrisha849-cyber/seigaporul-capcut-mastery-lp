import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      {
        title: "Thank You — Your SeigaPorul CapCut Course Is Unlocked",
      },
      {
        name: "description",
        content:
          "Your purchase is complete. Your CapCut Mastery course access is unlocked — start learning, building your portfolio, and monetizing your new editing skills today.",
      },
      {
        property: "og:title",
        content: "Thank You — SeigaPorul CapCut Course Unlocked",
      },
      {
        property: "og:description",
        content:
          "Your purchase is complete. Your CapCut Mastery course access is unlocked — start learning, building your portfolio, and monetizing your new editing skills today.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ThankYouPage,
});

function ThankYouPage() {
  return (
    <div className="relative min-h-screen bg-[#FFF9F9] text-[#111111] overflow-x-hidden selection:bg-red-500 selection:text-white font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[420px] bg-gradient-to-b from-rose-100/50 via-red-50/25 to-transparent blur-2xl pointer-events-none select-none" />

      <div className="relative z-10 max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-20 flex flex-col items-center">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2.5 mb-8 sm:mb-10">
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

        {/* Success card */}
        <div className="w-full max-w-[760px]">
          <div className="relative bg-white rounded-[26px] px-6 sm:px-10 py-10 sm:py-14 shadow-[0_18px_50px_-15px_rgba(233,35,35,0.18)] border border-[#FFE2E2] flex flex-col items-center text-center">
            {/* Success check badge */}
            <div className="relative mb-7">
              <div className="absolute inset-0 rounded-full bg-[#E92323]/20 blur-xl scale-110" />
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-[#E92323] to-[#FF4D4D] flex items-center justify-center shadow-[0_8px_24px_rgba(233,35,35,0.45)]">
                <svg
                  className="w-10 h-10 sm:w-12 sm:h-12 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
            </div>

            {/* Status pill */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF6F6] border border-[#FFE2E2] text-[#15803D] text-[12px] font-bold tracking-wide uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#15803D]" />
              Payment Successful
            </span>

            {/* Headline */}
            <h1 className="text-[28px] sm:text-[38px] lg:text-[42px] font-black tracking-[-0.03em] leading-[1.1] text-[#111111] mb-4">
              You're In! Your <span className="text-[#E92323]">CapCut Mastery</span> Course Is
              Unlocked
            </h1>

            <p className="text-[14px] sm:text-[15.5px] leading-relaxed text-[#4A4A4A] max-w-[520px] mb-9">
              Thank you for your purchase. Your learning journey starts right now — master practical
              video editing, build a standout portfolio, and turn your skills into a high-demand
              service businesses need.
            </p>

            {/* Next steps */}
            <div className="w-full max-w-[520px] grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-9">
              {[
                {
                  step: "1",
                  title: "Start Learning",
                  desc: "Dive into self-paced CapCut lessons in Tamil.",
                },
                {
                  step: "2",
                  title: "Build Projects",
                  desc: "Apply English project templates hands-on.",
                },
                {
                  step: "3",
                  title: "Monetize",
                  desc: "Turn your editing skills into a service.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="rounded-[18px] border border-[#EEEEEE] bg-[#fff5f5] border-[#ff0000] p-5 flex flex-col items-center text-center shadow-[0_2px_10px_rgba(0,0,0,0.03)]"
                >
                  <div className="w-8 h-8 rounded-full bg-[#E92323] text-white font-black text-[14px] flex items-center justify-center mb-2.5 shrink-0">
                    {item.step}
                  </div>
                  <span className="text-[14px] font-bold text-[#111111] mb-1">{item.title}</span>
                  <span className="text-[12px] text-[#666666] leading-snug">{item.desc}</span>
                </div>
              ))}
            </div>

            {/* Primary CTA */}
            <a
              href="https://pay.capcut.seigaporul.in/capcut-payment-page-page"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#E92323] hover:bg-[#D41C1C] text-white font-bold text-[15px] sm:text-[15.5px] shadow-[0_6px_20px_rgba(233,35,35,0.4)] transition active:scale-[0.98] cursor-pointer"
            >
              <span>Access Your Course Portal</span>
              <span className="text-base font-bold">→</span>
            </a>

            <Link
              to="/"
              className="mt-3.5 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-[#666666] hover:text-[#E92323] transition cursor-pointer"
            >
              <span className="text-base">←</span>
              <span>Back to home</span>
            </Link>

            {/* Receipt footer note */}
            <p className="mt-7 pt-5 border-t border-[#F0F0F0] w-full max-w-[480px] text-[12px] sm:text-[12.5px] text-[#999999] leading-relaxed">
              A receipt and your course access details have been sent to your email. Need help?
              Reach out to the SeigaPorul team any time.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Red Copyright Bar */}
      <div className="w-full bg-[#E92323] text-white py-3.5 px-4 text-center">
        <p className="text-[13px] sm:text-[14px] font-medium tracking-wide">
          Copyright© 2026 by SeigaPorul
        </p>
      </div>
    </div>
  );
}
