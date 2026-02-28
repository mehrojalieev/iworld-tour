import { Link } from "react-router-dom";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import LogoImage from "../../assets/image2.png";
import MenuSidebar from "../../components/menu-sidebar/MenuSidebar";
import EnglishFlag from "../../assets/englishFlag.svg";
import RussiaFlag from "../../assets/russiaFlag.svg";
import UzbFlag from "../../assets/UzbFlag.svg";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { i18n, t } = useTranslation();
  const currentLang = localStorage.getItem("lang") || "uz";

  const [language, setLanguage] = useState<string>(currentLang);
  const [openMenuSidebar, setOpenMenuSidebar] = useState<boolean>(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState<boolean>(true);

  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    // Scroll pastga bo'lganda yashirish, tepaga bo'lganda ko'rsatish
    setIsNavbarVisible(currentScrollY < lastScrollY || currentScrollY < 70);
    lastScrollY = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const languagesList = [
    { name: "English", flag: EnglishFlag, code: "en" },
    { name: "Russian", flag: RussiaFlag, code: "ru" },
    { name: "Uzbek", flag: UzbFlag, code: "uz" },
  ];

  useEffect(() => {
    if (i18n?.changeLanguage) {
      i18n.changeLanguage(language).catch(console.error);
      localStorage.setItem("lang", language);
    }
  }, [language, i18n]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-100 bg-white shadow-lg transition-transform duration-300 ease-in-out ${
        isNavbarVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Brand Logo */}
        <Link to="/" className="shrink-0">
          <img
            src={LogoImage}
            alt="Logo"
            className="w-auto h-10 md:h-12 object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="flex md:hidden items-center space-x-8">
          {["home", "about", "tours", "contact", "faq"].map((item) => (
            <li key={item}>
              <Link
                to={`/${item === "home" ? "" : item}`}
                className="text-gray-700 hover:text-teal-600 font-medium tracking-wide transition-colors text-[15px] lg:text-[16px]"
              >
                {t(`navbar.${item}`)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Actions (Language & Hamburger) */}
        <div className="flex items-center space-x-4">
          {/* MUI Select with Tailwind Styling */}
          <div className="block sm:hidden">
            <Select
              value={language}
              onChange={(e: SelectChangeEvent<string>) =>
                setLanguage(e.target.value)
              }
              variant="standard"
              disableUnderline
              className="bg-gray-100 px-3 py-1 rounded-lg text-sm font-medium"
              sx={{
                ".MuiSelect-select": {
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  paddingRight: "24px !important",
                },
              }}
            >
              {languagesList.map((lang) => (
                <MenuItem
                  key={lang.code}
                  value={lang.code}
                  className="flex items-center gap-2"
                >
                  <img
                    src={lang.flag}
                    alt={lang.name}
                    className="w-5 h-3.5 object-cover rounded-sm"
                  />
                  <span className="text-sm font-medium text-gray-800">
                    {lang.name}
                  </span>
                </MenuItem>
              ))}
            </Select>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpenMenuSidebar(true)}
            className="md:block hidden p-2 text-2xl text-gray-800 hover:bg-gray-100 rounded-full transition-colors"
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </div>

      <MenuSidebar
        openMenuSidebar={openMenuSidebar}
        setOpenMenuSidebar={setOpenMenuSidebar}
      />
    </nav>
  );
};

export default Navbar;
