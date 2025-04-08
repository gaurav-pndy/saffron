import React from "react";
import { useTranslation } from "react-i18next";

const DishGallery = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-16 px-4 relative">
      <div className="max-w-5xl mx-auto">
        {/* Header & Line */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 md:justify-between">
          <p className="text-2xl sm:text-3xl tracking-wider text-[#800D1B] font-[400] font-cinzel text-center sm:text-left">
            {t("dishGallery.at")} –{" "}
            <span className="font-normal">{t("dishGallery.saffron")}</span>
          </p>

          <div className="h-px bg-[#CFA247] w-full md:w-96 lg:w-[38rem] mx-auto sm:mx-0 md:mr-20" />
        </div>

        {/* Title */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-[400] text-[#CFA247] leading-tight mt-10 sm:mt-8 text-center sm:text-left md:leading-20"
          dangerouslySetInnerHTML={{ __html: t("dishGallery.title") }}
        />

        {/* Dish Images */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mt-16 sm:mt-40 items-start justify-items-center">
          <img
            src="/dishGallery/dish1.png"
            alt="Dish 1"
            className="w-full max-w-xs sm:max-w-sm"
          />
          <img
            src="/dishGallery/dish2.png"
            alt="Dish 2"
            className="w-full max-w-xs sm:max-w-sm sm:-mt-32"
          />
          <img
            src="/dishGallery/dish3.png"
            alt="Dish 3"
            className="w-full max-w-xs sm:max-w-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default DishGallery;
