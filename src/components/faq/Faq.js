import React, { useState, useEffect } from 'react';
import style from "./Faq.module.scss";
import Accordion from './accordion/Accordion';
import accordionData from './accordion/AccordionData.json';
import message from '../../essets/message.svg'
import finger from '../../essets/finger.svg'
import ScrollRoute from '../../utils/scrollroute/Scrollroute';
import { useLocation } from 'react-router-dom';
import { MainLink } from '../../utils/Components';
import { useTranslation } from 'react-i18next';

function Faq({ dark }) {
    const { t } = useTranslation();
    const [idRoute, setIdRoute] = useState("faq")
    let location = useLocation().pathname
    const [isActive, setIsActive] = useState(0)

    useEffect(() => {
        if (location === "/case") {
            setIdRoute("casefaq")
        } else if (location === "/service") {
            setIdRoute("servicefaq")
        } else {
            setIdRoute("faq")
        }
    }, [location])
    const selectActive = (id) => {
        if (isActive === id) {
            setIsActive(0)
        }
        else {
            setIsActive(id)
        }
    }

    return (
        <div className={`${dark ? style.faq__dark : style.faq__light}`} id={idRoute}>
            <div className={style.faq}>
                <div className={style.faq__child}>
                    <h2>{t("faqTitle")} <u>{t("faqTitle1")}</u> <img src={finger} alt='finger' /> {t("faqTitle2")}</h2>
                    <div className={style.accordion}>
                        {accordionData.map(({ title, title_en, title_uz, content, content_en, content_uz, id }) => (
                            <Accordion title={title} title_en={title_en} title_uz={title_uz} id={id} isActive={isActive} selectActive={selectActive} content={content} content_en={content_en} content_uz={content_uz} key={id} />
                        ))}
                    </div>
                </div>
                <div className={style.faq__btn__wrapper}>
                    {dark ? <MainLink text={t("faqBtn")} icon={message} /> : <MainLink text={t("caseFaqBtn")} />}
                </div>
                <ScrollRoute routeName={idRoute} />
            </div>
        </div>
    );
}
export default Faq;