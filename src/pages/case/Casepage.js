import React from 'react'
import styles from "./Casepage.module.scss"
import Casebanner from '../../components/caseBanner/Casebanner'
import Casecollection from '../../components/caseCollection/Casecollection'
// import Caseselection from '../../components/caseSelection/Caseselection'
// import Casefaq from '../../components/caseFaq/Casefaq'
// import Casecontact from '../../components/CaseContact/Casecontact'
import Footer from '../../components/footer/Footer'
import Faq from '../../components/faq/Faq'
import Case from '../../components/case/Case'

function Casepage() {
    return (
        <div style={styles}>
            <Casebanner />
            <Casecollection />
            {/* <Caseselection /> */}
            <Case />
            {/* <Casefaq /> */}
            <Faq />
            {/* <Casecontact /> */}
            <Footer />
        </div>
    )
}

export default Casepage