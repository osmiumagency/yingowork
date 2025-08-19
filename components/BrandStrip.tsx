"use client";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const brands = [
  {
    id: 1,
    name: "Seleccion de Futbol de Costa Rica",
    image: "/img/clients/costarica.svg",
  },
  {
    id: 2,
    name: "Brands and people",
    image: "/img/clients/brandsandpeople.svg",
  },
  { id: 3, name: "Axented", image: "/img/clients/axented.svg" },
  { id: 4, name: "Teleperfomance", image: "/img/clients/teleperformance.svg" },
  {
    id: 5,
    name: "Tecnologico de Monterrey",
    image: "/img/clients/tecdemonterrey.svg",
  },
  {
    id: 6,
    name: "Epicor",
    image: "/img/clients/epicor.svg",
  },
  { id: 7, name: "La Divinata", image: "/img/clients/divinata.svg" },
  {
    id: 8,
    name: "Monterrey FC, Rayados de Monterrey",
    image: "/img/clients/rayados.svg",
  },
];

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check window size on initial render
    window.addEventListener("resize", handleResize); // Add resize event listener

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up event listener on component unmount
    };
  }, []);

  return isMobile;
};

const BrandStrip = () => {
  const isMobile = useIsMobile();

  return (
    <Marquee gradient={false} speed={isMobile ? 40 : 70} className="py-1">
      {" "}
      {/* Set speed based on device */}
      {brands.map((brand) => (
        <div
          key={brand.id}
          className="item"
          style={{ marginRight: isMobile ? "35px" : "120px" }}
        >
          <div
            style={{
              height: "62px",
              width: "138px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <Image
              src={brand.image}
              alt={brand.name}
              layout="fill"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      ))}
    </Marquee>
  );
};

export default BrandStrip;
