import '../assets/styles/main.scss'
import '../assets/styles/about.scss'

export default function About() {
    return (
        <section id="about" className="about">
            <h2 className="about__title">Обо мне</h2>
            <div className="container df fdc ais g10">
                <p className="about__subtitle">Привет! Мне 21 год, и я создаю веб-интерфейсы, в которые приятно заходить и легко поддерживать.</p>
                <p className="about__text">Хотя я начинающий разработчик, я с самого старта придерживаюсь промышленных стандартов:</p>
                <ul className="about__list">
                    <li className="about__item">Пишу <strong>семантическую HTML-вёрстку</strong> - для SEO и доступности</li>
                    <li className="about__item">Следую методологии <strong>БЭМ</strong> и использую <strong>SCSS</strong> для чистой архитектуры</li>
                    <li className="about__item">Делаю упор на <strong>UX, скорость и кросс-браузерность</strong></li>
                    <li className="about__item">Понимаю <strong>бизнес-цели</strong> - ваш сайт должен решать задачи, а не просто выглядеть</li>
                </ul>
            </div>
        </section>
    )
}