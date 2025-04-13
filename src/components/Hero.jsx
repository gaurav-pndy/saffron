import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section className="bg-[#181818] text-white w-full px-4 py-10  relative overflow-hidden min-h-screen">
      <div className="max-w-7xl pt-24 lg:pt-30 mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10  md:gap-20 xl:gap-10 items-end lg:px-10 ">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: "100%", scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1.5,
            ease: [0.77, 0, 0.175, 1],
            delay: 2,
          }}
          className="flex flex-col gap-5 text-center xl:text-left"
        >
          <div>
            <h1
              className="text-5xl md:text-6xl lg:text-[5rem] xl:text-[4.8rem]  leading-tight  font-contrail font-[400] "
              dangerouslySetInnerHTML={{ __html: t("hero.heading") }}
            >
              {/* {t("hero.heading")} */}
            </h1>
            <p className="text-base lg:text-2xl xl:text-xl mt-2 sm:text-xl text-gray-300 xl:max-w-lg font-poppins ">
              {t("hero.text")}
            </p>
          </div>
          <button className="bg-[#F7B41A] cursor-pointer transition-all duration-300 font-poppins font-[600] px-6 py-3 rounded-full w-fit md:mt-4 hover:bg-orange-500 mx-auto lg:text-lg xl:mx-0">
            {t("hero.button")}
          </button>

          {/* Reviews */}
          {/* <div className="flex items-center gap-4 mt-6"> */}
          <img
            src="/hero images/happy-customers.png"
            alt="Happy Customers"
            className="mt-4 mx-auto xl:mx-0 xl:mt-12 w-60 lg:w-96"
          />
          {/* </div> */}
        </motion.div>

        {/* Right content */}
        <motion.div
          initial={{ opacity: 0, y: "-100%", scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1.5,
            ease: [0.77, 0, 0.175, 1],
            delay: 2,
          }}
          className="relative w-full  flex justify-center "
        >
          <img
            className="absolute w-24 md:w-36  -top-5 left-20 md:left-48 xl:left-28 -rotate-[20deg]"
            src="/halal.png"
            alt="Halal certified"
          />
          {/* Main dish image */}
          <img
            src="/hero images/hero-image.png"
            alt="Dish"
            className="w-80 md:w-[28rem] lg:w-full xl:w-[29rem]  max-w-[33rem] "
          />

          {/* Floating emojis */}
          <img
            src="/hero images/fire-emoji.png"
            alt="emoji"
            className="absolute top-2 right-10 md:right-40 xl:right-10 w-6 sm:w-10"
          />
          <img
            src="/hero images/happy-emoji.png"
            alt="emoji"
            className="absolute top-10 left-10 md:left-40 xl:left-10 w-6 sm:w-10"
          />
          <img
            src="/hero images/particals.png"
            alt="particals"
            className="absolute bottom-0 right-2 md:right-32 xl:right-0  w-[85%] md:w-[60%] xl:w-[85%]"
          />

          {/* Mini Pizza Card */}
          {/* <div className=" "> */}
          <img
            src="/hero images/hero-pizza-card.png"
            alt="Cheese Pizza"
            className="h-26 md:h-34 lg:h-38 object-cover absolute bottom-0 right-0 md:right-32 xl:right-0 rounded-md"
          />
          {/* </div> */}
        </motion.div>
      </div>
    </section>
  );
}
