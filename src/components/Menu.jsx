import React from "react";
import { useTranslation } from "react-i18next";

const Menu = () => {
  const { t } = useTranslation();

  return (
    <section id="menu" className="bg-white py-20 px-4 text-center relative">
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-[400] text-[#CFA247] leading-20 mt-8"
          //   dangerouslySetInnerHTML={{ __html: t("dishGallery.title") }}
        >
          {t("menu.heading")}
        </h2>

        <div className="  items-start justify-items-center">
          <img src="/menu-update.svg" alt="" className="h-[30rem]" />
        </div>

        <h4
          className="text-xl sm:text-2xl md:text-3xl font-cinzel font-[400] text-[#1B1B1B] leading-20 mt-8"
          //   dangerouslySetInnerHTML={{ __html: t("dishGallery.title") }}
        >
          {t("menu.text")}
        </h4>
      </div>
    </section>
  );
};

export default Menu;
