import React, { useEffect, useRef, useState } from 'react'
import style from "./Team.module.scss"
import ScrollRoute from '../../utils/scrollroute/Scrollroute'
import dev_icon from "../../assets/🧑_💻.svg"
import artist from "../../assets/🧑_🎨.svg"
import book_icon from "../../assets/📕📈📃.svg"
import avexdesign from "../../assets/avexdesign.svg"
import najottalin from "../../assets/najot-talim.svg"
import binary from "../../assets/binary.svg"
import king from "../../assets/👑.svg"
import avextext from "../../assets/AVEX.svg"
import najot_talim_black from "../../assets/najottalim_black.svg"
import { team_data } from './static'
import { Container, MainLink } from '../../utils/Components'
import { Link } from 'react-router-dom'
import email from "./img/main-black.png"
import phone from "./img/phone-black.png"
import telegram from "./img/telegram-black.png"
import linkedinblack from "./img/linkedin-black.png"
import finger from "./img/finger.png"
import fingerclick from "./img/finger-click.png"

function Team() {
    const [selectedData, setSelectedData] = useState(team_data[0])
    const [icon, setIcon] = useState(false)
    const selectDev = (id) => {
        const selected = team_data.find(item => item.id === id)
        setSelectedData(selected)
    }

    const boxRef = useRef(0);
    const childRef = useRef([]);
    useEffect(() => {
        const handleScroll = () => {
            if (boxRef?.current && childRef?.current) {
                const boxTop = boxRef.current.getBoundingClientRect().top;
                const boxBottom = boxRef.current.getBoundingClientRect().bottom;
                const topThreshold = 40;
                const bottomThreshold = 250;
                let first_child = childRef.current[0]?.getBoundingClientRect()?.top - boxTop
                let last_child = childRef.current[childRef.current.length - 1]?.getBoundingClientRect()?.top - boxBottom
                childRef.current?.forEach((child) => {
                    const childTop = child?.getBoundingClientRect()?.top - boxTop;
                    const childBottom = child?.getBoundingClientRect()?.bottom - boxTop;
                    if (child && child.style) {
                        if (childTop >= topThreshold && childBottom <= boxBottom - bottomThreshold) {
                            child.style.width = "90%";
                            child.style.opacity = 1;
                        } else {
                            child.style.width = "70%";
                            child.style.opacity = 0.5;
                        }
                    }
                });
                if (first_child > 8) {
                    childRef.current[0].style.width = "90%"
                    childRef.current[0].style.opacity = 1;
                }
                if (last_child < -120) {
                    childRef.current[0].style.width = "90%"
                    childRef.current[0].style.opacity = 1;
                }

            }
        };

        if (boxRef?.current) {
            boxRef.current.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (boxRef.current) {
                boxRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    useEffect(() => {
        if (icon) {
            setTimeout(() => {
                setIcon(false)
            }, 1000);
        } else {
            setTimeout(() => {
                setIcon(true)
            }, 1000);
        }
    }, [icon])



    return (
        <div className={style.team} id='team'>
            <Container>
                <div className={style.team_container}>
                    <div className={style.team_left}>
                        <div className={style.team_dev}>
                            <img src={selectedData.avatar} alt="" className={style.team_dev_img} />
                            <div className={style.team_dev_name}>
                                <h1>{selectedData.name}</h1>
                                <span>{selectedData.role} ({selectedData.exprience} y.)</span>
                            </div>
                            <img src={dev_icon} alt="" className={style.team_dev_icons} />
                        </div>

                        <p className={style.dev_text}>
                            {selectedData.desc}</p>

                        <div className={style.team_left_devs}>

                            {team_data.map(data => (
                                <div className={`${style.team_dev_avatar} ${data.id === selectedData.id ? style.devs_selected : ""}`}

                                    onClick={() => selectDev(data.id)} key={data.id}>
                                    <div className={style.team_dev_tooltip}>
                                        <div className={style.team_dev_tooltip_text}>
                                            <h1>{data.name?.split(" ")[0]}</h1>
                                            <p>{data.role}</p>
                                        </div>
                                        <img src={artist} alt="" />
                                    </div>
                                    <img className={style.team_dev_tooltip_avatar} src={data.avatar} alt="" />
                                </div>
                            ))}
                        </div>

                    </div>

                    <div className={style.team_right}>

                        <img className={style.team_right_img} src={selectedData.image} alt="" />
                        <h1 className={style.team_right_text} >Contact me</h1>

                        <div className={style.team_right_contact}>
                            <li>
                                <Link to={"#"}>
                                    <img src={linkedinblack} alt="" />
                                </Link>
                            </li>
                            <li>
                                <Link to={"#"}>
                                    <img src={email} alt="" />
                                </Link>
                            </li>
                            <li>
                                <Link to={"#"}>
                                    <img src={phone} alt="" />
                                </Link>
                            </li>
                            <li>
                                <Link to={"#"}>
                                    <img src={telegram} alt="" />
                                </Link>
                            </li>
                        </div>


                    </div>

                    <div className={style.team_media_container}>
                        <h1>Лучшая команда🎖️
                            <br />
                            с лучшими опытами 🎯
                            <br />
                            в лучших компаниях🏙️</h1>
                        <div className={style.team_media_collection} ref={boxRef}>
                            {team_data.map((child, index) => (

                                <div
                                    className={`${style.team_media_items}`}
                                    key={index}
                                    ref={(el) => childRef.current.push(el)}
                                >
                                    <img src={child.image} alt="" />
                                    <div className={style.team_media_text}>
                                        <h1>{selectedData.name}</h1>
                                        <h3>{selectedData.role}</h3>
                                    </div>
                                    <Link to={"#"} className={style.team_media_click}>
                                        <img src={icon ? finger : fingerclick} alt="" />
                                        <p>more</p>
                                    </Link>
                                </div>
                            ))}

                        </div>
                        <div className={style.team_btnWrap}>
                            <MainLink text={"Ваша выгода"} icon={book_icon} link={"#"} />
                        </div>
                    </div>


                </div>
                <div className={style.team_footer}>
                    <div className={style.team_btnWrap}>
                        <MainLink text={"Ваша выгода"} icon={book_icon} link={"#"} />
                    </div>
                    <p className={style.team_footer_text}>Наша лучшая сторона – показать реальные результаты.
                        Посмотрите ваши выгоды при выборе нас</p>
                </div>
            </Container>
            <ScrollRoute routeName={"team"} />

        </div>
    )
}

export default Team