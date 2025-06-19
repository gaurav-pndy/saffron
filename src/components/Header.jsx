import React, { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { IoLogoWhatsapp } from "react-icons/io";
import { useTranslation } from "react-i18next";
import i18n from "../utils/i18n";
import { AnimatePresence, motion } from "framer-motion";
import { PiWhatsappLogoBold } from "react-icons/pi";
import { LiaTelegramPlane } from "react-icons/lia";
import { FaWhatsapp } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router";

export default function Header() {
  const { t } = useTranslation();
  const [selectedLang, setSelectedLang] = useState(i18n.language);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      const toggleButton = document.querySelector(
        '[aria-label="Close menu"], [aria-label="Open menu"]'
      );
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        toggleButton !== event.target &&
        !toggleButton.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setSelectedLang(lang);
  };

  const toggleMobileMenu = (event) => {
    // Stop event from propagating to document listener
    if (event) {
      event.stopPropagation();
    }
    setMobileMenuOpen((prev) => !prev);
  };

  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      scrollNow(id);
    }
  };

  const scrollNow = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header className="w-full px-4 py-4 lg:py-5 fixed top-0 z-50 bg-white  ">
      <div className="max-w-7xl  mx-auto h-12 lg:h-14 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-1 text-3xl font-bold text-orange-600">
          <a href="/">
            <img src="/logo.png" alt="logo" className="h-10 lg:h-12" />
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-8 h-full items-end pb-3 text-xl ">
          {["home", "menu", "about", "contact"].map((key) => (
            <span
              key={key}
              onClick={() => scrollToSection(key)}
              className="hover:text-orange-600 transition-all duration-300 font-poppins cursor-pointer"
            >
              {t(`header.${key}`)}
            </span>
          ))}
        </nav>

        {/* Desktop Buttons & Language */}
        <div className="hidden lg:flex items-center text-sm gap-4">
          <a
            href="https://wa.me/message/6R3F4MT7S7ZPN1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-all duration-300"
          >
            <button className="p-2 rounded-full border-2 border-green-500 ">
              <FaWhatsapp size={22} className=" text-green-500" />
            </button>
          </a>

          <a
            href="https://t.me/saffronmoskva"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-all duration-300"
          >
            <button className="p-2 rounded-full border-3 border-blue-500 ">
              <LiaTelegramPlane size={22} className=" text-blue-500" />
            </button>
          </a>

          <select
            value={selectedLang}
            onChange={(e) => changeLanguage(e.target.value)}
            className="border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-md px-4 font-bold py-2 transition-all duration-300 font-quicksand cursor-pointer"
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
          <a
            href="https://wa.me/message/6R3F4MT7S7ZPN1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="p-2 rounded-full border-2 border-green-500  bg-white">
              <FaWhatsapp size={22} className=" text-green-500 " />
            </button>
          </a>
          <a
            href="https://t.me/saffronmoskva"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="p-2 rounded-full border-2 border-blue-500 ">
              <LiaTelegramPlane size={22} className=" text-blue-500 " />
            </button>
          </a>
          <div className="flex items-center">
            <button
              onClick={(e) => toggleMobileMenu(e)}
              className="p-2 focus:outline-none rounded-md  transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative w-8 h-8 flex items-center justify-center">
                {/* Top bar */}
                <span
                  className={`absolute h-0.5 w-8 bg-black transform transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? "rotate-45" : "-translate-y-3"
                  }`}
                />

                {/* Middle bar */}
                <span
                  className={`absolute h-0.5 w-8 bg-black transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />

                {/* Bottom bar */}
                <span
                  className={`absolute h-0.5 w-8 bg-black transform transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? "-rotate-45" : "translate-y-3"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
        {/* Mobile Menu Icon */}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            ref={mobileMenuRef}
            className="lg:hidden mt-10 space-y-4  px-4 pb-4"
          >
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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
