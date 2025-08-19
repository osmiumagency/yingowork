"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Logo from "../components/Logo";
import LinkedinIcon from "../components/icons/LinkedinIcon";
import InstagramIcon from "../components/icons/InstagramIcon";
import Link from "next/link";

export default function Menu() {
  const [isScrolledPastMain, setIsScrolledPastMain] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("");

  // Verifica si la vista es móvil
  useEffect(() => {
    const checkIfMobileView = () => {
      setIsMobileView(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", checkIfMobileView);
    checkIfMobileView();

    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (
          window.scrollY >= sectionTop - sectionHeight / 3 &&
          window.scrollY < sectionTop + sectionHeight - sectionHeight / 3
        ) {
          currentSection = section.getAttribute("id") || "";
        }
      });

      setActiveSection(`#${currentSection}`);

      const main = document.querySelector("main");
      if (main) {
        const mainOffset =
          main.offsetTop + main.offsetHeight - (main.offsetHeight - 100);
        setIsScrolledPastMain(window.pageYOffset > mainOffset);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", checkIfMobileView);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Maneja la apertura y cierre del menú móvil
  useEffect(() => {
    const handleToggleMenu = () => {
      if (isMobileMenuOpen) {
        document.body.style.overflow = "hidden"; // Bloquea el scroll
      } else {
        document.body.style.overflow = ""; // Habilita el scroll
      }
    };

    handleToggleMenu();

    return () => {
      document.body.style.overflow = ""; // Asegura que el scroll se habilite cuando se desmonte el componente
    };
  }, [isMobileMenuOpen]);

  // Maneja los cambios en el hash de la URL
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        setActiveSection(hash);
      } else {
        setActiveSection("");
      }
    };

    handleHashChange(); // Verificación inicial
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // Verifica el pathname para resetear la sección activa cuando no hay hash
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) {
      setActiveSection("");
    } else {
      setActiveSection(hash);
    }
  }, [pathname]);
  const menuOptions = [
    { name: "Cómo Funciona", path: "/#como-funciona" },
    { name: "Testimonios", path: "/#testimonios" },
    { name: "Preguntas frecuentes", path: "/#preguntas-frecuentes" },
    { name: "Planes", path: "/#planes" },
  ];

  const iconColor = "#E85324";

  const socialOptions = [
    {
      name: "Instagram",
      icon: <InstagramIcon color={iconColor} className="h-8" />,
      link: "#",
    },
    {
      name: "LinkedIn",
      icon: <LinkedinIcon color={iconColor} className="h-8" />,
      link: "https://www.linkedin.com/company/optiks-strategies/",
    },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // dentro del componente
  const router = useRouter();

  const handleMenuClick = (path: string) => {
    const sectionId = path.replace("/#", "");

    if (pathname !== "/") {
      router.push(path); // redirige a la home con el hash
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
      window.history.pushState(null, "", path);
      setActiveSection(path);
    }

    closeMobileMenu();
  };

  const headerClasses = `flex gap-12 my-5 md:gap-6 items-center justify-center w-full mx-auto inline-block transition-all duration-300 z-50 fixed max-w-[100vw] ${isScrolledPastMain ? "" : ""} ${isMobileMenuOpen ? "" : ""}`;

  return (
    <>
      <nav className={headerClasses}>
        <div className="desktop-menu flex gap-5 w-full max-w-[900px] xl:max-w-[1400px] justify-start mx-auto bg-white backdrop-blur-xl bg-opacity-80 rounded-[24px] py-2.5 px-4 border border-tertiary items-center">
          <div className="flex justify-between w-full items-center gap-8 lg:gap-12 2xl:gap-20 pl-5">
            <Logo />
            <ul className="flex gap-4 lg:gap-4 2xl:gap-1 items-center">
              {menuOptions.map((option, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleMenuClick(option.path)}
                    className="cursor-pointer"
                  >
                    <span
                      className={`inline-flex text-black !leading-loose font-garnett font-medium text-[14px] -tracking-[0.25px] px-5 py-3.5 rounded-[12px] hover:bg-secondary transition duration-500 ${activeSection === option.path ? "bg-secondary" : ""}`}
                    >
                      {option.name}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
            <ul className="flex gap-3">
              <Link
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdWSl_deYww_RM5bLvAyHhYXcO7Mmux2NC_xHb6zzNIde0qgA/viewform"
                className="flex items-center justify-between gap-4 rounded-[12px] border border-tertiary bg-white hover:bg-secondary transition-all ease-in-out duration-300 pl-6 pr-1.5 py-1.5 font-garnett font-medium text-[14px] -tracking-[0.5px] text-black"
              >
                Publicar vacante
                <span className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-primary text-white transition-all duration-300">
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </Link>
              <Link
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSfRj5U3ikj61LhclYjlV7uNQOIk67HgojwwK_ND6N33ErQbqw/viewform"
                className="flex items-center justify-between gap-4 rounded-[12px] border border-fourth bg-primary hover:bg-fourth transition-all ease-in-out duration-300 pl-6 pr-1.5 py-1.5 font-garnett font-medium text-[14px] -tracking-[0.5px] text-white"
              >
                Encontrar trabajo
                <span className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-white text-primary transition-all duration-300">
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </ul>
          </div>
        </div>

        {isMobileView && (
          <div className="flex justify-between w-full bg-white p-3 items-center rounded-[12px] border border-tertiary fixed z-50 top-[20px] mx-[10px] max-w-[95vw]">
            <div className="pl-2">
              <Logo className="max-w-[145px]" />
            </div>
            <button className="hamburger-icon" onClick={toggleMobileMenu}>
              <div className={`line ${isMobileMenuOpen ? "open" : ""}`}></div>
              <div className={`line ${isMobileMenuOpen ? "open" : ""}`}></div>
              <div className={`line ${isMobileMenuOpen ? "open" : ""}`}></div>
            </button>
            {isMobileMenuOpen && (
              <div className="mobile-menu bg-primary text-white transition duration-300">
                <ul className="flex flex-col gap-8 py-4 items-start">
                  {menuOptions.map((option, index) => (
                    <li key={index}>
                      <button
                        onClick={() => handleMenuClick(option.path)}
                        className="cursor-pointer"
                      >
                        <span
                          className={`text-black cursor-pointer font-garnett font-medium -tracking-[0.25px] text-[14px] px-5 py-2 rounded-[12px] hover:bg-gray-100 transition duration-500  ${activeSection === option.path ? "bg-greenLighter hover:bg-greenLighter" : ""}`}
                        >
                          {option.name}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
                <ul className="flex gap-6 items-center p-4">
                  {socialOptions.map((social, index) => (
                    <li key={index}>
                      <a
                        href={social.link}
                        target="_blank"
                        className="text-primary hover:opacity-85 transition duration-500"
                        rel="noopener noreferrer"
                      >
                        {social.icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </nav>

      <style jsx>{`
        .hamburger-icon {
          display: none;
        }
        .desktop-menu {
          display: flex;
        }
        .mobile-menu {
          display: none;
        }
        @media (max-width: 1024px) {
          .hamburger-icon {
            display: block;
            cursor: pointer;
          }
          svg {
            max-height: 20px;
            height: 20px;
          }
          .line {
            width: 22.5px;
            height: 1.5px;
            background-color: #000;
            margin: 5px;
            transition: transform 0.4s;
          }
          .open:nth-child(1) {
            transform: translateY(6.5px) rotate(45deg);
          }
          .open:nth-child(2) {
            opacity: 0;
          }
          .open:nth-child(3) {
            transform: translateY(-6.5px) rotate(-45deg);
          }
          .desktop-menu {
            display: none;
          }
          .mobile-menu {
            display: flex;
            flex-direction: column;
            position: fixed;
            top: 85px;
            left: 10px;
            width: calc(100vw - 20px);
            height: auto;
            background-color: #fff;
            border-radius: 12px;
            padding: 20px;
            z-index: 999;
            border: 1px solid #ffdcde;
            transform: translateX(${isMobileMenuOpen ? "0" : "-100%"});
            transition: transform 0.3s ease-in-out;
          }
          .mobile-menu.open {
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
