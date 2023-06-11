import React from 'react'
import style from "./Video.module.scss"
import ReactPlayer from "react-player"
import backgroundVideo from "../../essets/bgVideo.mp4"
import suitcase from "../../essets/suitcase.svg"
import smilyIcon from "../../essets/smile.svg"
import man from "../../essets/man.svg"
import { MainLink } from '../../utils/Components'
import Scrollroute from '../../utils/scrollroute/Scrollroute'
import backgroundVideo_mobile from "../../essets/bgVideo_mobile.mp4"
import { useTranslation } from 'react-i18next'


function Video() {
    const { t } = useTranslation()
    return (
        <div className={style.video} id='video'>
            <ReactPlayer
                className={style.backgroundVideo}
                playing
                muted
                loop
                url={backgroundVideo}
            />
            <ReactPlayer
                className={style.backgroundVideoMobile}
                playing
                muted
                loop
                url={backgroundVideo_mobile}
            />
            <div className={style.videoPartSections}>
                <h2>{t("videoHead1")} <img src={smilyIcon} alt='emojies' />, {t("videoHead2")} <img src={man} alt='emojies' /> {t("videoHead3")}</h2>
                <div className={style.videoBottomPart}>
                    <h3>{t("videoText")} </h3>
                    <MainLink text={t("videoBtn")} icon={suitcase} link="#" className={style.button} />
                </div>
            </div>
            <Scrollroute routeName={"video"} />

        </div>
    )
}
export default Video