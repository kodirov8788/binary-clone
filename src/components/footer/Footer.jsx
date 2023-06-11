import React, { useEffect, useState } from 'react';
import style from "./Footer.module.scss";
import office from "../../essets/🏢.webp";
import man from "../../essets/man.svg";
import stars from "../../essets/stars.svg";
import ScrollRoute from '../../utils/scrollroute/Scrollroute';
import { Container } from '../../utils/Components';
import { useLocation } from 'react-router-dom';
import Language from "../../utils/language/Language"
const Footer = () => {
  const [idRoute, setIdRoute] = useState("footer")
  let location = useLocation().pathname

  useEffect(() => {
    if (location === "/case") {
      setIdRoute("casefooter")
    } else if (location === "/service") {
      setIdRoute("servicefooter")
    } else {
      setIdRoute("footer")
    }
  }, [location])


  return (
    <div className={style.footer} id={idRoute}>
      <Container>
        <div className={style.footer__container}>
          <h1>Мы расположены <img src={office} alt="" /></h1>
          <div className={style.branches}>
            <div className={style.branches__name}>
              <ul>
                <li>
                  <h2>Офис</h2>
                  <p>Uzbekistan, Tashkent, Gulabad 13</p>
                </li>
                <li>
                  <h2>Телефон</h2>
                  <p>+998 99 978-75-25</p>
                </li>
                <li>
                  <h2>Соц. Сети</h2>
                  <p>Facebook Telegram
                    <br />
                    Instagram LinkedIn</p>
                </li>
                <li className={style.footer_language}>
                  <Language pos={"bottom"} />
                </li>

              </ul>
            </div>
            <div className={style.branches__location}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.0083286400622!2d69.2871754105118!3d41.35217269642482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8cacae23bd15%3A0x507f55c1eeefc123!2sLady%20D!5e0!3m2!1sru!2s!4v1682741009826!5m2!1sru!2s"

                className={style.branches_googlemap}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title='binary'></iframe>
            </div>
          </div>
        </div>
        <div className={style.footer__conclusion}>
          <span>Начните воплощать мечту</span> <img className={style.conclusion_starts} src={stars} alt="" />
          <br />
          <span>в реальность</span> <img className={style.conclusion_man} src={man} alt="" /> <span>в
            месте с нами</span>
        </div>
        <ScrollRoute routeName={idRoute} />
      </Container>

    </div>
  )
}

export default Footer