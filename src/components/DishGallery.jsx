import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";

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

        {/* Mobile Swiper Slider */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ amount: 0.5 }}
          transition={{
            duration: 0.7,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="block sm:hidden mt-16 relative"
        >
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Navigation]}
          >
            {["dish1", "dish2", "dish3"].map((dish, index) => (
              <SwiperSlide key={index}>
                <img
                  src={`/dishGallery/${dish}.png`}
                  alt={`Dish ${index + 1}`}
                  className="w-full h-96 object-cover max-w-xs mx-auto rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <div className="swiper-button-prev !text-[#CFA247] !-left-2" />
          <div className="swiper-button-next !text-[#CFA247] !-right-2" />
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden sm:grid grid-cols-3 gap-12 mt-40 items-start justify-items-center">
          <motion.img
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ amount: 0.5 }}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            src="/dishGallery/dish1.png"
            alt="Dish 1"
            className="w-full h-96 object-cover md:h-auto max-w-xs sm:max-w-sm"
          />
          <motion.img
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ amount: 0.5 }}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            src="/dishGallery/dish2.png"
            alt="Dish 2"
            className="w-full h-96 object-cover md:h-auto max-w-xs sm:max-w-sm sm:-mt-32"
          />
          <motion.img
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ amount: 0.5 }}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            src="/dishGallery/dish3.png"
            alt="Dish 3"
            className="w-full h-96 object-cover md:h-auto max-w-xs sm:max-w-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default DishGallery;
