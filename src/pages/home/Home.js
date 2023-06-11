import React from 'react'
import styles from "./Home.module.scss";
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Banner from '../../components/banner/Banner';
import Video from '../../components/video/Video';
import Case from '../../components/case/Case';
import Team from '../../components/team/Team';
import Faq from '../../components/faq/Faq';
import PopUp from '../../components/popUp/PopUp';

function Home() {
    return (
        <div style={styles}>
            <Banner />
            <Video />
            <Case about={true} />
            <Team />
            <Faq dark={true} />
            <Footer />
            <PopUp />
        </div>
    )
}

export default Home