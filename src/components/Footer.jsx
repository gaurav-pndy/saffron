import { useTranslation } from "react-i18next";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaCircleArrowUp } from "react-icons/fa6";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#18191b] text-[#D4D5D9] px-6 py-10 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo & Links */}
        <div>
          <img src="/dark-logo.png" alt="Saffron Logo" className="h-10 mb-6" />
          <div className="text-sm font-[300] space-y-1">
            <span className="font-quicksand">
              {t("footer.home")} &nbsp;/&nbsp;
            </span>
            <span className="font-quicksand">
              {t("footer.order")} &nbsp;/&nbsp;
            </span>
            <span className="font-quicksand">
              {t("footer.sale")} &nbsp;/&nbsp;
              <br />
            </span>
            <span className="font-quicksand">
              {t("footer.about")} &nbsp;/&nbsp;
            </span>
            <span className="font-quicksand">
              {t("footer.customers")} &nbsp;/&nbsp;
              <br />
            </span>
            <span className="font-quicksand">{t("footer.contacts")}</span>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-sm space-y-3">
          <div>
            <p className="text-sm text-gray-400 font-quicksand mb-2">
              {t("footer.whatsapp")}
            </p>
            <p className="font-quicksand text-[#D4D5D9]">+79999669995</p>
          </div>
          <div>
            <p className="text-sm text-gray-400 font-quicksand mb-2">
              {t("footer.contactUs")}
            </p>
            <p className="font-quicksand text-[#D4D5D9]">79852311172</p>
          </div>
          <div>
            <p className="text-sm text-gray-400 font-quicksand mb-2">
              {t("footer.email")}
            </p>
            <p className="font-quicksand text-[#D4D5D9]">
              saffronmoscow@mail.ru
            </p>
          </div>
        </div>

        {/* Opening Hours */}
        <div className="text-sm space-y-3">
          <div>
            <p className="text-sm text-gray-400 font-quicksand mb-2">
              {t("footer.hours")}
            </p>
            <p className="font-quicksand text-[#D4D5D9]">9am—11pm</p>
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
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/saffronmoscow?igsh=MTlvN3VndHhqb21xZQ=="
              target="_blank"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/saffronmoscow?igsh=MTlvN3VndHhqb21xZQ=="
              target="_blank"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Order Now + Copyright */}
        <div className="flex flex-col justify-between h-full space-y-6 sm:space-y-10 text-sm">
          <div className="flex sm:justify-start lg:justify-end">
            <button className="text-[#CFA247] font-quicksand text-xl sm:text-2xl xl:px-5 py-2 rounded-full tracking-wide flex items-center gap-2">
              {t("footer.orderNow")} <FaCircleArrowUp />
            </button>
          </div>
          <p className="text-xs font-quicksand text-gray-400 text-left sm:text-right">
            Copyright @ - SAFFRON
            <br />
            {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
