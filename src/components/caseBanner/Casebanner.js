import React, { useEffect, useRef, useState } from 'react'
import styles from "./Casebanner.module.scss"
import { MainLink } from '../../utils/Components'
import suitecase from "../../essets/suitcase.svg"
import eyes from "../../assets/👀.svg"
import moldImg from "../../assets/mold.svg"
import taliaImg from "../../assets/TALIAorigin.svg"
import eurotruckImg from "../../assets/euro.svg"
import alastin from "../../assets/alastin.svg"
import blackImg from "../../assets/black.svg"
import beauty from "../../assets/beauty.svg"
import geeni from "../../assets/geeni.svg"
import ScrollRoute from '../../utils/scrollroute/Scrollroute'
import { gsap } from 'gsap';

function Casebanner() {
    const div1 = useRef(null);
    const div2 = useRef(null);
    const div3 = useRef(null);
    const div4 = useRef(null);
    const div5 = useRef(null);
    const div6 = useRef(null);
    const div7 = useRef(null);

    let screenSize = window.screen.width
    useEffect(() => {
        const el1 = div1.current;
        gsap.fromTo(el1, { translateX: "200px" }, { translateX: "0", transitionDelay: 0.1, opacity: 1 });

        const el2 = div2.current;
        gsap.fromTo(el2, { translateX: "200px" }, { translateX: "0", transitionDelay: 0.2, opacity: 1 });

        const el3 = div3.current;
        gsap.fromTo(el3, { translateX: "200px" }, { translateX: screenSize > 956 ? "0" : "-90px", transitionDelay: 0.3, opacity: 1 });

        const el4 = div4.current;
        gsap.fromTo(el4, { translateX: "200px" }, { translateX: screenSize > 956 ? "0" : "-90px", transitionDelay: 0.4, opacity: 1 });

        const el5 = div5.current;
        gsap.fromTo(el5, { translateX: "200px" }, { translateX: screenSize > 956 ? "0" : "-90px", transitionDelay: 0.5, opacity: 1 });

        const el6 = div6.current;
        gsap.fromTo(el6, { translateX: "200px" }, { translateX: "0", transitionDelay: 0.6, opacity: 1 });

        const el7 = div7.current;
        gsap.fromTo(el7, { translateX: "200px" }, { translateX: "0", transitionDelay: 0.7, opacity: 1 });
    }, []);
    // useEffect(() => {
    //     const screen = () => {

    //         if (screenSize < 956) {
    //             setscreenview("-90px")
    //         } else {
    //             setscreenview("200px")
    //         }
    //     }
    //     window.addEventListener("load", () => setTimeout(() => screen, 1000))
    // }, [])

    return (
        <div className={styles.casebanner} id='casebanner'>
            <div className={styles.casebanner_text}>
                <h1>Наш кейс</h1><img src={suitecase} alt="" />
            </div>
            <div className={styles.casebanner_cards}>
                <div className={styles.casebanner_cards_wrap}>
                    <div className={`${styles.casebanner_card}`} ref={div1} >
                        <img src={moldImg} alt="" />
                    </div>

                    <div className={`${styles.casebanner_card} talia`} ref={div2}>
                        <img src={taliaImg} alt="" />
                    </div>
                </div>
                <div className={styles.casebanner_cards_wrap}>
                    <div className={`${styles.casebanner_card}`} ref={div3}>
                        <img src={eurotruckImg} alt="" />
                    </div>
                    <div className={`${styles.casebanner_card}`} ref={div4}>
                        <img src={alastin} alt="" />
                    </div>
                    <div className={`${styles.casebanner_card}`} ref={div5}>
                        <img src={beauty} alt="" />
                    </div>
                </div>
                <div className={styles.casebanner_cards_wrap}>
                    <div className={`${styles.casebanner_card}`} ref={div6}>
                        <img src={blackImg} alt="" />
                    </div>
                    <div className={`${styles.casebanner_card}`} ref={div7}>
                        <img src={geeni} alt="" />
                    </div>
                </div>

            </div>
            <MainLink text={"Подробнее"} icon={eyes} link={"#"} />
            <ScrollRoute routeName={"casebanner"} />
        </div>
    )
}

export default Casebanner