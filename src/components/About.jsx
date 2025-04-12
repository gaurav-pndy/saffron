import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="my-20 ">
      <div className="max-w-7xl bg-[#FEFAF3] px-6 py-16 lg:px-16 mx-auto flex flex-col md:flex-row gap-10 items-center text-center lg:text-left">
        {/* Text Content */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="md:w-[62%]"
        >
          <h2 className="text-4xl md:text-5xl font-[400] text-[#CFA247] mb-16">
            {t("about.heading")}
          </h2>

          <h3 className="text-2xl md:text-[1.6rem] font-[700]  text-[#3B492F] mb-4">
            {t("about.subheading")}
          </h3>

          <p
            className="text-[#3B492F] font-[300] leading-relaxed mb-4 font-poppins text-justify"
            dangerouslySetInnerHTML={{ __html: t("about.text") }}
          ></p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.5,
          }}
          className="md:w-[38%] "
        >
          <img
            src="/collage/aboutus.webp" // update path as per your file
            alt="Team behind Saffron restaurant"
            className="rounded h-[35rem] object-cover w-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
