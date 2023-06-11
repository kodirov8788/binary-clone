import React from 'react'
import { Link } from "react-router-dom"
import style from "./Components.module.scss"

const MainLink = ({ text, icon, link }) => {
  return (
    <Link className="btns" to={link}>
      <span>{text}</span>
    {icon ?  <img src={icon} alt='iconic svg'/> : <></>}
    </Link>
  )
}
const Container = ({ children }) => {
  return <div className={style.container}>{children}</div>
}

const MainInput = ({ type, placeholder, value, setValue, length }) => {
  return (
    <input className={style.mainInput} type={type} placeholder={placeholder} value={value}
      onChange={setValue} maxLength={length} />
  )
}
const CustomRadio = ({ id, name }) => {
  return (
    <input className={style.customRadio} type="radio" id={id} name={name} />
  )
}

export { MainLink, MainInput, CustomRadio, Container }; 