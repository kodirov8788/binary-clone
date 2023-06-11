import React from 'react'
import { useTranslation } from 'react-i18next'
import style from "./Casecollect.module.scss"
import aroma from "./assets/aroma.png"
import camera from "./assets/camera.png"
import geeni from "./assets/geeni.png"
import pizza from "./assets/pizza.png"
import starB from "./assets/starbuckBoth.png"
import starBRed from "./assets/starbuckRed.png"
import starBYellow from "./assets/starbuckYellow.png"
import women from "./assets/women.png"
import womenT from "./assets/womenAndTongue.png"
import womenBag from "./assets/womenWithBag.png"
import pizzaLittle from "./assets/pizzaLittle.png"
import { MainLink } from "../../utils/Components"
import ScrollRoute from '../../utils/scrollroute/Scrollroute'

function Casecollection() {
    const { t } = useTranslation()
    return (

        <div className={style.casecolection} id='casecollection'>
            <div className={style.caseAnimation} >
                <div className={style.collectionAll}>
                    <div className={style.collectionBanner}>
                        <div className={style.womenPic}><img src={womenBag} alt='banner' /></div>
                        <div className={style.womenPic2}><img src={women} alt='banner' /></div>
                        <div className={style.cameraPic}><img src={camera} alt='banner' /></div>
                        <div className={style.geeniPic}><img src={geeni} alt='banner' /></div>
                        <div className={style.aromaPic}><img src={aroma} alt='banner' /></div>
                        <div className={style.pizaPic}><img src={pizza} alt='banner' /></div>
                        <div className={style.starbuckPic}><img src={starB} alt='banner' /></div>
                        <div className={style.starbuckLittlePic}><img src={starBYellow} alt='banner' /></div>
                        <div className={style.womenTonguePic}><img src={womenT} alt='banner' /></div>
                        <div className={style.startbuckLargePic}><img src={starBRed} alt='banner' /></div>
                        <div className={style.geeniPic2}><img src={geeni} alt='banner' /></div>
                        <div className={style.pizaLittlePic}><img src={pizzaLittle} alt='banner' /></div>
                    </div>
                    <div className={style.collectionBanner2}>
                        <div className={style.cameraPic2}><img src={camera} alt='banner' /></div>
                        <div className={style.pizaPic2}><img src={pizza} alt='banner' /></div>
                    </div>
                </div>
            </div>

            <div className={style.bannerText}>
                <div>
                    <h3>{t("collectionHead")}</h3>
                    <p>{t("collectionText")}</p>
                </div>
                <div>
                    <h3>{t("collectionExtra")}</h3>
                    <MainLink text={t("collectionBtn")} link="#" className={style.collectionBtn} />
                </div>
            </div>
            <ScrollRoute routeName={"casecollection"} />
        </div>
    )
}

export default Casecollection