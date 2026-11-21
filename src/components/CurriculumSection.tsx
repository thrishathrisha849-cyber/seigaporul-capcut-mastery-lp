import { useState } from "react";

interface SubLesson {
  title: string;
  duration?: string;
  isProjectFile?: boolean;
}

interface CurriculumModule {
  id: string; // "01", "02", etc.
  title: string;
  badge?: string;
  lessonsCount: string;
  duration: string;
  includedNote: string;
  subLessons: SubLesson[];
}

const MODULES_LEFT: CurriculumModule[] = [
  {
    id: "01",
    title: "Module 01: CapCut Pro Interface, Hotkeys & Timeline Flow",
    badge: "Desktop + Mobile",
    lessonsCount: "6 Lessons",
    duration: "45 mins",
    includedNote: "Asset Pack Included",
    subLessons: [
      {
        title: "1.1 Dual Workstation Setup: Syncing Mobile Projects with Desktop",
        duration: "12 mins",
      },
      {
        title: "1.2 Frame Rates, Aspect Ratios & 4K 60FPS Bitrate Optimization",
        duration: "08 mins",
      },
      {
        title: "1.3 Lightning Fast Ripple Edits, Compound Clips & Razor Shortcuts",
        duration: "10 mins",
      },
      {
        title: "Project File: Pro Studio Starter Layout + Keybinding Cheat Sheet",
        duration: ".ZIP Asset (48MB)",
        isProjectFile: true,
      },
    ],
  },
  {
    id: "02",
    title: "Module 02: High-Retention Hook Mechanics & Speed Ramps",
    badge: "Virality Lab",
    lessonsCount: "8 Lessons",
    duration: "1 hr 18 mins",
    includedNote: "4K Footage Included",
    subLessons: [
      {
        title: "2.1 The 3-Second Hook Rule: Pattern Interrupts & Motion Framing",
        duration: "14 mins",
      },
      { title: "2.2 Velocity Curves & Optical Flow Smooth Speed Ramping", duration: "16 mins" },
      {
        title: "2.3 Dynamic Zoom Cuts, Screen Shakes & Action Match Transitions",
        duration: "15 mins",
      },
      {
        title: "Project File: 15 High-Retention Hook Templates + Velocity Presets",
        duration: ".ZIP Asset (110MB)",
        isProjectFile: true,
      },
    ],
  },
  {
    id: "03",
    title: "Module 03: Kinetic Subtitles, Typography & Sound FX Design",
    badge: "Audio + Graphics",
    lessonsCount: "7 Lessons",
    duration: "58 mins",
    includedNote: "250+ Foley SFX Pack",
    subLessons: [
      {
        title: "3.1 Auto-Captions Workflow, Custom Tamil Fonts & Word-by-Word Glow",
        duration: "18 mins",
      },
      {
        title: "3.2 Audio Layering: Whooshes, Pops, Risers & Ambient Textures",
        duration: "14 mins",
      },
      {
        title: "3.3 Voice Enhancement, Background Noise Removal & Vocal Ducking",
        duration: "12 mins",
      },
      {
        title: "Project File: 250+ Sound FX Library + 20 Kinetic Text Styles",
        duration: ".ZIP Asset (340MB)",
        isProjectFile: true,
      },
    ],
  },
  {
    id: "04",
    title: "Module 04: Hollywood Color Grading & LUT Overlays",
    badge: "Look & Grade",
    lessonsCount: "5 Lessons",
    duration: "42 mins",
    includedNote: "15 Cinematic LUTs",
    subLessons: [
      {
        title: "4.1 Color Correction Fundamentals: Exposure, Saturation & Curves",
        duration: "11 mins",
      },
      { title: "4.2 Teal & Orange Cinematic Look + Skin Tone Preservation", duration: "13 mins" },
      {
        title: "4.3 Applying Custom .CUBE LUTs & Creating Film Grain Aesthetic",
        duration: "09 mins",
      },
      {
        title: "Project File: 15 Premium Mobile & Desktop Color LUTs Pack",
        duration: ".ZIP Asset (65MB)",
        isProjectFile: true,
      },
    ],
  },
  {
    id: "05",
    title: "Module 05: Client Deliverables & Retainer Monetization System",
    badge: "Business Growth",
    lessonsCount: "6 Lessons",
    duration: "54 mins",
    includedNote: "Contract Templates",
    subLessons: [
      {
        title: "5.1 Setting Up Export Presets for Instagram Reels, YouTube Shorts & Ads",
        duration: "12 mins",
      },
      {
        title: "5.2 Packaging 10-Reel Monthly Client Bundles & Pricing Models",
        duration: "18 mins",
      },
      {
        title: "5.3 Cold DM & Outreach Script Frameworks for Business Retainers",
        duration: "15 mins",
      },
      {
        title: "Project File: Video Proposal Deck, Invoice Template & Contract PDF",
        duration: ".PDF / .DOCX",
        isProjectFile: true,
      },
    ],
  },
];

