"use client";
import Link from "next/link";

const includes = [
  "Vacantes ilimitadas",
  "Base de candidatos",
  "Matching Inteligente",
  "Invitaciones directas",
  "Analytics & Reportes",
  "Marca personalizada",
  "Soporte prioritario",
  "Acceso prioritario a próximas features",
];

const plans = [
  {
    name: "Plan Mensual",
    price: "$19.99 USD",
    period: "/ mes",
    subtitle: "Flexibilidad máxima",
    highlight: false,
    disabled: false,
    savings: null,
    features: [
      "Facturación mensual",
      "Acceso inmediato a todas las funciones",
      "Ideal para probar la plataforma",
    ],
  },
  {
    name: "Plan Anual",
    price: "$199.99 USD",
    period: "/ año",
    subtitle: "Máximo valor y ahorro",
    highlight: true,
    disabled: false,
    savings: "Ahorra 20% ($40 USD)",
    features: [
      "Equivalente a 2.4 meses gratis",
      "Una sola facturación al año",
      "Máximo retorno de inversión",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="planes" className="bg-white py-10 px-6 md:px-20 text-black">
      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-[12px] lg:rounded-[24px] border px-8 py-8 lg:py-10 flex flex-col justify-between transition-all relative ${
              plan.highlight
                ? "bg-secondary border-primary shadow-md"
                : "bg-white border-gray-200"
            } ${plan.disabled ? "opacity-50 blur-[0.25px] cursor-not-allowed" : ""}`}
          >
            {/* Badge Recomendado */}
            {plan.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-medium bg-primary text-white rounded-full px-3 py-1 shadow">
                Recomendado
              </span>
            )}

            <div>
              <h3 className="text-xl font-medium -tracking-[0.25px]">
                {plan.name}
              </h3>
              <p className="text-sm mt-1 text-black/70">
                {plan.subtitle}
              </p>

              <p className="text-3xl lg:text-4xl font-medium mt-4 -tracking-[0.25px] text-primary">
                {plan.price} <small className="text-base font-light">{plan.period}</small>
              </p>

              {plan.savings && (
                <p className="mt-3 text-center">
                  <span className="inline-block text-xs font-semibold bg-secondary text-primary rounded-full px-3 py-1 border border-tertiary">
                    {plan.savings}
                  </span>
                </p>
              )}

              {/* Beneficios del plan */}
              <ul className="mt-6 space-y-5 text-sm">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-4 text-[14px] -tracking-[0.25px]">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="min-w-[24px]"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="12"
                        fill={plan.highlight ? "#FFFFFF" : "#FFF1EC"}
                      />
                      <path
                        d="M17.0367 9.3418L10.964 15.4144L7.92773 12.3781"
                        stroke="#E85324"
                        strokeWidth="1.125"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Beneficios Yingo PRO */}
              <h4 className="text-sm font-semibold mt-8 mb-4">Incluye Yingo PRO:</h4>
              <ul className="space-y-3 text-sm">
                {includes.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-[14px] -tracking-[0.25px]">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="min-w-[20px]"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="12"
                        fill={plan.highlight ? "#FFFFFF" : "#FFF1EC"}
                      />
                      <path
                        d="M17.0367 9.3418L10.964 15.4144L7.92773 12.3781"
                        stroke="#E85324"
                        strokeWidth="1.125"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="https://app.yingo.work"
              target="_blank"
              className={`mt-8 w-full rounded-[12px] py-3 text-sm font-medium transition-all duration-500 text-center ${
                plan.highlight
                  ? "bg-white text-primary hover:bg-primary hover:text-white border border-tertiary hover:border-primary"
                  : "bg-secondary border border-tertiary text-black hover:bg-tertiary"
              }`}
            >
              Comenzar Ahora
            </Link>
          </div>
        ))}
      </div>

      <p className="text-[14px] mt-12 font-medium text-primary text-center">
        Estos son precios promocionales de lanzamiento por tiempo limitado.*
      </p>
    </section>
  );
}