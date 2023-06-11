import React, { useEffect, useRef } from 'react'
import style from "./Mediasidebar.module.scss"
import iconx from "../../essets/xButton.svg"
import { useTranslation } from 'react-i18next'
import { gsap } from 'gsap'

function Mediasidebar({ setOpenCloseSidebar, openCloseSidebar }) {

    const { t } = useTranslation()
    const div1 = useRef(null);
    const div2 = useRef(null);
    const div3 = useRef(null);
    const div4 = useRef(null);
    const div5 = useRef(null);
    useEffect(() => {
        const el1 = div1.current;
        gsap.fromTo(el1, { translateX: "-2000px" }, { translateX: openCloseSidebar ? "0" : "-2000px", transitionDelay: 0.2, opacity: 1 });

        const el2 = div2.current;
        gsap.fromTo(el2, { translateX: "-2000px" }, { translateX: openCloseSidebar ? "0" : "-2000px", transitionDelay: 0.2, opacity: 1 });
        const el3 = div3.current;
        gsap.fromTo(el3, { translateX: "-2000px" }, { translateX: openCloseSidebar ? "0" : "-2000px", transitionDelay: 0.3, opacity: 1 });
        const el4 = div4.current;
        gsap.fromTo(el4, { translateX: "-2000px" }, { translateX: openCloseSidebar ? "0" : "-2000px", transitionDelay: 0.4, opacity: 1 });

        const el5 = div5.current;
        gsap.fromTo(el5, { translateX: "-2000px" }, { translateX: openCloseSidebar ? "0" : "-2000px", transitionDelay: 0.4, opacity: 1 });

    }, [openCloseSidebar]);
    return (
        <div className={style.mediasidebar} style={openCloseSidebar ? { transform: "translateX(0px)" } : { transform: "translateX(-2000px)" }}>

            <button ref={div1} onClick={() => setOpenCloseSidebar(false)}>
                <img src={iconx} alt="" /></button>
            <ul>
                <li ref={div2}>
                    <a href="#">{t("aboutus")}</a>
                </li>
                <li ref={div3}>
                    <a href="#">{t("case")}</a>
                </li>
                <li ref={div4}>
                    <a href="#">{t("service")}</a>
                </li>
                <li ref={div5}>
                    <a href="#">{t("contact")}</a>
                </li>
            </ul>
        </div>
    )
}

export default Mediasidebar