const MODULES_RIGHT: CurriculumModule[] = [
  {
    id: "06",
    title: "Module 06: CapCut Pro Interface, Hotkeys & Timeline Flow",
    badge: "Desktop + Mobile",
    lessonsCount: "6 Lessons",
    duration: "45 mins",
    includedNote: "Asset Pack Included",
    subLessons: [
      { title: "6.1 Advanced Cloud Project Sync & Version Control Workflow", duration: "12 mins" },
      {
        title: "6.2 Frame Rates, Aspect Ratios & 4K 60FPS Bitrate Optimization",
        duration: "08 mins",
      },
      {
        title: "6.3 Lightning Fast Ripple Edits, Compound Clips & Razor Shortcuts",
        duration: "10 mins",
      },
      {
        title: "Project File: Pro Studio Starter Layout + Keybinding Cheat Sheet",
        duration: ".ZIP Asset (48MB)",
        isProjectFile: true,
      },
    ],
  },
  {
    id: "07",
    title: "Module 07: High-Retention Hook Mechanics & Speed Ramps",
    badge: "Virality Lab",
    lessonsCount: "8 Lessons",
    duration: "1 hr 18 mins",
    includedNote: "4K Footage Included",
    subLessons: [
      { title: "7.1 Multi-Layer Masking & Clone Transition Mastery", duration: "16 mins" },
      {
        title: "7.2 Advanced Keyframing: Seamless Scaling & Curved Positioning",
        duration: "18 mins",
      },
      { title: "7.3 3D Screen Projection & Parallax Depth Video Effects", duration: "14 mins" },
      {
        title: "Project File: Multi-Layer Compositing Project File + Raw 4K Media",
        duration: ".ZIP Asset (180MB)",
        isProjectFile: true,
      },
    ],
  },
  {
    id: "08",
    title: "Module 08: Kinetic Subtitles, Typography & Sound FX Design",
    badge: "Audio + Graphics",
    lessonsCount: "7 Lessons",
    duration: "58 mins",
    includedNote: "250+ Foley SFX Pack",
    subLessons: [
      {
        title: "8.1 Sound Design Masterclass: Micro-Stems & Emotional Pacing",
        duration: "16 mins",
      },
      { title: "8.2 Kinetic Emoji Tracking, Pop-ups & 3D Text Motion", duration: "14 mins" },
      {
        title: "8.3 Sound Equalization, Pitch Shifting & Audio Ducking Magic",
        duration: "12 mins",
      },
      {
        title: "Project File: Dynamic Sound Design Templates & Motion Stems",
        duration: ".ZIP Asset (220MB)",
        isProjectFile: true,
      },
    ],
  },
  {
    id: "09",
    title: "Module 09: Hollywood Color Grading & LUT Overlays",
    badge: "Look & Grade",
    lessonsCount: "5 Lessons",
    duration: "42 mins",
    includedNote: "15 Cinematic LUTs",
    subLessons: [
      { title: "9.1 Commercial Brand Looks: Vibrant, Minimal & Matte Tones", duration: "12 mins" },
      {
        title: "9.2 Mood Grading: Dark Aesthetic, Moody Vlogs & Clean White Look",
        duration: "14 mins",
      },
      {
        title: "9.3 Applying Custom .CUBE LUTs & Creating Film Grain Aesthetic",
        duration: "09 mins",
      },
      {
        title: "Project File: Commercial Color Preset Library (15 Styles)",
        duration: ".ZIP Asset (55MB)",
        isProjectFile: true,
      },
    ],
  },
  {
    id: "10",
    title: "Module 10: Client Deliverables & Retainer Monetization System",
    badge: "Business Growth",
    lessonsCount: "6 Lessons",
    duration: "54 mins",
    includedNote: "Contract Templates",
    subLessons: [
      { title: "10.1 Landing ₹30,000 to ₹70,000 Monthly Retainer Clients", duration: "20 mins" },
      {
        title: "10.2 Workflow Automation: Batch Editing 30 Reels in a Single Day",
        duration: "18 mins",
      },
      { title: "10.3 Client Handover System, Feedback Revisions & Upselling", duration: "14 mins" },
      {
        title: "Project File: Agency Pitch Deck + Client Retention Framework",
        duration: ".PDF / .DOCX",
        isProjectFile: true,
      },
    ],
  },
];

