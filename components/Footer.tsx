"use client";

import Link from "next/link";
import Logo from "./Logo";
import InstagramIcon from "../components/icons/InstagramIcon";
import LinkedinIcon from "../components/icons/LinkedinIcon";

export default function Footer() {
  return (
    <footer className="flex flex-col w-full max-w-[1800px] mx-auto px-[30px] xl:px-24 pt-12 lg:pt-24 pb-8 lg:pb-12 text-black bg-white relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 lg:gap-12 md:gap-0 border-b border-pinkSecondary/30 pb-12">
        {/* Left Column */}
        <div className="flex flex-col gap-6 lg:gap-8 max-w-md">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="text-[14px] leading-snug text-black/80">
              Conecta con el futuro del trabajo. Sin fricción. <br />
              Sin drama. Solo oportunidades reales.
            </p>
          </div>
          <Link href="mailto:hello@yingo.work" className="text-2xl">
            hello@yingo.work
          </Link>
          <div className="flex items-center gap-6 mt-2">
            <Link href="https://www.instagram.com/yingo.work/" target="_blank">
              <InstagramIcon color="#F0582A" className="w-7 h-7" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/yingowork/"
              target="_blank"
            >
              <LinkedinIcon color="#F0582A" className="w-7 h-7" />
            </Link>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-start gap-8 lg:gap-14 md:items-end md:text-right w-full md:w-auto">
          <ul className="flex gap-3">
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
              className="flex items-center justify-between gap-4 rounded-[12px] border border-fourth bg-primary hover:bg-fourth transition-all ease-in-out duration-300 pl-4 lg:pl-6 text-left leading-none lg:text-center pr-2 py-2 font-garnett font-medium text-[14px] lg:text-[16px] -tracking-[0.5px] text-white"
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
          </ul>
          <nav className="lg:flex hidden flex-wrap gap-1 font-medium text-black -tracking-[0.25px] text-[14px]">
            <Link
              href="/#como-funciona"
              className="hover:bg-secondary transition-all duration-300 px-6 py-4 rounded-[12px]"
            >
              Cómo Funciona
            </Link>
            <Link
              href="/#testimonios"
              className="hover:bg-secondary transition-all duration-300 px-6 py-4 rounded-[12px]"
            >
              Testimonios
            </Link>
            <Link
              href="/#preguntas-frecuentes"
              className="hover:bg-secondary transition-all duration-300 px-6 py-4 rounded-[12px]"
            >
              Preguntas Frecuentes
            </Link>
            <Link
              href="/#planes"
              className="hover:bg-secondary transition-all duration-300 px-6 py-4 rounded-[12px]"
            >
              Planes
            </Link>
          </nav>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex flex-col md:flex-row justify-between lg:items-center gap-8 lg:gap-4 pt-6 text-[12px] lg:text-[14px] text-black/50">
        <p>
          © {new Date().getFullYear()} Yingo.work — Una iniciativa de LadeRH®.
          Todos los derechos reservados
        </p>
        <Link
          href="/terminos-de-uso"
          className="hover:text-black/60 transition-all duration-150"
        >
          Términos de Uso
        </Link>
      </div>
    </footer>
  );
}
