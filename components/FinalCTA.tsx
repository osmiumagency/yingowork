"use client";

import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

type FinalCTAProps = {
  onPlayVideo?: () => void;
};

const FinalCta: FC<FinalCTAProps> = ({ onPlayVideo }) => {
  return (
    <section className="relative overflow-hidden">
      <div className="relative w-full z-10">
        {/* Bloque principal con Dora */}
        <div className="bg-primary bg-[url('/img/dora.jpg')] bg-no-repeat bg-cover bg-right lg:bg-top text-white rounded-[24px] lg:rounded-[32px] py-24 px-4 lg:p-24 grid md:grid-cols-2 gap-14 items-center max-w-7xl mx-auto -mb-72 z-20 relative lg:min-h-[640px]">
          <div className="flex flex-col gap-14 w-full">
            <p className="text-base md:text-[28px] !leading-normal text-right lg:text-left w-2/3 lg:w-auto ml-auto">
              Cuando{" "}
              <span className="text-yellow">las personas y las empresas</span>{" "}
              realmente se entienden, todo cambia. <br />
              <span className="font-bold">
                Creamos Yingo para acelerar ese encuentro
              </span>
              , con inteligencia, sin fricciones.
            </p>

            <svg
              width="225"
              height="42"
              viewBox="0 0 225 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-auto lg:ml-0 max-w-[180px] lg:max-w-auto"
            >
              <path
                d="M0.5 0.578609H14.4812C16.5717 0.578609 18.3249 1.31374 19.7635 2.80698C21.2246 4.30022 21.9439 6.11508 21.9439 8.25157V8.94076C21.9664 13.5583 18.3025 16.6597 14.9308 16.6597H0.5V0.578609ZM17.0887 8.89482V8.29752C17.0887 5.81644 15.8749 4.57591 13.4697 4.57591H5.22035V12.6624H13.4473C15.8749 12.6624 17.0887 11.3989 17.0887 8.89482Z"
                fill="white"
              />
              <path
                d="M35.238 0.119141C42.0488 0.119141 46.5219 2.25564 46.5219 8.61915C46.5219 14.9827 42.1162 17.1191 35.238 17.1191C28.3822 17.1191 23.9541 15.0056 23.9541 8.61915C23.9541 2.16375 28.4496 0.119141 35.238 0.119141ZM35.238 4.16239C30.6525 4.16239 28.8093 4.82861 28.8093 8.61915C28.8093 12.4556 30.7199 13.0759 35.238 13.0759C39.8234 13.0759 41.6666 12.4097 41.6666 8.61915C41.6666 4.78266 39.756 4.16239 35.238 4.16239Z"
                fill="white"
              />
              <path
                d="M48.8142 0.578609H62.2785C66.347 0.578609 68.37 2.27861 68.37 5.65563V6.00023C68.37 7.90699 67.4259 9.19346 65.5378 9.85967V9.90564C67.6057 10.5719 68.1452 11.6745 68.3925 14.0867C68.5048 15.2354 68.842 16.0624 69.0893 16.6597H64.0317C63.8744 16.43 63.8294 16.0394 63.807 15.511C63.6946 13.1908 62.7505 12.0421 60.5252 12.0421H53.5346V16.6597H48.8142V0.578609ZM63.5148 6.50564V6.20699C63.5148 4.98943 62.9528 4.57591 61.1321 4.57591H53.5346V8.20563H61.0872C62.9528 8.20563 63.5148 7.79212 63.5148 6.50564Z"
                fill="white"
              />
              <path
                d="M93.7731 16.6597H88.6482L87.1646 13.9489H76.5551L75.0715 16.6597H69.9466L79.2299 0.578609H84.4673L93.7731 16.6597ZM78.6231 10.2273H85.0967L82.4668 4.57591L82.3993 4.39213H81.3204L81.253 4.57591L78.6231 10.2273Z"
                fill="white"
              />
              <path
                d="M117.958 0.578609H123.353L114.272 16.6597H109.034L99.9756 0.578609H105.483L111.282 12.7543L111.372 13.007H111.956L112.046 12.7543L117.958 0.578609Z"
                fill="white"
              />
              <path
                d="M144.151 16.6597H139.026L137.542 13.9489H126.933L125.449 16.6597H120.324L129.608 0.578609H134.845L144.151 16.6597ZM129.001 10.2273H135.474L132.844 4.57591L132.777 4.39213H131.698L131.631 4.57591L129.001 10.2273Z"
                fill="white"
              />
              <path
                d="M145.728 16.6597V0.578609H150.448V12.6624H161.373V16.6597H145.728Z"
                fill="white"
              />
              <path
                d="M163.75 0.578609H177.731C179.822 0.578609 181.575 1.31374 183.013 2.80698C184.474 4.30022 185.194 6.11508 185.194 8.25157V8.94076C185.216 13.5583 181.552 16.6597 178.181 16.6597H163.75V0.578609ZM180.339 8.89482V8.29752C180.339 5.81644 179.125 4.57591 176.72 4.57591H168.47V12.6624H176.697C179.125 12.6624 180.339 11.3989 180.339 8.89482Z"
                fill="white"
              />
              <path
                d="M187.479 16.6597V0.578609H204.54V4.52995H192.199V6.73536H203.483V10.411H192.199V12.7083H204.675V16.6597H187.479Z"
                fill="white"
              />
              <path
                d="M213.621 12.7083H224.5V16.6597H206.832V13.2137L217.442 4.57591L217.397 4.52995H207.17V0.578609H224.095V4.02454L213.576 12.6394L213.621 12.7083Z"
                fill="white"
              />
              <path
                d="M0.5 40.6734V25.0784H5.15476V36.7969H15.9272V40.6734H0.5Z"
                fill="white"
              />
              <path
                d="M39.9788 40.6734H34.925L33.4621 38.0445H23L21.5371 40.6734H16.4833L25.6377 25.0784H30.8023L39.9788 40.6734ZM25.0392 34.4354H31.4229L28.8295 28.9549L28.763 28.7766H27.6991L27.6326 28.9549L25.0392 34.4354Z"
                fill="white"
              />
              <path
                d="M45.4834 25.0597H59.2704C61.3317 25.0597 63.0607 25.7727 64.4793 27.2208C65.92 28.6689 66.6293 30.4289 66.6293 32.5008V33.1691C66.6515 37.6471 63.0385 40.6547 59.7137 40.6547H45.4834V25.0597ZM61.8416 33.1246V32.5453C61.8416 30.1393 60.6446 28.9362 58.2729 28.9362H50.1382V36.7782H58.2507C60.6446 36.7782 61.8416 35.5529 61.8416 33.1246Z"
                fill="white"
              />
              <path
                d="M67.9961 40.6547V25.0597H84.8197V28.8917H72.6509V31.0304H83.778V34.595H72.6509V36.8228H84.9527V40.6547H67.9961Z"
                fill="white"
              />
              <path
                d="M91.5596 38.5879C91.5596 38.9369 91.4957 39.2676 91.3677 39.5799C91.2398 39.8831 91.0616 40.1495 90.8331 40.3791C90.6046 40.5996 90.3395 40.7741 90.0379 40.9027C89.7363 41.0405 89.4119 41.1094 89.0646 41.1094C88.7173 41.1094 88.3928 41.0405 88.0912 40.9027C87.7896 40.7741 87.5246 40.5996 87.2961 40.3791C87.0676 40.1495 86.8894 39.8831 86.7614 39.5799C86.6335 39.2676 86.5695 38.9369 86.5695 38.5879C86.5695 38.248 86.6335 37.9265 86.7614 37.6233C86.8894 37.311 87.0676 37.0446 87.2961 36.8241C87.5246 36.5945 87.7896 36.4154 88.0912 36.2868C88.3928 36.149 88.7173 36.0801 89.0646 36.0801C89.4119 36.0801 89.7363 36.149 90.0379 36.2868C90.3395 36.4154 90.6046 36.5945 90.8331 36.8241C91.0616 37.0446 91.2398 37.311 91.3677 37.6233C91.4957 37.9265 91.5596 38.248 91.5596 38.5879Z"
                fill="white"
              />
              <path
                d="M93.4867 25.0597H106.764C110.776 25.0597 112.771 26.7084 112.771 29.9833V30.3175C112.771 32.1666 111.84 33.4142 109.978 34.0603V34.1048C112.017 34.7509 112.549 35.8203 112.793 38.1595C112.904 39.2734 113.236 40.0755 113.48 40.6547H108.493C108.338 40.4319 108.293 40.0532 108.271 39.5408C108.16 37.2907 107.229 36.1767 105.035 36.1767H98.1415V40.6547H93.4867V25.0597ZM107.983 30.8076V30.518C107.983 29.3372 107.429 28.9362 105.633 28.9362H98.1415V32.4562H105.589C107.429 32.4562 107.983 32.0552 107.983 30.8076Z"
                fill="white"
              />
              <path
                d="M129.265 30.8076V25.0597H133.92V40.6547H129.265V34.6841H119.29V40.6547H114.636V25.0597H119.29V30.8076H129.265Z"
                fill="white"
              />
              <path
                d="M138.799 30.2017C138.342 30.2017 137.939 30.1083 137.59 29.9215C137.242 29.7268 136.971 29.4583 136.777 29.1158C136.591 28.7655 136.498 28.3646 136.498 27.9131V27.271C136.498 26.8195 136.591 26.4225 136.777 26.08C136.971 25.7297 137.242 25.4611 137.59 25.2743C137.939 25.0797 138.342 24.9824 138.799 24.9824H139.438C139.894 24.9824 140.297 25.0797 140.646 25.2743C140.994 25.4611 141.261 25.7297 141.447 26.08C141.641 26.4225 141.738 26.8195 141.738 27.271V27.9131C141.738 28.3646 141.641 28.7655 141.447 29.1158C141.261 29.4583 140.994 29.7268 140.646 29.9215C140.297 30.1083 139.894 30.2017 139.438 30.2017H138.799ZM139.472 29.6646C140.007 29.6646 140.421 29.5128 140.715 29.2092C141.017 28.9056 141.168 28.4814 141.168 27.9365V27.2476C141.168 26.7027 141.017 26.2785 140.715 25.9749C140.421 25.6713 140.007 25.5195 139.472 25.5195H138.764C138.229 25.5195 137.811 25.6713 137.509 25.9749C137.207 26.2785 137.056 26.7027 137.056 27.2476V27.9365C137.056 28.4814 137.207 28.9056 137.509 29.2092C137.811 29.5128 138.229 29.6646 138.764 29.6646H139.472ZM138.078 26.1851H139.345C139.623 26.1851 139.844 26.259 140.007 26.4069C140.169 26.547 140.251 26.7377 140.251 26.9791V27.1308C140.251 27.3021 140.2 27.4578 140.1 27.5979C140.007 27.7302 139.883 27.8236 139.728 27.8781L140.367 28.8939H139.728L139.159 27.9365H138.624V28.8939H138.078V26.1851ZM139.31 27.4578C139.434 27.4578 139.53 27.4266 139.6 27.3644C139.67 27.3021 139.705 27.2243 139.705 27.1308V27.0141C139.705 26.9207 139.67 26.8467 139.6 26.7922C139.53 26.73 139.434 26.6988 139.31 26.6988H138.624V27.4578H139.31Z"
                fill="white"
              />
            </svg>

            <Link
              href="https://www.youtube.com/watch?v=SwdAmV_gB2o"
              target="_blank"
              className="items-center  lg:w-auto ml-auto lg:ml-0 text-left !leading-none justify-between gap-4 rounded-[12px] border border-tertiary bg-white hover:bg-secondary transition-all ease-in-out max-w-[300px] inline-flex duration-300 pl-5 lg:pl-6 pr-2 py-2 font-garnett font-medium text-[14px] lg:text-[16px] -tracking-[0.5px] text-black"
            >
              Ver cómo funciona Yingo
              <span className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-primary text-white transition-all duration-300">
                {/* Ícono de play */}
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
                  <g clipPath="url(#clip0_531_437)">
                    <path
                      d="M26.7786 19.92C27.6916 20.5302 27.6916 21.8721 26.7786 22.4823L20.1113 26.9387C19.0872 27.6232 17.7134 26.8892 17.7134 25.6575V16.7448C17.7134 15.5131 19.0872 14.7791 20.1113 15.4637L26.7786 19.92Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_531_437">
                      <rect
                        width="9.75"
                        height="12"
                        fill="white"
                        transform="translate(17.7134 15.2012)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </Link>
          </div>
        </div>

        {/* Sub-CTA debajo */}
        <div className="text-center pb-12 lg:pb-32 pt-96 flex flex-col gap-6 items-center bg-secondary bg-[url('/img/pattern-cta.svg')] bg-no-repeat bg-cover bg-bottom w-full">
          <div className="max-w-4xl flex flex-col gap-8 items-center px-[20px]">
            <p className="text-[14px] text-primary">
              ¡Estás a un clic de tu próxima gran oportunidad!
              <span className="font-medium">
                {" "}
                Gratis.* Inteligente. Efectivo.
              </span>
            </p>
            <h2 className="text-3xl md:text-5xl font-medium -tracking-[1px] leading-tight">
              <span className="text-primary">Únete al</span>{" "}
              <span className="text-black">AI Talent Power Hub</span>{" "}
              <span className="text-primary">del futuro laboral.</span>
            </h2>
            <div className="flex gap-3">
              <Link
                href="https://app.yingo.work"
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
                href="https://app.yingo.work"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
