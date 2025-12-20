import '../assets/styles/header.scss'
import '../assets/styles/main.scss'
import Logotype from '../assets/media/icons/logo_xp.jpeg'
import SunIcon from '../assets/media/icons/sun.svg'
import LuneIcon from '../assets/media/icons/lune.svg'
import MenuIcon from '../assets/media/icons/menu.svg'
import {useState} from "react";

export default function Header () {
    const [isShow, setIsShow] = useState(false)
    function handleShow () {
        setIsShow(r => !r)
    }
    return (
        <header className="header">
            <div className="container df jcsb aic">
                <a className="header__logotype df aic g10" href="./index.html">
                    <img className="header__logo" src={Logotype} alt="A&S"/>
                    <h2 className="header__title">A&S</h2>
                </a>
                <nav className="header__nav">
                    <ul className="header__list df aic g20">
                        <li className="header__item"><a href="#main" className="header__link link">Привет</a></li>
                        <li className="header__item"><a href="#about" className="header__link link">Обо мне</a></li>
                        <li className="header__item"><a href="#services" className="header__link link">Услуги</a></li>
                        <li className="header__item"><a href="#tech" className="header__link link">Технологии</a></li>
                        <li className="header__item"><a href="#portfolio" className="header__link link">Портфолио</a></li>
                        <li className="header__item"><a href="#contacts" className="header__link link">Контакты</a></li>
                    </ul>
                </nav>
                <div className="header__control df aic g20">
                    {/*<button className="header__themeToggle">*/}
                    {/*    <img className="header__icon" src={SunIcon} alt="Светлая тема"/>*/}
                    {/*</button>*/}
                    <button className="header__menu" onClick={handleShow}>
                        <img src={MenuIcon} alt="Кнопка меню" className="header__icon"/>
                    </button>
                    <select className="header__selectLang" name="select">
                        <option className="header__optionLang" value="russian" selected>RU</option>
                        <option className="header__optionLang" value="english">EN</option>
                    </select>
                </div>
            </div>
        </header>
    )
}
