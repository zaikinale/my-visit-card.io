import '../assets/styles/main.scss'
import '../assets/styles/hero.scss'
import MyImg from '../../public/me.jpeg'


export default  function Hero() {
    return (
        <main className="hero">
            <h2 className="hero__title"></h2>
            <div className="container df aci jcse g20">
                <img src={MyImg} alt="Фото начинающего разработчика Заикина Алексея Сергеевича" className="hero__img"/>
                <div className="hero__content df fdc g10 block">
                    <h2 className="hero__subtitle">Заикин Алексей Сергеевич <br/> <strong>Frontend-разработчик из Санкт-Петербурга</strong></h2>

                    <p className="hero__text">Делаю быстрые, адаптивные и легко поддерживаемые сайты на React + TypeScript</p>
                    <a href="https://t.me/A7S_list" className="hero__btn link">Написать в Telegram ↗</a>
                </div>
            </div>
        </main>
    )
}