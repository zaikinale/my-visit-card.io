import '../assets/styles/main.scss'
import '../assets/styles/portfolio.scss'

export default function Portfolio() {
    return (
        <section id="portfolio" className="portfolio">
            <h2 className="portfolio__title">Мои проекты</h2>
            <div className="container df fdc aic g20">
                <a href="https://github.com/zaikinale/shop-react_with_backend.io" target="_blank"
                   className="portfolio__card df fdc aic block">
                    <img className="portfolio__img" src="https://via.placeholder.com/600x300/667eea/ffffff?text=Интернет-магазин"
                         alt="Интернет-магазин"/>
                    <div className="portfolio__info">
                        <h3>Интернет-магазин с бэкендом</h3>
                        <p>Полноценный e-commerce сайт: каталог, карточки товара, отзывы, авторизация.<br/> Frontend - React + TypeScript, бэкенд - Node.js + PostgreSQL.</p>
                    </div>
                </a>

                <a href="https://github.com/zaikinale/loyalty-telegram-app" target="_blank" className="portfolio__card df fdc aic block">
                    <img className="portfolio__img" src="https://via.placeholder.com/600x300/764ba2/ffffff?text=Система+лояльности"
                         alt="Система лояльности"/>
                    <div className="portfolio__info">
                        <h3>Система лояльности для кофеен</h3>
                        <p>Веб-интерфейс админки для Telegram-бота: управление клиентами, бонусами, уведомлениями.<br/>Реализовано с использованием React, SCSS (БЭМ), REST API.</p>
                    </div>
                </a>

                <a href="https://github.com/zaikinale/task-manager-react" target="_blank" className="portfolio__card df fdc aic block">
                    <img className="portfolio__img" src="https://via.placeholder.com/600x300/4b6cb7/ffffff?text=Менеджер+задач"
                         alt="Менеджер задач"/>
                    <div className="portfolio__info">
                        <h3>Task Manager</h3>
                        <p>Приложение для учёта задач с поддержкой статусов и дедлайнов.<br/> Использованы React, Zustand для состояния, localStorage для хранения данных.</p>
                    </div>
                </a>

                <a href="https://github.com/zaikinale" target="_blank" className="portfolio__card df fdc aic block">
                    <img className="portfolio__img" src="https://via.placeholder.com/600x300/4b6cb7/ffffff?text=Менеджер+задач"
                         alt="Классные проекты"/>
                    <div className="portfolio__info">
                        <h3>Другие классные проекты у меня на GitHub ↗</h3>
                    </div>
                </a>
            </div>
        </section>
    )
}