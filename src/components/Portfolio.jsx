import '../assets/styles/main.scss'
import '../assets/styles/portfolio.scss'
import {useLanguage} from "../i18n/LanguageContext.jsx";

export default function Portfolio() {
    const { t, lang } = useLanguage();
    return (
        <section id="portfolio" className="portfolio">
            <h2 className="portfolio__title">{t('portfolio.title')}</h2>
            <div className="container df fdc aic g20">
                <a href="https://github.com/zaikinale/shop-react_with_backend.io" target="_blank"
                   className="portfolio__card df fdc aic block">
                    <img className="portfolio__img" src="https://via.placeholder.com/600x300/667eea/ffffff?text=Интернет-магазин"
                         alt={t('portfolio.projects.shop.title')}/>
                    <div className="portfolio__info">
                        <h2>{t('portfolio.projects.shop.title')}</h2>
                        <h4>{t('portfolio.projects.shop.subtitle')}</h4>
                        <p>{t('portfolio.projects.shop.description')}</p>
                        <p>{t('portfolio.projects.shop.tech')}</p>
                    </div>
                </a>

                <a href="https://github.com/zaikinale/loyalty-telegram-app" target="_blank" className="portfolio__card df fdc aic block">
                    <img className="portfolio__img" src="https://via.placeholder.com/600x300/764ba2/ffffff?text=Система+лояльности"
                         alt={t('portfolio.projects.loyalty.title')}/>
                    <div className="portfolio__info">
                        <h2>{t('portfolio.projects.loyalty.title')}</h2>
                        <h4>{t('portfolio.projects.loyalty.subtitle')}</h4>
                        <p>{t('portfolio.projects.loyalty.description')}</p>
                        <p>{t('portfolio.projects.loyalty.tech')}</p>
                    </div>
                </a>

                <a href="https://github.com/zaikinale/task-manager-react" target="_blank" className="portfolio__card df fdc aic block">
                    <img className="portfolio__img" src="https://via.placeholder.com/600x300/4b6cb7/ffffff?text=Менеджер+задач"
                         alt={t('portfolio.projects.tasks.title')}/>
                    <div className="portfolio__info">
                        <h2>{t('portfolio.projects.tasks.title')}</h2>
                        <h4>{t('portfolio.projects.tasks.subtitle')}</h4>
                        <p>{t('portfolio.projects.tasks.description')}</p>
                        <p>{t('portfolio.projects.tasks.tech')}</p>
                    </div>
                </a>

                <a href="https://github.com/zaikinale" target="_blank" className="portfolio__card df fdc aic block">
                    <img className="portfolio__img" src="https://via.placeholder.com/600x300/4b6cb7/ffffff?text=Менеджер+задач"
                         alt={t('portfolio.more.title')}/>
                    <div className="portfolio__info">
                        <h3 className='link'>{t('portfolio.more.subtitle')}</h3>
                    </div>
                </a>
            </div>
        </section>
    )
}