import React, { useEffect, useState } from 'react'
import style from "./Case.module.scss"
import family from '../../essets/family.svg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import { Mousewheel, Navigation, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.scss";
import medals from '../../essets/medals.svg'
import house from '../../assets/house.svg'
import ScrollRoute from '../../utils/scrollroute/Scrollroute';
import talia from '../../assets/talia.svg'
import black from '../../assets/black.svg'
import alastin from '../../assets/alastin.svg'
import mold from '../../assets/mold.svg'
import geeni from '../../assets/geeni.svg'
import euro from '../../assets/euro.svg'
import beauty from '../../assets/beauty.svg'
import billiard from '../../assets/billiard.svg'
import scientist from '../../assets/scientist.svg'
import { useLocation } from 'react-router-dom';
import { MainLink } from '../../utils/Components';
import { useTranslation } from 'react-i18next';


const data = [
    {
        "id": 1,
        "name": "Talia",
        "description_uz": "",
        "description_en": "",
        "image": talia,
        "description": "Эстетичная пиццерия в стиле испанской ценности в Нью-Йорке"
    },
    {
        "id": 2,
        "name": "Brandon Blackwood",
        "description_uz": "",
        "description_en": "",
        "image": black,
        "description": "description"
    },
    {
        "id": 3,
        "name": "Alastin",
        "description_uz": "",
        "description_en": "",
        "image": alastin,
        "description": "description"
    },
    {
        "id": 5,
        "name": "Geeni",
        "description_uz": "",
        "description_en": "",
        "image": geeni,
        "description": "description"
    },
    {
        "id": 4,
        "name": "Mold",
        "description_uz": "",
        "description_en": "",
        "image": mold,
        "description": "description"
    },
    {
        "id": 6,
        "name": "Beautyrest",
        "description_uz": "",
        "description_en": "",
        "image": beauty,
        "description": "description"
    },
    {
        "id": 7,
        "name": "EuroTruckService",
        "description_uz": "",
        "description_en": "",
        "image": euro,
        "description": "description"
    }
]

function Case({ about }) {
    const { t } = useTranslation()
    const [activeTextIndex, setActiveTextIndex] = useState(0)
    const [realIndex, setRealIndex] = useState(false)
    const [idRoute, setIdRoute] = useState("case")
    let location = useLocation().pathname

    useEffect(() => {
        if (location === "/case") {
            setIdRoute("caseselection")
        } else if (location === "/service") {
            setIdRoute("servicecase")
        } else {
            setIdRoute("case")
        }
    }, [location])





    return (
        <div className={style.case} id={idRoute}>
            <div className={style.title}>{about ? <h2>{t("ourFamily")} <img src={family} alt="family" /> {t("ourFamily1")} <img src={house} alt="house" /> {t("ourFamily2")} </h2> : <h2>{t("ourWorks")} <img src={billiard} alt='billiard' /> </h2>}</div>
            <div className={style.case__child}>
                <div className={style.list__wrapper}>
                    {
                        data ?
                            about ?
                                data.slice(0, 4).map((i, index) => (
                                    <div
                                        style={
                                            index === activeTextIndex
                                                ? { opacity: "1" }
                                                : { opacity: "0.5" }}
                                        onClick={() => setActiveTextIndex(index)}
                                        key={index}
                                    >
                                        {i.name} <div className={style.case__list__line}></div>
                                    </div>
                                ))
                                :
                                data.map((i, index) => (
                                    <div
                                        style={
                                            index === activeTextIndex
                                                ? { opacity: "1" }
                                                : { opacity: "0.5" }}
                                        onClick={() => setActiveTextIndex(index)}
                                        key={index}
                                        className={style.list__works}
                                    >
                                        {i.name} <div className={style.case__list__line__case}></div>
                                    </div>
                                ))
                            :
                            <></>
                    }
                    {
                        about ? <p>{t("aboutWorks")}</p> : <></>
                    }
                </div>
                <div className={style.active__wrapper}>
                    {
                        data ?
                            <div className={style.active__img__wrapper}>
                                <img src={data[activeTextIndex].image} alt="" />
                                <div className={style.description}>
                                    <h3>{t("description")}</h3>
                                    <p>{data[activeTextIndex].description}</p>
                                </div>
                            </div>
                            :
                            <></>
                    }
                    <div className={style.btn__wrapper}>
                        {
                            about ?
                                <MainLink text={t("aboutTeam")} icon={medals} link={"#"} />
                                : <MainLink text={t("viewWork")} icon={scientist} link={"#"} />
                        }
                    </div>
                </div>
            </div>
            <div className={style.case__child__mobile}>
                <Swiper
                    slidesPerView={1.2}
                    spaceBetween={50}
                    cssMode={false}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Mousewheel, Keyboard]}
                    className="mySwiper"

                    onSlideChangeTransitionEnd={(e) => setRealIndex(e.realIndex)}
                >
                    {
                        about ?
                            data.slice(0, 4).map((c, inx) => (
                                <SwiperSlide key={c.id} style={{ transform: `${realIndex === 3 ? "translateX(-70px)" : "translateX(0px)"}` }} >
                                    <img src={c.image} alt="" />
                                    <p>{c.description}</p>
                                </SwiperSlide>
                            ))
                            :
                            data.map((c) => (
                                <SwiperSlide key={c.id}>
                                    <img src={c.image} alt="" />
                                    <p>{c.description}</p>
                                </SwiperSlide>
                            ))
                    }
                </Swiper>
                <div className={style.btn__wrapper}>
                    {
                        about ?
                            <MainLink text={t("aboutTeam")} icon={medals} link={"#"} />
                            : <MainLink text={t("viewWork")} icon={scientist} link={"#"} />
                    }
                </div>
            </div>
            <ScrollRoute routeName={idRoute} />
        </div >
    )
}

export default Case
