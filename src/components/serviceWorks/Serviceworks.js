import React from 'react';
import style from "./Serviceworks.module.scss";
import { MainLink } from '../../utils/Components';
import brain from "../../assets/🧠.svg";
import beauty from "../../assets/⚜️.svg";
import phone from "../../assets/📱.svg";
import bomb from "../../assets/💣.svg";
import ScrollRoute from '../../utils/scrollroute/Scrollroute';
import { useTranslation } from 'react-i18next';

function Serviceworks() {
    const { t } = useTranslation();
    return (
        <div className={style.serviceworks} id='serviceworks'>
            <div className={style.serviceworks__container}>
                <div className={style.serviceworks__header}>
                    <h2>{t("serviceWork")} </h2>
                </div>
                <div className={style.serviceworks__choices}>
                    <div className={style.serviceworks__choise1}>
                        <h2> {t("serviceLogo")} <img src={bomb} alt="" /></h2>
                        <p> {t("sLogoText")}</p>
                    </div>
                    <div className={style.serviceworks__choise2}>
                        <h2> {t("serviceWeb")}<img src={beauty} alt="" /></h2>
                        <p> {t("sWebText")}</p>
                    </div>
                    <div className={style.serviceworks__choise1}>
                        <h2> {t("serviceMobile")}<img src={phone} alt="" /></h2>
                        <p> {t("sMobileText")}</p>
                    </div>
                    <div className={style.serviceworks__choise2}>
                        <h2> {t("serviceUiUx")}<img src={brain} alt="" /></h2>
                        <p> {t("sUiUxText")}</p>
                    </div>
                </div>
                <div className={style.serviceworks__btn}>
                    <MainLink className={style.serviceworks__btnEl} text={t("wow")} link={"#"} />
                </div>
            </div>
            <ScrollRoute routeName={"serviceworks"} />
        </div>
    )
}

export default Serviceworks