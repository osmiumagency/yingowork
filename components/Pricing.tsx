"use client";
import Link from "next/link";

const plans = [
  {
    name: "Plan Explora",
    price: "$0.00 USD",
    highlight: false,
    disabled: false,
    features: [
      "5 publicaciones de vacantes",
      "Acceso básico",
      "Sin filtros ni shortlist",
      "Sin soporte personalizado",
    ],
  },
  {
    name: "Plan Conecta",
    price: "$49.99 USD",
    highlight: false,
    disabled: true,
    features: [
      "20 publicaciones de vacantes",
      "3 vacantes destacadas al mes",
      "1 shortlist curada por IA",
      "Acceso limitado a dashboard",
      "Posibilidad de pagar por campañas IA",
    ],
  },
  {
    name: "Plan Impulsa",
    price: "$199.99 USD",
    highlight: false,
    disabled: true,
    features: [
      "Publicación ilimitada",
      "10 vacantes destacadas al mes",
      "5 shortlists curadas",
      "Dashboard completo",
      "Contactos por IA incluidos (limitado)",
      "10 créditos mensuales para agendamiento/filtros",
      "Soporte prioritario",
    ],
  },
  {
    name: "Plan Líder",
    price: "$499.99 USD",
    highlight: true,
    disabled: true,
    features: [
      "Publicación ilimitada",
      "Vacantes destacadas ilimitadas",
      "Shortlist ilimitada con IA y humana",
      "Dashboard con analítica avanzada",
      "Contactos IA ilimitados",
      "30 créditos mensuales",
      "Soporte dedicado",
      "Branding premium",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="planes" className="bg-white py-10 px-6 md:px-20 text-black">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-[12px] lg:rounded-[24px] border px-8 py-8 lg:py-10 pb-8 flex flex-col justify-between transition-all relative ${
              plan.highlight
                ? "bg-secondary border-primary shadow-md"
                : "bg-white border-gray-200"
            } ${plan.disabled ? "opacity-50 blur-[0.25px] cursor-not-allowed" : ""}`}
          >
            <div>
              <h3 className="text-xl font-medium -tracking-[0.25px]">
                {plan.name}
              </h3>
              <p
                className={`text-2xl font-medium mb-6 -tracking-[0.25px] text-primary`}
              >
                {plan.price}
                <small className="font-light">/ mes</small>
              </p>
              <ul className="space-y-5 text-sm">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 text-[14px] -tracking-[0.25px]"
                  >
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
            </div>
            {plan.disabled ? (
              <span
                className={`mt-8 w-full rounded-[12px] py-3 text-sm font-medium text-center pointer-events-none ${
                  plan.highlight
                    ? "bg-white text-primary border border-tertiary"
                    : "bg-secondary border border-tertiary text-black"
                } opacity-50 blur-[0.25px]`}
              >
                Próximamente
              </span>
            ) : (
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSdWSl_deYww_RM5bLvAyHhYXcO7Mmux2NC_xHb6zzNIde0qgA/viewform"
                target="_blank"
                className={`mt-8 w-full rounded-[12px] py-3 text-sm font-medium transition-all duration-500 text-center ${
                  plan.highlight
                    ? "bg-white text-primary hover:bg-primary hover:text-white border border-tertiary hover:border-primary"
                    : "bg-secondary border border-tertiary text-black hover:bg-tertiary"
                }`}
              >
                {`Empezar con ${plan.name.split(" ")[1]}`}
              </Link>
            )}
          </div>
        ))}
      </div>
      <p className="text-[14px] mt-12 font-medium text-primary text-center">
        Yingo será totalmente gratis por tiempo limitado.
      </p>
    </section>
  );
}
