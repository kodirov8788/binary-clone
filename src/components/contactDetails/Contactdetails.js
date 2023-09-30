import React from 'react';
import style from "./Contactdetails.module.scss"
import watches from "../../assets/clock.svg";
import logo from "../../essets/logoBlack.svg";
import ScrollRoute from '../../utils/scrollroute/Scrollroute';
import { useTranslation } from 'react-i18next';

function Contactdetails() {
    const { t } = useTranslation();
    return (
        <div className={style.contactdetails} id='contactdetails'>
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
                                <a className='phone_number' href="tel:+998939427899">   <p>+998 93 942 78 99</p></a>
                            </li>
                            <li>
                                <h2>{t("address")}:</h2>
                                <a className='phone_number' href="mailto:binaries@bin.uz">  <p>binaries@bin.uz</p></a>
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
            <ScrollRoute routeName={"contactdetails"} />
        </div>
    )
}

export default Contactdetails