import React, { useState } from 'react';
import styles from "./Header.module.scss";
import logo from "../../assets/logo.svg"
import { Link } from 'react-router-dom';
// Please use CSS module
import bars from "../../assets/bars_icon.svg"
import Language from '../../utils/language/Language';
import { useTranslation } from 'react-i18next';

const Header = ({ setOpenCloseSidebar, openCloseSidebar, }) => {
  const [scrollState, setScrollState] = useState(false)
  const { t } = useTranslation();
  const getScroolY = () => {
    if (window.scrollY > 100) {
      setScrollState(true)
    } else {
      setScrollState(false)
    }
  }
  window.addEventListener("scroll", () => getScroolY())

  return (
    <div className={`${styles.header} ${scrollState ? styles.headerActive : ""} `} >
      <button onClick={() => setOpenCloseSidebar(!openCloseSidebar ? true : false)}>
        <img src={bars} alt="" />
      </button>
      <a href='/' className={styles.logo}>
        <img src={logo} alt="" />
        <h1>BINARIES</h1>
      </a>
      <ul><div className={styles.header_language}>
        <Language />
      </div>
        <li>
          <Link to={"/"}>
            {t("aboutus")}
          </Link>
        </li>
        <li>
          <Link to={"case"}>
            {t("case")}
          </Link>
        </li>
        <li>
          <Link to={"service"}>
            {t("service")}
          </Link>
        </li>
        <li>
          <Link to={"contact"}>
            {t("contact")}
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Header