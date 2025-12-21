import '../assets/styles/main.scss'
import '../assets/styles/tech.scss'
import {useLanguage} from "../i18n/LanguageContext.jsx";

export default function Technologies () {
    const { t, lang } = useLanguage();


    return (
        <section id="tech" className='tech'>
            <h2>{t('tech.title')}</h2>
            <div className="container df fdc aic jcc g20">
                <div className="tech__group block">
                    <h3>{t('tech.frontend')}</h3>
                    <p>{t('tech.frontendList')}</p>
                </div>
                <div className="tech__group block">
                    <h3>{t('tech.backend')}</h3>
                    <p>{t('tech.backendList')}</p>
                </div>
                <div className="tech__group block">
                    <h3>{t('tech.tools')}</h3>
                    <p>{t('tech.toolsList')}</p>
                </div>
            </div>
        </section>
    )
}