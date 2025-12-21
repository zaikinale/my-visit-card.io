import '../assets/styles/main.scss'
import '../assets/styles/services.scss'
import {useLanguage} from "../i18n/LanguageContext.jsx";

export default function Services() {
    const { t, lang } = useLanguage();

    const items = t('services.items');
    const itemsList = Array.isArray(items) ? items : [];


    return (
        <section id="services" className="services">
            <h2 className="services__title">{t('services.title')}</h2>
            <div className="container">
                <ul className="services__list df fww g20 aic jcc">
                    {itemsList.map((item, index) => (
                        <li key={index} className="services__item block">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}