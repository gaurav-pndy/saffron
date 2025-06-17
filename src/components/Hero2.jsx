import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const headings = [
  "Modern Indian Kitchen",
  "Современная Индийская Кухня",
  "المطبخ الهندي الحديث",
  "நவீன இந்திய சமையலறை",
  "आधुनिक भारतीय रसोईघर",
];

export default function Hero() {
  const { t } = useTranslation();

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % headings.length);
    }, 3000); // change every 3s
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
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
        src="/heroImg.jpg"
        alt="Hero"
        className="w-full h-auto lg:h-full brightness-[0.6]"
      />

      {/* Overlay content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pb-10 md:pb-40 md:px-10 lg:px-40">
        <AnimatePresence mode="wait">
          <motion.h1
            key={index}
            initial={{ rotateX: -90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            exit={{ rotateX: 90, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#ff8c00] text-shadow text-shadow-lg text-shadow-black/30 text-3xl md:text-5xl lg:text-[5rem] text-center leading-12 lg:leading-28 font-serif font-[700] font-sofia px-4"
          >
            {headings[index]}
          </motion.h1>
        </AnimatePresence>

        <img
          className="absolute bottom-2 right-3 lg:bottom-10 xl:bottom-32 lg:right-16 w-20 md:w-36 -rotate-6"
          src="https://static.wixstatic.com/media/df6cc5_d9946e43805e40b59ffd7372e3a9db66~mv2.png"
          alt="Halal certified"
        />
      </div>
    </section>
  );
}
