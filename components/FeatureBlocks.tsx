"use client";

import Image from "next/image";
import Link from "next/link";

type Feature = {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  points: (string | { text: string; bold?: boolean })[];
};

const features: Feature[] = [
  {
    id: "1",
    image: "/img/feature-1.png",
    title: "Encuentra talento o trabajo",
    subtitle: "sin fricciones*",
    description:
      "Estás cansado de llenar formularios eternos, recibir candidatos que no aplican o esperar semanas sin respuesta. En Yingo creemos que encontrar trabajo o talento debe ser tan fácil como enviar un mensaje.",
    points: [
      { text: "Si buscas talento: ", bold: true },
      "Publica gratis y encuentra candidatos con potencial en minutos.",
      { text: "Si buscas trabajo: ", bold: true },
      "Te ayudamos a conectar con vacantes reales sin complicaciones.",
    ],
  },
  {
    id: "2",
    image: "/img/feature-2.svg",
    title: "Yingo es diferente.",
    subtitle: "Porque piensa como tú.",
    description:
      "Nos inspiramos en apps de conexión para crear algo mejor: una plataforma donde el talento y las oportunidades se encuentran sin fricción.",
    points: [
      "01. Comparte tu perfil de LinkedIn. Nosotros hacemos el resto.",
      "02. Sin cuentas, sin subir tu CV mil veces.",
      "03. Nuestra IA te sugiere conexiones alineadas.",
      {
        text: "04. Yingo es 100% gratuito para personas y empresas.",
        bold: true,
      },
    ],
  },
  {
    id: "3",
    image: "/img/feature-3.svg",
    title: "El mundo cambió.",
    subtitle: "La forma de conectar talento también.",
    description:
      "En un mercado laboral saturado de plataformas tradicionales, Yingo nace como un AI-Powered Talent Hub: una evolución pensada para simplificar, no complicar.",
    points: [
      "01. Entiende lo que realmente buscas, sin fórmulas complejas.",
      "02. Filtra lo irrelevante y te sugiere conexiones con sentido.",
      "03. Acelera el proceso sin perder el toque humano.",
    ],
  },
];

export default function FeatureBlocks() {
  return (
    <section
      className="flex flex-col gap-8 lg:gap-12 max-w-[1400px] mx-auto"
      id="como-funciona"
    >
      {features.map((feature, index) => (
        <div
          key={feature.id}
          className={`flex flex-col md:flex-row  bg-[#FFF4F0] rounded-[64px]  px-6 md:px-24 py-16 md:py-24 ${
            index % 2 === 1 ? "md:flex-row-reverse" : ""
          } items-center gap-12 md:gap-32`}
        >
          <div className="w-full md:w-1/2 relative max-w-md">
            <Image
              src={feature.image}
              width={500}
              height={500}
              alt=""
              quality={100}
              className="w-full h-auto"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-4 lg:gap-6 text-left">
            <p className="text-[16px] font-medium text-black">
              <span className="mr-3 w-3 h-3 rounded-[2px] bg-primary inline-block relative"></span>
              0{feature.id}.{" "}
              {feature.id === "3"
                ? "AI-Powered Talent Hub"
                : feature.id === "2"
                  ? "¿Por qué elegir Yingo?"
                  : "Nuestra misión principal"}
            </p>
            <h3 className="text-3xl lg:text-5xl font-medium leading-tight -tracking-[0.75px] lg:-tracking-[2px]">
              <span className="text-primary">{feature.title}</span>{" "}
              <span className="text-black">{feature.subtitle}</span>
            </h3>
            <p className="text-[14px] lg:text-[16px]">{feature.description}</p>
            {feature.id === "1" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 text-[13px] text-black">
                <div className="flex flex-col">
                  <span className="font-medium">Si buscas talento</span>
                  <span>
                    Publica gratis y encuentra candidatos con potencial en
                    minutos.
                  </span>
                </div>
                <div className="flex flex-col md:border-l md:pl-6">
                  <span className="font-medium">Si buscas trabajo</span>
                  <span>
                    Te ayudamos a conectar con vacantes reales sin
                    complicaciones.
                  </span>
                </div>
              </div>
            ) : (
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 text-[13px] text-black pt-4">
                {feature.points.map((point, i) => {
                  const text = typeof point === "string" ? point : point.text;
                  const isBold = typeof point !== "string" && point.bold;

                  const match = text.match(/^(\d+\.)\s*(.*)$/); // detecta número

                  return (
                    <li
                      key={i}
                      className={`leading-snug pr-4 relative ${
                        i % 2 === 1 ? "md:border-l md:pl-6" : ""
                      }`}
                    >
                      {match ? (
                        <>
                          <span className="font-medium">{match[1]}</span>{" "}
                          {isBold ? (
                            <span className="font-medium">{match[2]}</span>
                          ) : (
                            match[2]
                          )}
                        </>
                      ) : (
                        <span className={isBold ? "font-medium" : ""}>
                          {text}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
            <div className="flex gap-3 mt-4">
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
      ))}
    </section>
  );
}
