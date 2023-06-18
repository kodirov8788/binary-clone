import { useEffect, useState } from "react";
import style from "./Language.module.scss"
import uzb from "../../assets/uzb-flag.png"
import usa from "../../assets/usa-flag.png"
import russia from "../../assets/russia-flaf.png"
import { useTranslation } from "react-i18next";
const Language = () => {
    const data = [{ id: 0, label: "UZ", flag: uzb }, { id: 1, label: "RU", flag: russia }, { id: 2, label: "EN", flag: usa }];
    const [isOpen, setOpen] = useState(false);
    const { i18n } = useTranslation();
    const [selectedItem, setSelectedItem] = useState({ id: 0, label: "UZ", flag: uzb });
    // console.log(selectedItem)
    const toggleDropdown = () => setOpen(!isOpen);
    const handleItemClick = (lang) => {
        setSelectedItem(lang)
        changeLanguage(lang)
        toggleDropdown()
    }
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng.label);
    };


    useEffect(() => {
        const getLang = () => {
            let lg = window.localStorage.getItem("i18nextLng")
            if (selectedItem.label.toLowerCase().slice(0, 2) !== lg) {
                let lan = data.find(li => li.label.toLowerCase() === lg.slice(0, 2).toLowerCase())
                setSelectedItem(lan)
            }
        }
        return () => {
            getLang()
        }
    }, [])


    return (
        <div className={style.dropdown}>
            <div className={style.dropdown_header} onClick={toggleDropdown}>
                <img src={selectedItem.flag} alt="" className={style.dropdown_img} />
                <h1>{selectedItem.label}</h1>

            </div>
            <div className={`${style.dropdown_body} ${isOpen && style.open}`}>
                {data.map(item => (
                    <div className={style.dropdown_item} key={item.id} style={selectedItem.id === item.id ? { display: "none " } : { display: "flex" }} onClick={e => handleItemClick(item)} id={item.id} >
                        <img src={item.flag} className={style.dropdown_img} alt="" />
                        <span>{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Language