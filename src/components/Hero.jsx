import React from "react";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative h-[70vh] md:h-[calc(100vh-5rem)] w-full"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-[0.7]"
        style={{ backgroundImage: "url('/hero-section.png')" }}
      />

      {/* Overlay content */}
      <div className="relative z-10  flex items-end pb-10 md:px-40 justify-center h-full">
        <h1 className="text-white text-4xl md:text-[5rem] text-center leading-14 md:leading-28 font-serif font-[700] px-4">
          {t("hero.heading")}
        </h1>
      </div>
    </section>
  );
}
