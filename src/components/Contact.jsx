import React from "react";
import { useTranslation } from "react-i18next";
import { ImWhatsapp } from "react-icons/im";
import { IoLocation } from "react-icons/io5";
import { motion } from "framer-motion";
import { PiWhatsappLogoBold } from "react-icons/pi";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { LiaTelegramPlane } from "react-icons/lia";

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="w-full bg-black">
      {/* Top section with background image */}
      <div
        className="relative h-[85vh] lg:h-[40vh] xl:h-[75vh] md:h-[75vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url("/contact-bg.png")` }}
      >
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black/0 z-0"></div> */}

        <img
          src="/dark-logo.png"
          alt="Saffron Logo"
          className="w-[38rem] absolute top-10 md:top-20"
        />
        <div className="relative z-10 w-full max-w-7xl px-4 flex flex-col gap-4 md:gap-0">
          {/* Contact */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="bg-[#D9D9D9]/20 md:w-fit h-fit text-white p-6 rounded-md text-center w-full "
          >
            <h3 className="text-3xl font-medium mb-5">{t("contact.title")}</h3>
            <button className="bg-[#1D1D1D]/80 text-xl font-quicksand font-semibold px-8 py-2 rounded-md">
              +7(985)-231-11-72
            </button>
          </motion.div>

          {/* Logo + Order Now */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="text-center flex flex-col items-center justify-center "
          >
            <div className="bg-[#D9D9D9]/20 p-6 w-full md:w-fit rounded-md border ">
              <h4 className="text-white mb-5 text-3xl font-medium">
                {t("contact.order")}
              </h4>
              <div className="flex justify-around">
                <a
                  href="https://wa.me/message/6R3F4MT7S7ZPN1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="p-2 rounded-full border-2 border-green-500 neon-green bg-white">
                    <FaWhatsapp
                      size={22}
                      className="glow-icon-green text-green-500"
                    />
                  </button>
                </a>

                <a
                  href="https://t.me/saffronmoskva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-white rounded-md font-medium hover:scale-110 transition-all duration-300"
                >
                  <button className="p-2 rounded-full border-2 border-yellow-500 neon-yellow">
                    <img
                      src="/yandex.png"
                      alt=""
                      className="h-7 glow-icon-yellow"
                    />
                  </button>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Find Us */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="w-full flex justify-end"
          >
            <div className="bg-[#D9D9D9]/20 w-full md:w-fit p-6 text-white  rounded-md text-center ">
              <h3 className="text-3xl font-medium mb-5">{t("contact.find")}</h3>
              <a
                href="https://yandex.com/maps/-/CHVsAEmk"
                target="_blank"
                rel="noopener noreferrer"
                className="border bg-[#1D1D1D]/80 text-xl border-[#F40C00] text-[#F40C00] px-8 py-2 rounded-md font-semibold inline-flex items-center gap-3 font-quicksand hover:bg-black transition-all duration-300"
              >
                YANDEX <IoLocation className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-[30vh]">
        <iframe
          title="Yandex Map"
          src="https://yandex.com/map-widget/v1/org/saffron/244940544026/?ll=37.662093%2C55.845855&utm_source=share&z=16"
          className="w-full h-full border-0 "
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default ContactSection;
