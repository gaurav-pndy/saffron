import React from "react";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative w-full xl:h-[calc(100vh-5rem)] overflow-hidden"
    >
      {/* Background image */}
      <img
        src="/hero-section.jpg"
        alt="Hero"
        className="w-full h-auto lg:h-full brightness-[0.7]"
      />

      {/* Overlay content */}
      <div className="absolute inset-0 z-10 flex items-end justify-center py-10 md:pb-10 md:px-10 lg:px-40">
        <h1 className="text-[#ff8c00] text-shadow text-shadow-lg text-shadow-black/30 text-3xl md:text-5xl lg:text-[5rem] text-center leading-14 lg:leading-28 font-serif font-[700] px-4">
          {t("hero.heading")}
        </h1>
      </div>
    </section>
  );
}
