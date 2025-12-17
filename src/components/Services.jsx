import '../assets/styles/main.scss'
import '../assets/styles/services.scss'

export default function Services() {
    return (
        <section id="services" className="services">
            <h2 className="services__title">Что я предлагаю</h2>
            <div className="container">
                <ul className="services__list df fww g20 aic jcc">
                    <li className="services__item block">Разработка лендингов и сайтов «под ключ»</li>
                    <li className="services__item block">Создание панелей и интерфейсов с авторизацией</li>
                    <li className="services__item block">Адаптивная и семантическая вёрстка по макету</li>
                    <li className="services__item block">Интеграция с бэкендом</li>
                    <li className="services__item block">Деплой на Vercel и базовая настройка CI/CD</li>
                    <li className="services__item block">Поддержка и доработка существующих проектов</li>
                </ul>
            </div>
        </section>
    )
}