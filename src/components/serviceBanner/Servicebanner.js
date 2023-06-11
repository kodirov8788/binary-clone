import React from 'react';
import { MainLink } from '../../utils/Components';
import style from "./Service.module.scss";
import eye from "../../assets/👀.svg";
import baloon from "../../assets/🎈.svg";
import ScrollRoute from '../../utils/scrollroute/Scrollroute';
import { useTranslation } from 'react-i18next';

function Servicebanner() {
    const { t } = useTranslation();
    return (
        <div className={style.servicebanner} id='servicebanner'>
            <div className={style.servicebanner__container}>
                <div className={style.servicebanner__wrapper}>
                    <h2>{t("service")} <img src={baloon} alt="" /></h2>
                    <MainLink text={t("more")} icon={eye} link={"#"} />
                </div>

            </div>
            <ScrollRoute routeName={"servicebanner"} />

        </div>
    )
}

export default Servicebanner