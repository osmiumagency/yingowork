"use client";

import { useState } from "react";

const faqs = [
  {
    question: "¿Usar Yingo tiene costo?",
    answer:
      "Para el Talento, los que buscan trabajo, Yingo es gratis, sube tu información sin costo alguno. Para las empresas, tenemos planes mensuales y anuales que se adaptan a tu ritmo de contratación, con acceso a todas las funciones y soporte personalizado.",
  },
  {
    question: "¿Tengo que crear perfil o cuenta?",
    answer:
      " ⁠Si. Tienes que crear tu perfil para hacer match con las oportunidades, es rapido y sencillo",
  },
  {
    question: "¿Qué tipo de empresas hay?",
    answer:
      "Tenemos empresas de todos los tamaños: startups, agencias, corporativos y organizaciones con enfoque digital.",
  },
  {
    question: "¿Y si no me eligen?",
    answer:
      "Tu información sigue en nuestro sistema y seguimos buscando coincidencias. No te preocupes, estamos seguros que tu oportunidad esta por llegar.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="lg:pt-4 pb-12 px-4 md:px-20 bg-white text-black max-w-3xl mx-auto">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`rounded-[12px] lg:rounded-[24px] transition-all overflow-hidden duration-500 ease-in-out hover:bg-secondary border ${
              openIndex === index
                ? "bg-secondary border-tertiary"
                : "border-tertiary"
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full px-5 lg:px-7 py-5 lg:py-6 flex items-center justify-between text-left"
            >
              <span
                className={`text-[15px] lg:text-lg font-medium ${
                  openIndex === index ? "text-primary" : "text-black"
                }`}
              >
                {faq.question}
              </span>
              <span className="text-3xl text-black font-extralight">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-7 text-black text-[14px]">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
