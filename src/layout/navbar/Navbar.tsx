import { Link } from "react-router-dom";
import "./Navbar.scss";
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import LogoImage from "../../assets/image2.png"
import MenuSidebar from "../../components/menu-sidebar/MenuSidebar";
import EnglishFlag from "../../assets/englishFlag.svg"
import RussiaFlag from "../../assets/russiaFlag.svg"
import UzbFlag from "../../assets/UzbFlag.svg"
import { useTranslation } from "react-i18next";

const Navbar = () => {
 
  const { i18n, t } = useTranslation()
  const currentLang: any = localStorage.getItem("lang")

  console.log(currentLang);
  

  const [language, setLanguage] = useState<string>(currentLang);
  const [openMenuSidebar, setOpenMenuSidebar] = useState<boolean>(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState<boolean>(true);

  let lastScrollY = window.scrollY;



  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setIsNavbarVisible(currentScrollY < lastScrollY || currentScrollY < 70);
    lastScrollY = currentScrollY;
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);


    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const languagesList = [
    {
      name: "English",
      flag: EnglishFlag,
      code: "en"
    },
    {
      name: "Russian",
      flag: RussiaFlag,
      code: "ru"
    },
    {
      name: "Uzbek",
      flag: UzbFlag,
      code: "uz"
    }
  ]


  


  useEffect(() => {
    if (i18n && i18n.changeLanguage) {
      i18n.changeLanguage(language)
        .catch(error => {
          console.error('Failed to change language:', error);
        });
    }
  }, [language, i18n]);


  return (
    <nav style={isNavbarVisible ? { transform: "translateY(0)", } : { transform: "translateY(-100%)" }}>
      <div className="nav-wrapper container">
        <Link to="/" className="brand-logo">
          <img width={100} height={100} src={LogoImage}  />
        </Link>
        <ul className="nav-menu">
          <li><Link className="item-link" to="/">{t("navbar.home")}</Link></li>
          <li><Link className="item-link" to="/about">{t("navbar.about")}</Link></li>
          <li><Link className="item-link" to="/tours">{t("navbar.tours")}</Link></li>
          <li><Link className="item-link" to="/contact">{t("navbar.contact")}</Link></li>
          <li><Link className="item-link" to="/faq">{t("navbar.faq")}</Link></li>
        </ul>
        <div className="media-actions">

          <Select className="language-select" value={language} onChange={(e: SelectChangeEvent<string>) => setLanguage(e.target.value)} labelId="demo-simple-select-autowidth-label" id="demo-simple-select-autowidth" >
            {
              languagesList.map((language, index) => (
                <MenuItem className="language-option" value={language.code} key={index}>
                  <img src={language.flag} alt={language.name} />
                  <span>{language.name}</span>
                </MenuItem>

              ))
            }
          </Select>
          <button onClick={() => setOpenMenuSidebar(true)} className="menu-btn"><GiHamburgerMenu /></button>
        </div>

      </div>
      <MenuSidebar openMenuSidebar={openMenuSidebar} setOpenMenuSidebar={setOpenMenuSidebar} />
    </nav>
  );
};

export default Navbar;
