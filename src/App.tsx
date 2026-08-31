import { useCallback, useEffect, useRef, useState } from "react";
import { slides } from "./slides";
import { toFa, faPad } from "./utils/fa";
import { exportPptx } from "./lib/pptxExport";
import { cn } from "./utils/cn";

const W = 1280;
const H = 720;
const TOTAL = slides.length;

type AudioState = "idle" | "playing" | "missing";

export default function App() {
  const [index, setIndex] = useState(0);
  const [scale, setScale] = useState(1);
  const [overview, setOverview] = useState(false);
  const [audioState, setAudioState] = useState<AudioState>("idle");
  const [exporting, setExporting] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  /* ------------------------------ stage scaling ------------------------------ */
  useEffect(() => {
    const onResize = () => {
      const s = Math.min(window.innerWidth / W, (window.innerHeight - 76) / H);
      setScale(Math.min(s, 1.4));
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* ------------------------------- navigation ------------------------------- */
  const go = useCallback((i: number) => {
    setIndex(Math.max(0, Math.min(TOTAL - 1, i)));
    setOverview(false);
  }, []);
  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "PageDown" || e.key === " " || e.key === "Enter") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowRight" || e.key === "PageUp") {
        e.preventDefault();
        prev();
      } else if (e.key === "Home") go(0);
      else if (e.key === "End") go(TOTAL - 1);
      else if (e.key.toLowerCase() === "o") setOverview((v) => !v);
      else if (e.key === "Escape") setOverview(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, go]);

  /* ------------------------ audio: autoplay per slide ------------------------ */
  const audioFile = `audio/slide_${String(index + 1).padStart(2, "0")}.mp3`;

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    setAudioState("idle");
    el.src = audioFile;
    el.currentTime = 0;
    el.play()
      .then(() => setAudioState("playing"))
      .catch(() => {
        /* file missing or autoplay blocked — manual button remains available */
      });
  }, [audioFile]);

  const replay = () => {
    const el = audioRef.current;
    if (!el) return;
    el.currentTime = 0;
    el.play()
      .then(() => setAudioState("playing"))
      .catch(() => setAudioState("missing"));
  };

  const handleExport = async () => {
    setExporting(true);
    try {
      await exportPptx();
    } finally {
      setExporting(false);
    }
  };

  const Slide = slides[index].Component;

  return (
    <div dir="rtl" className="relative flex h-full flex-col overflow-hidden bg-[#0D0D1A] font-sans">
      <audio
        ref={audioRef}
        onEnded={() => setAudioState("idle")}
        onError={() => setAudioState("missing")}
        hidden
      />

      {/* progress bar */}
      <div className="absolute inset-x-0 top-0 z-30 h-[3px] bg-[rgba(255,255,255,0.06)]">
        <div
          className="h-full rounded-l-full bg-gradient-to-l from-[#8B5CF6] to-[#F5C518] transition-all duration-300"
          style={{ width: `${((index + 1) / TOTAL) * 100}%` }}
        />
      </div>

      {/* stage */}
      <div className="flex flex-1 items-center justify-center overflow-hidden">
        <div
          className="slide-bg grain relative shrink-0 overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.1)]"
          style={{ width: W, height: H, transform: `scale(${scale})` }}
        >
          <div key={index} className="slide-enter h-full">
            <Slide />
          </div>

          {/* audio trigger zone — bottom-left, ≥44px hit target */}
          <button
            onClick={replay}
            title={audioFile}
            className="absolute bottom-5 left-5 z-20 flex min-h-[44px] items-center gap-2.5 rounded-full border border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.06)] px-4 py-2 backdrop-blur-md transition hover:bg-[rgba(139,92,246,0.18)]"
          >
            <span
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full text-[15px]",
                audioState === "playing"
                  ? "bg-[rgba(34,197,94,0.2)] text-[#22C55E]"
                  : "bg-[rgba(139,92,246,0.18)] text-[#c4b5fd]",
              )}
            >
              {audioState === "playing" ? "🔊" : "▶"}
            </span>
            <span className="text-[12.5px] font-semibold text-[rgba(248,248,255,0.55)]">
              {audioState === "missing" ? `فایل ${audioFile} یافت نشد` : "پخش صدا"}
            </span>
          </button>

          {/* slide number badge — bottom-right */}
          <div className="absolute bottom-5 right-6 z-20 text-[12px] font-bold text-[rgba(248,248,255,0.4)]">
            {faPad(index + 1)} / {toFa(TOTAL)}
          </div>
        </div>
      </div>

      {/* bottom control bar */}
      <div className="z-30 flex h-[68px] shrink-0 items-center justify-between border-t border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] px-6 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-2 text-[13px] font-bold text-[#F8F8FF] md:flex">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[rgba(139,92,246,0.2)] text-[15px]">🍽</span>
            مجموعه لذیذ
            <span className="text-[rgba(248,248,255,0.4)]">|</span>
            <span className="max-w-[380px] truncate font-medium text-[rgba(248,248,255,0.55)]">
              {slides[index].title}
            </span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <NavBtn onClick={prev} disabled={index === 0} label="اسلاید قبلی">
            →
          </NavBtn>
          <div className="glass min-w-[86px] rounded-xl px-4 py-2 text-center text-[14px] font-extrabold text-[#F5C518]">
            {faPad(index + 1)} <span className="text-[rgba(248,248,255,0.4)]">/</span> {toFa(TOTAL)}
          </div>
          <NavBtn onClick={next} disabled={index === TOTAL - 1} label="اسلاید بعدی">
            ←
          </NavBtn>
        </div>

        <div className="flex items-center gap-2">
          <NavBtn onClick={() => setOverview(true)} label="نمای کلی">
            ▦
          </NavBtn>
          <NavBtn
            onClick={() => {
              if (document.fullscreenElement) document.exitFullscreen();
              else document.documentElement.requestFullscreen();
            }}
            label="تمام‌صفحه"
          >
            ⛶
          </NavBtn>
          <button
            onClick={handleExport}
            disabled={exporting}
            className="flex h-11 items-center gap-2 rounded-xl border border-[rgba(139,92,246,0.5)] bg-[rgba(139,92,246,0.18)] px-4 text-[13px] font-bold text-[#d6c7ff] transition hover:bg-[rgba(139,92,246,0.3)] disabled:opacity-50"
          >
            ⬇ {exporting ? "در حال ساخت…" : "دانلود PowerPoint"}
          </button>
        </div>
      </div>

      {/* overview */}
      {overview && (
        <div className="absolute inset-0 z-40 flex flex-col bg-[rgba(13,13,26,0.92)] backdrop-blur-xl">
          <div className="flex items-center justify-between px-8 py-5">
            <h3 className="text-[20px] font-extrabold text-[#F8F8FF]">
              نمای کلی — <span className="text-[#F5C518]">{toFa(TOTAL)}</span> اسلاید
            </h3>
            <button
              onClick={() => setOverview(false)}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.06)] text-[18px] text-[#F8F8FF] hover:bg-[rgba(239,68,68,0.2)]"
            >
              ✕
            </button>
          </div>
          <div className="thin-scroll grid flex-1 grid-cols-3 gap-4 overflow-y-auto px-8 pb-8 md:grid-cols-5">
            {slides.map((s, i) => (
              <button
                key={s.n}
                onClick={() => go(i)}
                className={cn(
                  "glass flex flex-col items-start gap-2 rounded-2xl px-4 py-4 text-right transition hover:border-[rgba(139,92,246,0.6)] hover:bg-[rgba(139,92,246,0.14)]",
                  i === index && "border-[rgba(245,197,24,0.6)] bg-[rgba(245,197,24,0.08)]",
                )}
              >
                <span className={cn("text-[22px] font-black", i === index ? "text-[#F5C518]" : "text-[#8B5CF6]")}>
                  {faPad(s.n)}
                </span>
                <span className="text-[13px] font-bold leading-relaxed text-[#F8F8FF]">{s.title}</span>
                <span className="text-[10.5px] text-[rgba(248,248,255,0.4)]">slide_{String(s.n).padStart(2, "0")}.mp3</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function NavBtn({
  children,
  onClick,
  disabled,
  label,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      title={label}
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-xl border border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.06)] text-[17px] text-[#F8F8FF] transition hover:bg-[rgba(139,92,246,0.2)] disabled:cursor-not-allowed disabled:opacity-30"
    >
      {children}
    </button>
  );
}
