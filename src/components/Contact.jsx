import React from "react";
import { useTranslation } from "react-i18next";
import { ImWhatsapp } from "react-icons/im";
import { IoLocation } from "react-icons/io5";

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="w-full bg-black">
      {/* Top section with background image */}
      <div
        className="relative h-[85vh] lg:h-[40vh] xl:h-[75vh] md:h-[75vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url('/contact-bg.png')` }}
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
          <div className="bg-[#D9D9D9]/20 md:w-fit h-fit text-white p-6 rounded-md text-center w-full ">
            <h3 className="text-3xl font-medium mb-5">{t("contact.title")}</h3>
            <button className="bg-[#1D1D1D]/80 text-xl font-semibold px-8 py-2 rounded-md">
              +7 123456789
            </button>
          </div>

          {/* Logo + Order Now */}
          <div className="text-center flex flex-col items-center justify-center ">
            <div className="bg-[#D9D9D9]/20 p-6 w-full md:w-fit rounded-md border ">
              <h4 className="text-white mb-5 text-3xl font-medium">
                {t("contact.order")}
              </h4>
              <div className="flex justify-around">
                <a
                  href="https://wa.me/message/6R3F4MT7S7ZPN1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#19bd56] text-white px-4 py-3 rounded-md font-medium"
                >
                  <ImWhatsapp className="w-8 h-8" />
                </a>
                <a
                  href="https://eda.yandex.ru/restaurant/saffron_t8lmv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#ffd600] text-white px-4 py-3 rounded-md font-medium"
                >
                  <img src="/yandex.png" alt="" className="h-8" />
                </a>
              </div>
            </div>
          </div>

          {/* Find Us */}
          <div className="w-full flex justify-end">
            <div className="bg-[#D9D9D9]/20 w-full md:w-fit p-6 text-white  rounded-md text-center ">
              <h3 className="text-3xl font-medium mb-5">{t("contact.find")}</h3>
              <a
                href="https://yandex.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="border bg-[#1D1D1D]/80 text-xl border-[#F40C00] text-[#F40C00] px-8 py-2 rounded-md font-semibold inline-flex items-center gap-3"
              >
                YANDEX <IoLocation className="w-6 h-6" />
              </a>
            </div>
          </div>
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
