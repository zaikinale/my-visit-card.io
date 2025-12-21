// Header.jsx
import '../assets/styles/header.scss';
import '../assets/styles/main.scss';
import Logotype from '../assets/media/icons/logo_xp.jpeg';
import SunIcon from '../assets/media/icons/sun.svg';
import LuneIcon from '../assets/media/icons/lune.svg';
import MenuIcon from '../assets/media/icons/menu.svg';
import { useState } from "react";
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Header() {
    const { t, lang, setLang } = useLanguage();
    const [isShow, setIsShow] = useState(false);
    function handleShow() {
        setIsShow(r => !r);
    }

    return (
        <header className="header">
            <div className="container df jcsb aic fww">
                <a className="header__logotype df aic g10" href="./index.html">
                    <img className="header__logo" src={Logotype} alt="A&S" />
                    <h2 className="header__title">A&S</h2>
                </a>

                <nav className="header__nav">
                    <ul className="header__list df aic g20 fww">
                        <li className="header__item"><a href="#main" className="header__link link">{t('nav.main')}</a></li>
                        <li className="header__item"><a href="#about" className="header__link link">{t('nav.about')}</a></li>
                        <li className="header__item"><a href="#services" className="header__link link">{t('nav.services')}</a></li>
                        <li className="header__item"><a href="#tech" className="header__link link">{t('nav.tech')}</a></li>
                        <li className="header__item"><a href="#portfolio" className="header__link link">{t('nav.portfolio')}</a></li>
                        <li className="header__item"><a href="#contacts" className="header__link link">{t('nav.contacts')}</a></li>
                    </ul>
                </nav>

                <div className="header__control df aic g20 fww">
                    <button className="header__btn" onClick={handleShow}>
                        {isShow ? `${t('spectialBtnAndImg.burgerUnAct')}` : <img src={MenuIcon} alt={t('spectialBtnAndImg.burgerAct')} className="header__icon" />}
                    </button>

                    {isShow && (
                        <ul className="header__menu fdc g20 fww block">
                            <li className="header__item"><a onClick={handleShow} href="#main" className="header__link link">{t('nav.main')}</a></li>
                            <li className="header__item"><a onClick={handleShow} href="#about" className="header__link link">{t('nav.about')}</a></li>
                            <li className="header__item"><a onClick={handleShow} href="#services" className="header__link link">{t('nav.services')}</a></li>
                            <li className="header__item"><a onClick={handleShow} href="#tech" className="header__link link">{t('nav.tech')}</a></li>
                            <li className="header__item"><a onClick={handleShow} href="#portfolio" className="header__link link">{t('nav.portfolio')}</a></li>
                            <li className="header__item"><a onClick={handleShow} href="#contacts" className="header__link link">{t('nav.contacts')}</a></li>
                        </ul>
                    )}
                    <select className="header__selectLang" value={lang} onChange={(e) => setLang(e.target.value)} name="select">
                        <option className="header__optionLang" value="ru">RU</option>
                        <option className="header__optionLang" value="en">EN</option>
                    </select>
                </div>
            </div>
        </header>
    );
}