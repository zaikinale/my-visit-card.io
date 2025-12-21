import '../assets/styles/main.scss'
import '../assets/styles/hero.scss'
import MyImg from '../../public/me.jpeg'
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default  function Hero() {
    const { t, lang } = useLanguage();
    return (
        <main className="hero">
            <h2 className="hero__title"></h2>
            <div className="container df aci jcse g20 fww">
                <img src={MyImg} alt={t('hero.subtitle')} className="hero__img"/>
                <div className="hero__content df fdc g10 block">
                    <h2 className="hero__subtitle">{t('hero.title')}<br/><strong>{t('hero.subtitle')}</strong></h2>
                    <p className="hero__text">{t('hero.description')}</p>
                    <a href="https://t.me/A7S_list" className="hero__btn link">{t('hero.cta')}</a>
                </div>
            </div>
        </main>
    )
}