export function CurriculumSection() {
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({
    "01": true,
  });

  const toggleModule = (id: string) => {
    setExpandedModules((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const renderModuleCard = (m: CurriculumModule) => {
    const isExpanded = !!expandedModules[m.id];

    return (
      <div
        key={m.id}
        className={`w-full rounded-[14px] sm:rounded-[16px] transition-all duration-200 overflow-hidden ${
          isExpanded
            ? "border border-[#FF4D4D] bg-[#FFFBFB] shadow-[0_2px_14px_rgba(233,35,35,0.06)]"
            : "border border-[#ECECEC] bg-white shadow-[0_1px_4px_rgba(0,0,0,0.02)] hover:border-[#DCDCDC]"
        }`}
      >
        {/* Module Header Row */}
        <button
          type="button"
          onClick={() => toggleModule(m.id)}
          className="w-full p-3 sm:p-4 text-left flex items-center justify-between gap-3 cursor-pointer select-none"
        >
          <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
            {/* Number Badge: Red when expanded (Image 1), Black when collapsed (Image 2) */}
            <div
              className={`w-8 h-8 sm:w-9 sm:h-9 rounded-[9px] flex items-center justify-center font-extrabold text-[13px] sm:text-[14px] shrink-0 transition-colors ${
                isExpanded ? "bg-[#E92323] text-white" : "bg-[#111111] text-white"
              }`}
            >
              {m.id}
            </div>

            {/* Title & Metadata */}
            <div className="min-w-0 flex flex-col gap-0.5">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-extrabold text-[13.5px] sm:text-[14.5px] text-[#111111] tracking-tight truncate leading-snug">
                  {m.title}
                </span>
                {m.badge && (
                  <span className="text-[10px] sm:text-[10.5px] font-bold text-[#777777] bg-[#F4F4F4] px-2 py-0.5 rounded-[5px] shrink-0 border border-[#EBEBEB]">
                    {m.badge}
                  </span>
                )}
              </div>

              {/* Meta details */}
              <div className="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-[12px] text-[#777777] flex-wrap leading-none">
                <span>{m.lessonsCount}</span>
                <span>•</span>
                <span className="text-[#E92323] font-semibold">{m.duration}</span>
                <span>•</span>
                <span className="text-[#059669] font-medium">{m.includedNote}</span>
              </div>
            </div>
          </div>

          {/* Expand/Collapse Chevron */}
          <div className="shrink-0 text-[#999999] hover:text-[#111111] transition-transform p-1">
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </button>

        {/* Expanded Sub-Lessons List */}
        {isExpanded && (
          <div className="border-t border-[#F2F2F2] px-3 sm:px-4 py-3 bg-white/70 flex flex-col gap-2.5">
            {m.subLessons.map((sub, sIdx) => (
              <div
                key={sIdx}
                className="flex items-center justify-between gap-3 text-[12px] sm:text-[12.5px] text-[#333333] py-0.5"
              >
                <div className="flex items-center gap-2 min-w-0">
                  {sub.isProjectFile ? (
                    <svg
                      className="w-3.5 h-3.5 text-[#E92323] shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                  ) : (
                    <svg
                      className="w-3.5 h-3.5 text-[#E92323] shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polygon points="10 8 16 12 10 16 10 8" fill="#E92323" stroke="none" />
                    </svg>
                  )}
                  <span
                    className={`truncate ${sub.isProjectFile ? "font-semibold text-[#111111]" : ""}`}
                  >
                    {sub.title}
                  </span>
                </div>

                {sub.duration && (
                  <span
                    className={`shrink-0 font-medium ${
                      sub.isProjectFile
                        ? "text-[#E92323] font-bold text-[11px]"
                        : "text-[#888888] text-[11.5px]"
                    }`}
                  >
                    {sub.duration}
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="relative w-full bg-[#FAFAFA] py-14 sm:py-18 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#EEEEEE]">
      <div className="max-w-[1240px] mx-auto flex flex-col items-center">
        {/* Section Title */}
        <h2 className="text-center font-extrabold text-[28px] sm:text-[36px] md:text-[42px] tracking-[-0.03em] leading-tight text-[#111111]">
          Everything You <span className="text-[#ED1F24]">Need to Start Earning</span>
        </h2>
        <p className="mt-2.5 mb-10 sm:mb-12 text-center text-[13.5px] sm:text-[14.5px] text-[#555555] max-w-[720px] font-normal px-2">
          Explore the step-by-step curriculum, master video editing, and build skills businesses are
          willing to pay for.
        </p>

        {/* 2-Column Grid (Left: 01-05, Right: 06-10) */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-3.5 sm:gap-4 items-start">
          {/* Left Column (01 - 05) */}
          <div className="w-full flex flex-col gap-3 sm:gap-3.5">
            {MODULES_LEFT.map((m) => renderModuleCard(m))}
          </div>

          {/* Right Column (06 - 10) */}
          <div className="w-full flex flex-col gap-3 sm:gap-3.5">
            {MODULES_RIGHT.map((m) => renderModuleCard(m))}
          </div>
        </div>

        {/* Jump to Pricing Plans Button */}
        <div className="mt-9 sm:mt-11 flex justify-center">
          <a
            href="#explore"
            className="inline-flex items-center gap-2 px-6 py-2.5 sm:px-7 sm:py-3 rounded-full bg-[#111111] hover:bg-[#E92323] text-white font-bold text-[13px] sm:text-[14px] transition shadow-[0_4px_16px_rgba(0,0,0,0.1)] active:scale-[0.98] cursor-pointer"
          >
            <span>Jump to Pricing Plans</span>
            <span className="text-base font-bold">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
