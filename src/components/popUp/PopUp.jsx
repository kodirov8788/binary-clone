import React, { useState } from 'react';
import style from "./PopUp.module.scss"
import messageBox from "../../essets/messageBox.svg"
import { CustomRadio, MainInput, MainLink } from '../../utils/Components';
import xIcon from "../../essets/xButton.svg"
import { useTranslation } from 'react-i18next';
import Axios from "../../api/api"
const PopUp = () => {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: 0,
    info: ""
  })
  window.addEventListener('load', () => {
    setTimeout(() => {
      setShow(true)
    }, 2000);
  });


  const hidePopupWindow = () => {
    setShow(!show);
  };


  const formAction = async (e) => {
    e.preventDefault()
    let name = e.target[0]?.value
    let email = e.target[1]?.value
    let number = e.target[2]?.value
    let info = e.target[3]?.value

    await Axios.post("/submitform", {
      name,
      email,
      number: Number(number),
      info: info
    })
      .then(res => console.log("jonadi", res))
      .catch((err) => console.log("xato", err))
    setShow(false);
  }
  return (show ?
    <div className={style.popUpLayer} >
      <div className={style.popUpHideLayer} onClick={hidePopupWindow}></div>
      <div className={style.popUp} id='popUp'>
        <div className={style.popUp__left}>
          <div className={style.text}><span>{t("decision")}</span> <span>{t("desicionText")}</span> <h2>{t("answer")}</h2></div>
          <form action="#" onSubmit={formAction}>
            <div className={style.formNameTaker}><MainInput required type={"text"} placeholder={t("name")} />
              <MainInput type={"email"} placeholder={"example@gmail.com"} />
              <div className={style.numberCode}> <h3 >+998</h3><input maxLength={9} required className={style.numberInput} onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }} />
              </div>
              <textarea placeholder={t("industry")} maxCols={5}></textarea>
            </div>
            <button>send</button>
          </form>
        </div>
        <div className={style.popUp__right}>
          <img className={style.xIcon} src={xIcon} alt="icon" onClick={hidePopupWindow} />
          <div className={style.buttonElement} ><MainLink text={t("send")} icon={messageBox} link="#" /></div>
        </div>

      </div>

    </div > : <></>
  )
}

export default PopUp