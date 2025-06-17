import { useTranslation } from "react-i18next";
import { FaFacebookF, FaInstagram, FaYoutube, FaVk } from "react-icons/fa";
import { FaCircleArrowUp } from "react-icons/fa6";

const Footer = () => {
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
    <footer className="bg-[#18191b] text-[#D4D5D9] px-6 py-10 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr] gap-10">
        {/* Logo & Links */}
        <div className="md:col-span-2 lg:col-span-1">
          <img src="/dark-logo.png" alt="Saffron Logo" className="h-10 mb-4" />

          <div className=" text-sm md:mt-6 font-[300] space-y-1">
            <nav className="flex gap-6 font-medium">
              {["home", "menu", "about", "contact"].map((key) => (
                <span
                  key={key}
                  onClick={() => scrollToSection(key)}
                  className="font-quicksand cursor-pointer hover:underline text-gray-400 transition-all duration-300 hover:text-orange-500"
                >
                  {t(`header.${key}`)}
                </span>
              ))}
            </nav>
          </div>

          <div
            className=" text-[0.8rem] mt-4 pr-10 md:pr-20 md:mt-6 font-[300] space-y-1 font-quicksand text-gray-400"
            dangerouslySetInnerHTML={{ __html: t("footer.address") }}
          ></div>
        </div>

        {/* Contact Info */}
        <div className="flex justify-between ">
          <div className="text-sm  space-y-3">
            <div>
              <p className="text-sm text-gray-400 font-quicksand mb-2">
                {t("footer.whatsapp")}
              </p>
              <p className="font-quicksand text-[#D4D5D9]">+7(999)-966-99-95</p>
            </div>
            <div>
              <p className="text-sm text-gray-400 font-quicksand mb-2">
                {t("footer.contactUs")}
              </p>
              <p className="font-quicksand text-[#D4D5D9]">+7(985)-231-11-72</p>
            </div>
            <div>
              <p className="text-sm text-gray-400 font-quicksand mb-2">
                {t("footer.email")}
              </p>
              <p className="font-quicksand text-[#D4D5D9]">
                saffronmoscow@mail.ru
              </p>
              <p className="font-quicksand text-[#D4D5D9]">
                info@saffronmoscow.ru
              </p>
            </div>
          </div>
          {/* <div className="md:hidden">
            <img
              className=" bg-white w-28 md:w-20 rounded-full h-fit"
              src="https://static.wixstatic.com/media/df6cc5_2129ef23a79b4294b90d8629f09ce50d~mv2.png"
              alt="Halal certified"
            />
          </div> */}
        </div>

        {/* Opening Hours */}
        <div className="text-sm space-y-3">
          <div>
            <p className="text-sm text-gray-400 font-quicksand mb-2">
              {t("footer.hours")}
            </p>
            <p className="font-quicksand text-[#D4D5D9]">10:00 - 22:00</p>
          </div>
          <div>
            <p className="text-sm text-gray-400 font-quicksand mb-2">
              {t("footer.addressTitle")}
            </p>
            <p className="font-quicksand text-[#D4D5D9]">
              {t("footer.addressValue")}
            </p>
          </div>
          <div className="flex space-x-6 md:space-x-10 mt-2 pt-2 text-2xl md:text-4xl text-[#828282]">
            <a
              href="https://www.facebook.com/share/1AAKfBcRYt/"
              target="_blank"
              className="hover:scale-125 hover:text-orange-400 transition-all duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/saffronmoscow?igsh=MTlvN3VndHhqb21xZQ=="
              target="_blank"
              className="hover:scale-125 hover:text-orange-400 transition-all duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://vk.com/saffronmoscow"
              target="_blank"
              className="hover:scale-125 hover:text-orange-400 transition-all duration-300"
            >
              <FaVk />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col justify-center h-full space-y-6 lg:space-y-0 text-sm  ">
          {/* <div className="flex sm:justify-start lg:justify-end">
            <button
              className="text-[#CFA247] font-quicksand text-xl sm:text-2xl xl:px-5 py-2 rounded-full tracking-wide flex items-center gap-2 cursor-pointer"
              onClick={() => scrollToSection("contact")}
            >
              {t("footer.orderNow")} <FaCircleArrowUp />
            </button>
          </div> */}
          {/* <img
            className="mx-auto hidden lg:block md:mx-auto bg-white w-20 md:w-28 rounded-full"
            src="https://static.wixstatic.com/media/df6cc5_2129ef23a79b4294b90d8629f09ce50d~mv2.png"
            alt="Halal certified"
          /> */}
          <p className="text-xs lg:hidden font-quicksand text-gray-400 text-center md:text-left ">
            Copyright @ - SAFFRON - 2025
            <br />
            {t("footer.rights")}
          </p>
          <p className="font-quicksand lg:hidden text-gray-400 text-xs text-center md:text-left ">
            Digital Partner <br />
            <a
              className="font-quicksand hover:underline text-[#D4D5D9]"
              target="_blank"
              href="https://www.pasovit.com/"
            >
              Pasovit Technologies
            </a>
          </p>
        </div>

        {/* <div className="hidden md:flex  lg:hidden">
          <img
            className=" bg-white w-20 md:w-28 rounded-full"
            src="https://static.wixstatic.com/media/df6cc5_2129ef23a79b4294b90d8629f09ce50d~mv2.png"
            alt="Halal certified"
          />
        </div> */}

        <div className="col-span-4 w-fit mx-auto  lg:flex gap-20 hidden">
          <p className="text-xs font-quicksand text-gray-400 ">
            Copyright @ - SAFFRON - 2025 {t("footer.rights")}
          </p>
          <p className="font-quicksand text-gray-400 text-xs">
            Digital Partner:{" "}
            <a
              className="font-quicksand hover:underline text-[#D4D5D9]"
              target="_blank"
              href="https://www.pasovit.com/"
            >
              Pasovit Technologies
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
