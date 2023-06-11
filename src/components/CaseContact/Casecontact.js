import React from 'react'
import style from "./Casecontact.module.scss"
import ScrollRoute from '../../utils/scrollroute/Scrollroute'

function Casecontact() {
    return (
        <div className={style.casecontact} id='casecontact'>Casecontact

            <ScrollRoute routeName={"casecontact"} />
        </div>
    )
}

export default Casecontact