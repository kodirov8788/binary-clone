import React, { useState } from 'react';
import style from "./PopUp.module.scss"
import hugging from "../../essets/hugging.svg"
import man from "../../essets/man.svg"
import stars from "../../essets/stars.svg"
import messageBox from "../../essets/messageBox.svg"
import { MainInput, CustomRadio, MainLink } from '../../utils/Components';
import xIcon from "../../essets/xButton.svg"

// Please use CSS module

const PopUp = () => {
  const [show, setShow] = useState(false);
  window.addEventListener('load', () => {
    setTimeout(() => {
      setShow(true)
    }, 2000);
  });


  const hidePopupWindow = () => {
    setShow(!show);
  };
  console.log(show)
  return (show ?
    <div className={style.popUpLayer} >
      <div className={style.popUpHideLayer} onClick={hidePopupWindow}></div>
      <div className={style.popUp} id='popUp'>
        <img src={xIcon} className={style.backButton} onClick={hidePopupWindow} alt='back button' />
        <h2 className={style.text}>Начните воплощать мечту <img src={stars} alt="emojies" />
          в реальность <img src={man} alt="" /> вместе с нами <img src={hugging} alt="" /></h2>
        <form action="#">
          <div className={style.formNameTaker}><MainInput required type={"text"} placeholder={"Ваше имя*"} />
            <MainInput type={"email"} placeholder={"example@gmail.com"} />
            <div className={style.numberCode}> <h3 >+998</h3><input maxLength={9} required className={style.numberInput} onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }} />
            </div>
          </div>
          <div className={style.radioTaker}>
            <textarea placeholder='Ваша отрасль' maxCols={5}></textarea>
            <div><CustomRadio id={"newProject"} name={"typeofwork"} className={style.radioButton} /> <label htmlFor="newProject">Новый продукт</label></div>
            <div><CustomRadio id={"redesign"} name={"typeofwork"} className={style.radioButton} /> <label htmlFor="redesign">Редизайн</label></div>
          </div>
        </form>
        <div className={style.buttonElement} ><MainLink text="Отправить" icon={messageBox} link="#" /></div>
      </div>
    </div> : <></>
  )
}

export default PopUp
