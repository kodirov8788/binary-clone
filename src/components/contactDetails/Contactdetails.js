import React from 'react';
import style from "./Contactdetails.module.scss"
import watches from "../../assets/clock.svg";
import logo from "../../essets/logoBlack.svg";
import ScrollRoute from '../../utils/scrollroute/Scrollroute';
import { useTranslation } from 'react-i18next';

function Contactdetails() {
    const { t } = useTranslation();
    return (
        <div className={style.contactdetails}>
            <div className={style.contactbanner__container}>
                <div className={style.contactbanner__wrapper}>
                    <h2> {t("cDetailText")} <img src={watches} alt="watch" />
                    </h2>


                    <div className={style.info}>

                        <ul>
                            <li>
                                <h2>{t("address")}:</h2>
                                <p>
                                    {t("location")}
                                </p>
                            </li>
                            <li>
                                <h2>{t("number")}:</h2>
                                <p>+998 99 978-75-25</p>
                            </li>
                            <li>
                                <h2>{t("address")}:</h2>
                                <p>binary@bin.uz</p>
                            </li>
                        </ul>

                    </div>



                    <div className={style.link}>
                        <div className={style.links}>
                            <ul>
                                <li>Instagram</li>
                                <li>Linkedin</li>
                                <li>Facebook</li>
                                <li>Telegram</li>
                            </ul>
                        </div>
                        <div className={style.logo}>
                            <img src={logo} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactdetails