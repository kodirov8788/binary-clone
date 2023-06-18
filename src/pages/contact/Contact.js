import React from 'react'
import Contactbanner from '../../components/contactBanner/Contactbanner'
import Contactdetails from '../../components/contactDetails/Contactdetails'
import Footer from '../../components/footer/Footer'

function Contact() {
    return (
        <div>
            <Contactbanner />
            <Contactdetails />
            <Footer />
        </div>
    )
}

export default Contact