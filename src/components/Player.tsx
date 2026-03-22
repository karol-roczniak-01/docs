import { useRef, useState, useEffect, useCallback } from "react";

interface PlayerProps {
  title: string;
  src: string;
}

function fmt(s: number) {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${String(sec).padStart(2, "0")}`;
}

const Player: React.FC<PlayerProps> = ({ title, src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [pct, setPct] = useState(0);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const dragging = useRef(false);

  const seek = useCallback((e: MouseEvent | React.MouseEvent) => {
    const rect = barRef.current!.getBoundingClientRect();
    const p = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    videoRef.current!.currentTime = p * videoRef.current!.duration;
  }, []);

  useEffect(() => {
    const v = videoRef.current!;
    const onTime = () => {
      setCurrent(v.currentTime);
      setPct(v.currentTime / v.duration * 100);
    };
    const onMeta = () => setDuration(v.duration);
    const onEnded = () => setPlaying(false);
    v.addEventListener("timeupdate", onTime);
    v.addEventListener("loadedmetadata", onMeta);
    v.addEventListener("ended", onEnded);
    return () => {
      v.removeEventListener("timeupdate", onTime);
      v.removeEventListener("loadedmetadata", onMeta);
      v.removeEventListener("ended", onEnded);
    };
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => { if (dragging.current) seek(e); };
    const onUp = () => { dragging.current = false; };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
    };
  }, [seek]);

  const toggle = useCallback(() => {
    const v = videoRef.current!;
    playing ? v.pause() : v.play();
    setPlaying(!playing);
  }, [playing]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault();
        toggle();
      }
      if (e.code === "ArrowLeft") {
        e.preventDefault();
        videoRef.current!.currentTime = Math.max(0, videoRef.current!.currentTime - 5);
      }
      if (e.code === "ArrowRight") {
        e.preventDefault();
        videoRef.current!.currentTime = Math.min(duration, videoRef.current!.currentTime + 5);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [toggle, duration]);

  const total = 20;
  const filled = Math.round(pct / 100 * total);
  const bar =
    "█".repeat(filled) +
    (filled < total ? "▒" : "") +
    "░".repeat(Math.max(0, total - filled - 1));

  return (
    <div className="max-w-3xl flex flex-col">
      <p>{title}</p>
      <video onClick={toggle} ref={videoRef} src={src} />
      <div className="flex flex-wrap items-center gap-4">
        <button className="outline-none cursor-pointer" onClick={toggle}>
          {playing ? "⏸" : "▶"}
        </button>
        <div
          ref={barRef}
          className="flex-1 cursor-pointer select-none"
          onMouseDown={(e) => { dragging.current = true; seek(e); }}
        >
          {bar}
        </div>
        <span className="shrink-0">{fmt(current)} / {fmt(duration)}</span>
      </div>
    </div>
  );
};

export default Player;