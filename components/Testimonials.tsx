"use client";

import { useRef, useState, useEffect } from "react";
import ArrowSmallIcon from "./icons/ArrowSmallIcon";

const testimonials = [
  {
    name: "Sofía García",
    role: "HR Manager",
    company: "Joy Property Experts",
    source: "videos/sofia.mp4",
  },
  {
    name: "Consuelo Cabrales",
    role: "HR Operations Manager",
    company: "Hubble",
    source: "videos/consuelo.mp4",
  },
  {
    name: "Rebeca Lima",
    role: "HR Leader",
    company: "Solarfuel",
    source: "videos/rebeca.mp4",
  },
  {
    name: "Emma Santiago",
    role: "Head",
    company: "People",
    source: "videos/emma.mp4",
  },
  {
    name: "Mayra Carral",
    role: "Talento Yingo",
    company: "",
    source: "videos/mayra.mp4",
  },
  {
    name: "Elizabeth Martinez",
    role: "Head of HR",
    company: "Terramak",
    source: "videos/elizabeth.mp4",
  },
  {
    name: "Susana Loredo",
    role: "Head Hunter",
    company: "",
    source: "videos/susana.mp4",
  },
];

export default function Testimonials() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(3);

  const updateVisibleCount = () => {
    setVisibleCount(window.innerWidth < 768 ? 1 : 3);
  };

  useEffect(() => {
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const handlePlayToggle = (globalIndex: number) => {
    if (playingIndex === globalIndex) {
      videoRefs.current[globalIndex]?.pause();
      setPlayingIndex(null);
    } else {
      videoRefs.current.forEach((video, idx) => {
        if (idx !== globalIndex && video) video.pause();
      });
      videoRefs.current[globalIndex]?.play();
      setPlayingIndex(globalIndex);
    }
  };

  const next = () => {
    if (currentIndex + visibleCount < testimonials.length) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (playingIndex !== null) return;

    const interval = setInterval(() => {
      if (currentIndex + visibleCount < testimonials.length) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        setCurrentIndex(0);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [currentIndex, playingIndex, visibleCount]);

  return (
    <section className="lg:col-span-2 w-full flex flex-col justify-center items-center gap-8 lg:gap-10 relative z-20 max-w-7xl mx-auto px-5 md:px-8">
      <div className="flex gap-6 w-full overflow-hidden">
        {testimonials
          .slice(currentIndex, currentIndex + visibleCount)
          .map((t, idx) => {
            const globalIndex = currentIndex + idx;
            const isPlaying = playingIndex === globalIndex;

            return (
              <div
                key={globalIndex}
                className="relative flex flex-col items-center text-center gap-4 w-full md:w-1/3"
              >
                <div
                  className={`relative w-full hover:opacity-100 transition-all duration-300 ${
                    isPlaying ? "opacity-100" : "opacity-80"
                  }`}
                >
                  <video
                    ref={(el) => {
                      videoRefs.current[globalIndex] = el;
                    }}
                    className="rounded-[24px] w-full h-auto aspect-9/16 object-cover max-h-[480px]"
                    src={t.source}
                    controls={false}
                    onEnded={() => setPlayingIndex(null)}
                  />
                  {!isPlaying && (
                    <button
                      onClick={() => handlePlayToggle(globalIndex)}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    >
                      <svg
                        width="42"
                        height="43"
                        viewBox="0 0 42 43"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          y="0.201172"
                          width="42"
                          height="42"
                          rx="12"
                          fill="#E85324"
                        />
                        <path
                          d="M26.7786 19.92C27.6916 20.5302 27.6916 21.8721 26.7786 22.4823L20.1113 26.9387C19.0872 27.6232 17.7134 26.8892 17.7134 25.6575V16.7448C17.7134 15.5131 19.0872 14.7791 20.1113 15.4637L26.7786 19.92Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  )}
                </div>
                <div className="-tracking-[0.25px]">
                  <h3 className="font-medium text-[18px]">{t.name}</h3>
                  <p className="text-[14px] text-black/70">{t.role}</p>
                  <p className="text-[14px] text-primary font-regular">
                    {t.company}
                  </p>
                </div>
              </div>
            );
          })}
      </div>

      <div className="flex gap-3">
        <button
          onClick={prev}
          disabled={currentIndex === 0}
          className={`transition-all ease-in-out duration-300 flex items-center justify-between gap-4 rounded-[12px] border border-tertiary bg-white hover:bg-secondary pr-6 pl-1.5 py-1.5 font-garnett font-medium text-[14px] -tracking-[0.5px] text-black ${
            currentIndex === 0 ? "opacity-50 pointer-events-none" : ""
          }`}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-primary text-white transition-all duration-300">
            <ArrowSmallIcon className="rotate-180" />
          </span>
          Anterior
        </button>

        <button
          onClick={next}
          disabled={currentIndex + visibleCount >= testimonials.length}
          className={`transition-all ease-in-out duration-300 flex items-center justify-between gap-4 rounded-[12px] border border-tertiary bg-white hover:bg-secondary pl-6 pr-1.5 py-1.5 font-garnett font-medium text-[14px] -tracking-[0.5px] text-black ${
            currentIndex + visibleCount >= testimonials.length
              ? "opacity-50 pointer-events-none"
              : ""
          }`}
        >
          Siguiente
          <span className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-primary text-white transition-all duration-300">
            <ArrowSmallIcon />
          </span>
        </button>
      </div>
    </section>
  );
}
