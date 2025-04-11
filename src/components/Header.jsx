import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { IoLogoWhatsapp } from "react-icons/io";
import { useTranslation } from "react-i18next";
import i18n from "../utils/i18n";

export default function Header() {
  const { t } = useTranslation();
  const [selectedLang, setSelectedLang] = useState(i18n.language);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setSelectedLang(lang);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

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
    <header className="w-full px-4  py-5 fixed top-0 z-50 bg-[#181818] text-white ">
      <div className="max-w-7xl  mx-auto h-18 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-1 text-3xl font-bold text-orange-600">
          <img src="/logo.png" alt="logo" className="h-10 lg:h-12" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-8 h-full items-end pb-4 text-xl ">
          {["home", "menu", "about", "contact"].map((key) => (
            <span
              key={key}
              onClick={() => scrollToSection(key)}
              className="hover:text-orange-600  font-poppins cursor-pointer"
            >
              {t(`header.${key}`)}
            </span>
          ))}
        </nav>

        {/* Desktop Buttons & Language */}
        <div className="hidden lg:flex items-center text-sm gap-4">
          <a href="https://wa.me/message/6R3F4MT7S7ZPN1" target="_blank">
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md font-quicksand font-bold flex gap-2 items-center cursor-pointer uppercase">
              {t("header.whatsapp")} <IoLogoWhatsapp size={16} />
            </button>
          </a>
          <a
            href="https://eda.yandex.ru/restaurant/saffron_t8lmvv"
            target="_blank"
          >
            <button className="border border-red-500 text-red-500 hover:bg-red-100 px-4 py-2 font-bold rounded-md font-quicksand flex gap-2 items-center cursor-pointer uppercase">
              {t("header.yandex")}{" "}
              <img src="/yandex.png" alt="" className="h-4" />
            </button>
          </a>
          <select
            value={selectedLang}
            onChange={(e) => changeLanguage(e.target.value)}
            className="border border-orange-500 text-orange-600 rounded-md px-4 font-bold py-2 hover:bg-orange-50 font-quicksand cursor-pointer"
          >
            <option className="font-quicksand" value="en">
              English
            </option>
            <option className="font-quicksand" value="ru">
              Русский
            </option>
          </select>
        </div>

        <div className="flex lg:hidden gap-4 items-center">
          <a href="https://wa.me/message/6R3F4MT7S7ZPN1" target="_blank">
            <button className="bg-green-500 hover:bg-green-600 text-white px-2 py-2 rounded-md font-quicksand font-bold flex gap-2 items-center justify-center uppercase w-full">
              <IoLogoWhatsapp size={20} />
            </button>
          </a>

          <a
            href="https://eda.yandex.ru/restaurant/saffron_t8lmvv"
            target="_blank"
          >
            <button className=" bg-[#ffe300] px-2 py-2 font-bold rounded-md font-quicksand flex gap-2 items-center justify-center uppercase w-full">
              <img src="/yandex.png" alt="" className="h-5" />
            </button>
          </a>

          <div className="flex items-center">
            <button onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? (
                <X className="w-9 h-9" />
              ) : (
                <Menu className="w-9 h-9" />
              )}
            </button>
          </div>
        </div>
        {/* Mobile Menu Icon */}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-10 space-y-4  px-4 pb-4">
          <div className="flex justify-end">
            <select
              value={selectedLang}
              onChange={(e) => changeLanguage(e.target.value)}
              className="border border-orange-500 text-orange-600 rounded-md px-4 font-bold py-2 hover:bg-orange-50 font-quicksand cursor-pointer w-fit "
            >
              <option className="font-quicksand" value="en">
                English
              </option>
              <option className="font-quicksand" value="ru">
                Русский
              </option>
            </select>
          </div>

          <nav className="flex flex-col gap-4 text-base font-medium">
            {["home", "menu", "about", "contact"].map((key) => (
              <span
                key={key}
                onClick={() => {
                  scrollToSection(key);
                  setMobileMenuOpen(false);
                }}
                className="hover:text-orange-600 font-quicksand cursor-pointer"
              >
                {t(`header.${key}`)}
              </span>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
