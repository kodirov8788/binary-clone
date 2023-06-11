import React from 'react';
import './Accordion.scss'

const Accordion = ({ title, title_en, title_uz, content, content_uz, content_en, id, isActive, selectActive }) => {
const langContent = function(){
  if(localStorage.getItem("i18nextLng") === "UZ"){
    return content_uz
  }
  else if(localStorage.getItem("i18nextLng") === "EN"){
    return content_en
  }
  else{
    return content
  }
}
const langTitle = function(){
  if(localStorage.getItem("i18nextLng") === "UZ"){
    return title_uz
  }
  else if(localStorage.getItem("i18nextLng") === "EN"){
    return title_en
  }
  else{
    return title
  }
}
  return (
    <div className='accordion__item'>
      <div className='accordion__title' onClick={() => selectActive(id)}>
        <div>{langTitle()}</div>
        <div>{isActive === id ? '-' : '+'}</div>
      </div>
      <div className={`answer__wrapper ${isActive === id ? "open" : "close"}`}>
        <div className='answer'>{langContent()}</div>
      </div>
      <div className='line'></div>
    </div>
  );
};

export default Accordion;