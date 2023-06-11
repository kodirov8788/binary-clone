import React from 'react'
import style from "./Service.module.scss"
import Servicebanner from '../../components/serviceBanner/Servicebanner'
import Serviceworks from '../../components/serviceWorks/Serviceworks'
import Faq from '../../components/faq/Faq'
import Footer from '../../components/footer/Footer'
import Case from '../../components/case/Case'

function Service() {
    return (
        <div className={style.service}>
            <Servicebanner />
            <Serviceworks />
            <Case />
            <Faq />
            <Footer />
        </div>
    )
}

export default Service