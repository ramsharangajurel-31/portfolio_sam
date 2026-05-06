"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const currentProgress =
        scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

      setProgress(currentProgress);
    };

    updateProgress();

    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[999] h-1 w-full bg-slate-950/80">
      <div
        className="h-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-400 transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}