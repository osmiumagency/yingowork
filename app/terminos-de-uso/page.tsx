"use client";

import React from "react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <div>
      <div className="bg-secondary border-b border-tertiary px-[20px]">
        <main className="max-w-5xl mx-auto lg:px-20 py-48 text-black -tracking-[0.25px] !leading-relaxed lg:border-x lg:border-tertiary">
          <h1 className="text-2xl lg:text-5xl font-medium mb-4">
            Términos de Servicio y Política de Privacidad de Yingo
          </h1>
          <p className="text-sm text-fourth mb-8">
            Fecha de entrada en vigor: 9 de julio de 2025
          </p>

          <div className="space-y-12">
            {/* A. Definiciones */}
            <section>
              <h2 className="text-2xl font-medium mb-4">A. Definiciones</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>“Yingo”:</strong> plataforma tecnológica con sede en
                  San Pedro Garza García, Nuevo León, México, operada por el
                  equipo responsable del dominio yingo.work.
                </li>
                <li>
                  <strong>“Usuario”:</strong> cualquier persona física o moral
                  que accede a los servicios ofrecidos por Yingo.
                </li>
                <li>
                  <strong>“Talento”:</strong> usuarios que utilizan Yingo con el
                  fin de obtener oportunidades profesionales.
                </li>
                <li>
                  <strong>“Empresa”:</strong> entidades que utilizan Yingo para
                  publicar vacantes o contactar talento.
                </li>
                <li>
                  <strong>“Contenido”:</strong> cualquier información
                  proporcionada o generada dentro de la plataforma.
                </li>
              </ul>
            </section>

            {/* B. Introducción */}
            <section>
              <h2 className="text-2xl font-medium mb-4">B. Introducción</h2>
              <p>
                Bienvenido(a) a Yingo. Al acceder, navegar o utilizar nuestros
                servicios, ya sea como persona candidata o como representante de
                una empresa, confirmas que has leído, comprendido y aceptado los
                presentes Términos de Servicio y la Política de Privacidad.
                Estos Términos regulan el uso de nuestro sitio web, herramientas
                tecnológicas y sistemas de recomendación automatizada.
              </p>
              <p className="mt-4">
                Yingo facilita el vínculo entre talento y organizaciones
                mediante inteligencia artificial que sugiere coincidencias
                (“matches”) sin requerir la creación de perfiles manuales.
              </p>
            </section>

            {/* C. Términos Generales */}
            <section>
              <h2 className="text-2xl font-medium mb-4">
                C. Términos Generales de Servicio
              </h2>
              <p className="mb-6">
                El Usuario obtiene una licencia limitada, revocable y no
                exclusiva para usar Yingo según estos términos. Está prohibido
                el uso con fines ilícitos, automatización no autorizada,
                suplantación de identidad o publicación de contenido engañoso o
                discriminatorio.
              </p>
              <p className="mb-6">
                Yingo puede analizar, procesar y usar la información
                suministrada (trayectoria, contacto, vacantes, formularios,
                etc.) para entrenar sus modelos de IA y mejorar su plataforma.
              </p>
              <p className="mb-6">
                No garantizamos entrevistas ni contrataciones. Podemos modificar
                estos Términos en cualquier momento. El uso continuado
                constituye aceptación.
              </p>
              <p>
                Este acuerdo se rige por la legislación mexicana. Cualquier
                disputa se resolverá ante los tribunales competentes de San
                Pedro Garza García, Nuevo León.
              </p>
            </section>

            {/* D. Responsabilidad del Usuario */}
            <section>
              <h2 className="text-2xl font-medium mb-4">
                D. Responsabilidad del Usuario
              </h2>
              <p className="mb-6">
                El Usuario es el único responsable de la veracidad y legalidad
                de la información que proporciona, así como del uso que haga de
                los servicios. Yingo no será responsable por perjuicios
                derivados de decisiones basadas en información incorrecta o mal
                uso de la plataforma.
              </p>
            </section>

            {/* E. Suspensión */}
            <section>
              <h2 className="text-2xl font-medium mb-4">
                E. Suspensión o Cancelación de Acceso
              </h2>
              <p className="mb-6">
                Yingo puede suspender o cancelar el acceso de cualquier Usuario
                que incumpla estos Términos, incurra en actividades ilegales o
                afecte la seguridad, confianza o estabilidad del sistema.
              </p>
              <p>Esta acción no dará derecho a reembolsos ni compensaciones.</p>
            </section>

            {/* F. Resolución de Conflictos */}
            <section>
              <h2 className="text-2xl font-medium mb-4">
                F. Resolución de Conflictos
              </h2>
              <p className="mb-6">
                Las partes buscarán una solución amistosa. Si no se logra, se
                someterán a los tribunales de San Pedro Garza García, Nuevo
                León.
              </p>
              <p>
                Yingo no garantiza resultados específicos. El uso es bajo riesgo
                del Usuario.
              </p>
            </section>

            {/* G. Para Usuarios de Talento */}
            <section>
              <h2 className="text-2xl font-medium mb-4">
                G. Para Usuarios de Talento
              </h2>
              <p className="mb-6">
                No es necesario crear un perfil manual. Se recopila y analiza
                información básica con IA para generar coincidencias. No se
                garantiza contacto ni contratación.
              </p>
              <p>
                Puedes solicitar la eliminación de tu información escribiendo a{" "}
                <a href="mailto:hello@yingo.work" className="text-primary">
                  hello@yingo.work
                </a>
                .
              </p>
            </section>

            {/* H. Para Empresas */}
            <section>
              <h2 className="text-2xl font-medium mb-4">H. Para Empresas</h2>
              <p className="mb-6">
                El representante debe estar legalmente autorizado. Las vacantes
                deben ser reales, claras y legales. Está prohibido solicitar
                pagos a candidatos o compartir información falsa.
              </p>
            </section>

            {/* I. Servicios Pagados */}
            <section>
              <h2 className="text-2xl font-medium mb-4">
                I. Servicios Pagados
              </h2>
              <p className="mb-6">
                Algunas funcionalidades son de pago. Estas incluyen: vacantes
                destacadas, dashboards avanzados, integraciones, etc. Los pagos
                no son reembolsables salvo excepción expresa.
              </p>
              <p>
                El incumplimiento de pagos puede derivar en la suspensión del
                servicio contratado.
              </p>
            </section>

            {/* J. Política de Privacidad */}
            <section>
              <h2 className="text-2xl font-medium mb-4">
                J. Política de Privacidad
              </h2>
              <p className="mb-6">
                Recopilamos información personal (nombre, email, IP, historial
                profesional) para personalizar la experiencia, garantizar la
                seguridad, y mejorar nuestros servicios. Tus datos pueden
                compartirse con proveedores bajo contrato o autoridades cuando
                lo exija la ley.
              </p>
              <p>
                Puedes ejercer tus derechos de acceso, rectificación,
                cancelación u oposición escribiendo a{" "}
                <a href="mailto:hello@yingo.work" className="text-primary">
                  hello@yingo.work
                </a>
                .
              </p>
            </section>

            {/* K. Cookies */}
            <section>
              <h2 className="text-2xl font-medium mb-4">
                K. Cookies y Rastreo
              </h2>
              <p>
                Utilizamos cookies para ofrecer una mejor experiencia de
                usuario, analizar comportamiento y mostrar contenido relevante.
                Puedes desactivarlas en tu navegador, aunque algunas funciones
                podrían verse limitadas.
              </p>
            </section>

            {/* L. Usuarios Menores */}
            <section>
              <h2 className="text-2xl font-medium mb-4">
                L. Usuarios Menores de Edad
              </h2>
              <p>
                El uso de Yingo está limitado a mayores de edad. No recopilamos
                intencionalmente datos de menores. Si detectamos datos de un
                menor, los eliminaremos de inmediato.
              </p>
            </section>

            {/* M. Contacto Legal */}
            <section>
              <h2 className="text-2xl font-medium mb-4">M. Contacto Legal</h2>
              <p>
                <strong className="font-medium">Yingo</strong>
                <br />
                Ubicación: San Pedro Garza García, Nuevo León, México
                <br />
                Correo electrónico:{" "}
                <a
                  href="mailto:hello@yingo.work"
                  className="text-primary underline"
                >
                  hello@yingo.work
                </a>
              </p>
            </section>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
