import React from 'react'
// import style from "./Singlepage.module.scss"
import { useLocation } from 'react-router-dom'
function Singlepage() {
    const image = useLocation().state
    console.log(image)
    return (
        <div>
            <h1>Hello single page</h1>
            {/* <img src={image} alt="" /> */}

        </div>
    )
}

export default Singlepage