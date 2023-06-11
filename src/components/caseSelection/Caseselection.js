import React from 'react'
import style from "./Caseselection.module.scss"
import ScrollRoute from '../../utils/scrollroute/Scrollroute';
import Case from '../case/Case';

function Caseselection() {
    return (
        <div className={style.caseselection} id='caseselection'>
            <Case />
        </div>
    )
}

export default Caseselection