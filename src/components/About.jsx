import '../assets/styles/main.scss'
import '../assets/styles/about.scss'
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function About() {
    const { t, lang } = useLanguage();
    const points = t('about.points');
    const pointsList = Array.isArray(points) ? points : [];

    return (
        <section id="about" className="about">
            <h2 className="about__title">{t('about.title')}</h2>
            <div className="container df fdc ais g10">
                <p className="about__subtitle">{t('about.intro')}</p>
                <p className="about__text">{t('about.standards')}</p>
                <ul className="about__list">
                    {pointsList.map((point, index) => (
                        <li key={index} className="about__item">
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}