import { useEffect, useState } from "react";

export function CinematicIntro({ onComplete }: { onComplete: () => void }) {
  const [scene, setScene] = useState(1);

  useEffect(() => {
    // Total: ~2.5s
    // Scene 1: 0-200ms   → pure white (barely visible, just a flash)
    // Scene 2: 200-900ms  → line draws in
    // Scene 3: 900-2000ms → ADS·COM slides up through the line
    // Scene 4: 2000-2500ms → fades out
    const timers = [
      setTimeout(() => setScene(2), 200),
      setTimeout(() => setScene(3), 900),
      setTimeout(() => setScene(4), 2100),
      setTimeout(() => { setScene(5); onComplete(); }, 2600),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  if (scene >= 5) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-white transition-opacity duration-500 ${scene >= 4 ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      <div className="relative w-full h-full flex items-center justify-center">

        {/* The Horizon Line — thinner and shorter */}
        <div
          className={`absolute h-[1px] bg-ink transition-all duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)]
            ${scene === 1
              ? "w-0 opacity-0"
              : scene === 2
              ? "w-[55vw] sm:w-[40vw] md:w-[320px] opacity-100"
              : "w-[70vw] md:w-[480px] opacity-0"
            }
          `}
        />

        {/* Typography — clips upward through the line */}
        <div
          className={`overflow-hidden transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${scene >= 3 ? "h-20 sm:h-24 md:h-28 opacity-100" : "h-0 opacity-0"}`}
        >
          <div
            className={`flex items-center gap-2 sm:gap-3 md:gap-4 text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter text-ink transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${scene >= 3 ? "translate-y-0" : "translate-y-full"}`}
          >
            <span>ADS</span>
            <span className="size-2 sm:size-2.5 md:size-4 rounded-full bg-accent-blue shrink-0" />
            <span>COM</span>
          </div>
        </div>

      </div>
    </div>
  );
}
