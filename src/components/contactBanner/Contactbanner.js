import React from 'react';
import style from "./Contactbanner.module.scss"
import { MainLink } from '../../utils/Components';
import phone from "../../assets/📱.svg";
import ScrollRoute from '../../utils/scrollroute/Scrollroute';
import { useTranslation } from 'react-i18next';

function Contactbanner() {
    const { t } = useTranslation();
    return (
        <div className={style.contactbanner} id='contactbanner'>
            <div className={style.contactbanner__container}>
                <div className={style.contactbanner__wrapper}>
                    <h2>{t("contact")}  📡</h2>
                    <MainLink text={t("more")} icon={phone} link={"#"} />
                </div>

            </div>
            <ScrollRoute routeName={"contactbanner"} />
        </div>
    )
}

export default Contactbanner