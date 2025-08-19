"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "@/components/Logo";
import BrandStrip from "@/components/BrandStrip";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FeatureBlocks from "@/components/FeatureBlocks";
import FinalCTA from "@/components/FinalCTA";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  const [showSoundBtn, setShowSoundBtn] = useState(true);

  const handleUnmuteClick = () => {
    window.open("https://www.youtube.com/watch?v=SwdAmV_gB2o", "_blank");
    setShowSoundBtn(false);
  };

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const handlePlayFullscreenVideo = async () => {
    if (videoRef.current) {
      try {
        videoRef.current.currentTime = 0; // Reinicia el video
        videoRef.current.muted = false;
        videoRef.current.volume = 1;
        await videoRef.current.play();
        await videoRef.current.requestFullscreen(); // Fullscreen
        setIsMuted(false);
      } catch (error) {
        console.error("Error al intentar reproducir en fullscreen:", error);
      }
    }
  };

  const handleUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.volume = 1;
      videoRef.current.play();
      setIsMuted(false);
    }
  };

  return (
    <div className="relative">
      <main className="flex flex-col items-center pt-14 md:pt-28 gap-12 md:gap-24 pb-12 md:pb-28 px-[20px] md:px-24 bg-secondary relative bg-cover text-black before:absolute before:inset-0 before:bg-gradient-to-t before:from-secondary/60 before:to-secondary/5 before:z-0 z-4">
        <div className="relative w-full max-w-[1600px] flex flex-col justify-center items-center text-center mx-auto gap-4 mt-14 lg:px-4 z-20">
          <div className="flex flex-col gap-6 lg:gap-10 max-w-6xl z-11 relative items-center">
            <Logo className="max-w-[145px] lg:max-w-[300px]" />
            <h1 className="text-2xl lg:text-6xl -tracking-[0.75px] lg:-tracking-[3px] text-black font-garnett !leading-none font-medium">
              <span className="text-primary">Publica una vacante.</span> <br />
              Encuentra tu próximo trabajo.
            </h1>
            <main className="mx-auto lg:px-4 max-w-6xl w-full">
              <div className="relative aspect-16/9 w-full rounded-[24px] lg:rounded-[32px] overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/SwdAmV_gB2o?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1"
                  title="YouTube video player"
                  allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </main>
            <h2 className="text-[14px] md:text-xl max-w-3xl w-full mx-auto font-medium -tracking-[0.25px]">
              Yingo es un{" "}
              <span className="text-primary">AI-Powered Talent Hub</span> que
              conecta empresas y personas con la oportunidad correcta. Sin
              cuentas, sin fricción.
            </h2>
          </div>
          <div className="flex gap-3">
            <Link
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdWSl_deYww_RM5bLvAyHhYXcO7Mmux2NC_xHb6zzNIde0qgA/viewform"
              className="flex items-center justify-between gap-4 rounded-[12px] border border-tertiary bg-white hover:bg-tertiary transition-all ease-in-out duration-300 pl-4 lg:pl-6 text-left leading-none lg:text-center pr-2 py-2 font-garnett font-medium text-[14px] lg:text-[16px] -tracking-[0.5px] text-black"
            >
              Publicar vacante
              <span className="flex h-10 w-10 min-w-10 items-center justify-center rounded-[12px] bg-primary text-white transition-all duration-300">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.63073 9.368L9.36558 0.633156M9.36558 0.633156L0.980124 0.633157M9.36558 0.633156L9.36558 9.01861"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
            <Link
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfRj5U3ikj61LhclYjlV7uNQOIk67HgojwwK_ND6N33ErQbqw/viewform"
              className="flex items-center justify-between gap-4 lg:gap-6 rounded-[12px] border border-fourth bg-primary hover:bg-fourth transition-all ease-in-out duration-300 pl-4 lg:pl-6 text-left leading-none lg:text-center pr-2 py-2 font-garnett font-medium text-[14px] lg:text-[16px] -tracking-[0.5px] text-white"
            >
              Encontrar trabajo
              <span className="flex h-10 w-10 min-w-10 items-center justify-center rounded-[12px] bg-white text-primary transition-all duration-300">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.63073 9.368L9.36558 0.633156M9.36558 0.633156L0.980124 0.633157M9.36558 0.633156L9.36558 9.01861"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>

          <p className="font-medium text-[14px] text-primary">
            Gratuito. Ágil. Humano.
          </p>
        </div>
      </main>

      <div className="py-14 lg:py-20 flex flex-col gap-8 lg:gap-12">
        <h4 className="font-medium text-md lg:text-xl -tracking-[0.25px] px-[20px] text-center !leading-none">
          <span className="mr-3 lg:mr-4 w-3 h-3 lg:w-4 lg:h-4 rounded-[2px] bg-primary inline-block relative lg:-mb-[1px]" />
          Con la confianza de más de 50{" "}
          <span className="text-primary">organizaciones líderes</span>
        </h4>
        <BrandStrip />
      </div>

      <FeatureBlocks />
      <section
        className="w-full py-20 md:py-32 grid lg:grid-cols-3 justify-center items-center gap-8 lg:gap-12 relative z-20 rounded-[64px] max-w-[1400px] mx-auto"
        id="testimonios"
      >
        <div className="flex flex-col text-center lg:text-left justify-between w-full mx-auto px-[20px] lg:px-[0] gap-8 lg:-mt-[200px]">
          <h4 className="font-medium text-md lg:text-xl -tracking-[0.25px]">
            <span className="mr-3 lg:mr-4 w-3 h-3 lg:w-4 lg:h-4 rounded-[2px] bg-primary inline-block relative lg:-mb-[1px]" />
            Testimonios
          </h4>
          <h5 className="font-medium text-3xl md:text-5xl -tracking-[0.75px] !leading-none lg:-tracking-[2px] lg:max-w-2xl">
            Testimonios de quienes ya viven el{" "}
            <span className="text-primary">futuro del talento.</span>
          </h5>
        </div>
        <Testimonials />
      </section>

      <section
        className="flex flex-col items-center gap-8 max-w-[1000px] mx-auto py-12 md:py-20"
        id="preguntas-frecuentes"
      >
        <div className="flex flex-col gap-4 lg:gap-6 px-[25px]">
          <h4 className="font-medium text-md lg:text-xl -tracking-[0.25px] text-center">
            <span className="mr-3 lg:mr-4 w-3 h-3 lg:w-4 lg:h-4 rounded-[2px] bg-primary inline-block relative lg:-mb-[1px]" />
            Preguntas frecuentes
          </h4>
          <h2 className="font-medium text-3xl md:text-5xl -tracking-[0.75px] lg:-tracking-[2px] text-black !leading-none text-center">
            ¿Tienes dudas?
            <br />
            Aquí las resolvemos
          </h2>
          <p className="text-[14px] lg:text-[16px] text-center">
            Las preguntas más comunes, con respuestas sin complicaciones.
          </p>
        </div>
        <div className="w-full">
          <Faq />
        </div>
      </section>
      <section className="flex flex-col gap-4 py-8 md:py-24" id="planes">
        <div className="flex flex-col gap-4 lg:gap-6 max-w-4xl mx-auto px-[20px]">
          <h4 className="font-medium text-md lg:text-xl -tracking-[0.25px] text-center">
            <span className="mr-3 lg:mr-4 w-3 h-3 lg:w-4 lg:h-4rounded-[2px] bg-primary inline-block relative -mb-[1px]" />
            Planes para empresas
          </h4>
          <h2 className="text-3xl md:text-5xl -tracking-[0.75px] lg:-tracking-[2px] font-medium text-black !leading-none text-center">
            Elige el plan que se adapta a tu ritmo de contratación
          </h2>
          <p className="text-[14px] lg:text-[16px] text-center">
            Desde explorar sin compromiso hasta acelerar con soporte
            personalizado e IA.
          </p>
        </div>
        <Pricing />
      </section>

      <FinalCTA onPlayVideo={handlePlayFullscreenVideo} />

      <Footer />
    </div>
  );
}
