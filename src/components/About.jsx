import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="my-20 ">
      <div className="max-w-7xl bg-[#FEFAF3] px-6 py-16  mx-auto flex flex-col md:flex-row gap-10 items-center text-center lg:text-left">
        {/* Text Content */}
        <motion.div className="md:w-[62%]">
          <motion.h2
            initial={{ opacity: 0, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ amount: 0.3, once: true }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="text-4xl md:text-5xl font-[400] text-[#CFA247] mb-16"
          >
            {t("about.heading")}
          </motion.h2>

          <motion.h3
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ amount: 0.2, once: true }}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="text-2xl md:text-[1.6rem] font-[700]  text-[#3B492F] mb-4"
          >
            {t("about.subheading")}
          </motion.h3>

          <motion.p
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ amount: 0, once: true }}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="text-[#3B492F] font-[300] leading-relaxed mb-4 font-poppins text-left"
            dangerouslySetInnerHTML={{ __html: t("about.text") }}
          ></motion.p>
        </motion.div>

        {/* Image */}
        {/* Image Slideshow */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ amount: 0.2, once: true }}
          transition={{
            duration: 0.7,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.5,
          }}
          className="md:w-[38%] rounded max-w-screen overflow-hidden px-4 md:p-0"
        >
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={0}
            slidesPerView={1}
            className="w-full"
          >
            <SwiperSlide>
              <img
                src="/collage/aboutus.webp"
                alt="Team behind Saffron restaurant"
                className="rounded h-[30rem] md:h-[35rem] object-cover w-full"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="/about-2.jpg"
                alt="Saffron restaurant ambience"
                className="rounded h-[30rem] md:h-[35rem] object-cover w-full"
              />
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
