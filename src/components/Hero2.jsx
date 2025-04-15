import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Star } from "lucide-react";

export default function Hero() {
  const { t } = useTranslation();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Adjust based on header height
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  return (
    <section
      id="home"
      className="relative w-full mt-[5rem] lg:mt-[6rem] xl:h-[calc(100vh)] overflow-hidden"
    >
      {/* Background image */}
      <img
        src="https://static.wixstatic.com/media/df6cc5_b4079f1e2fa94656b8dfde85f3e9d506~mv2.png"
        alt="Hero"
        className="w-full h-auto lg:h-full brightness-[0.6]"
      />

      {/* Overlay content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pb-10 md:pb-40 md:px-10 lg:px-40">
        <motion.h1
          initial={{ opacity: 0, filter: "blur(8px)", scale: 0.5 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          viewport={{ amount: 0.4 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 3,
          }}
          className="text-[#ff8c00] text-shadow text-shadow-lg text-shadow-black/30 text-3xl md:text-5xl lg:text-[5rem] text-center leading-12  lg:leading-28 font-serif font-[700] px-4"
        >
          {t("hero.heading")}
        </motion.h1>
        {/* <img
          className=" absolute bottom-3 right-3 lg:bottom-40 lg:right-40 w-20 md:w-36  -rotate-[20deg] rounded-full"
          src="/halal.jpg"
          alt="Halal certified"
        /> */}
      </div>
    </section>
  );
}
