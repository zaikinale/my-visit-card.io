import '../assets/styles/main.scss'
import '../assets/styles/contacts.scss'

export default function Contacts() {
    return (
        <section id="contacts" className="contacts">
            <h2 className="contacts__title">Готов обсудить ваш проект?</h2>
            <div className="container df jcc g20 fwwr">
                <div className="contacts__content  df fdc ais g20 block">
                    <p className="contacts__subtitle">Напишите мне - отвечу в течение дня, дам честную оценку сроков и
                        бюджета.</p>
                    <div className="contacts__links df fdc ais g10">
                        {/*<a href="https://t.me/A7S_list" target="_blank" className="conctacts__link">Telegram ↗</a>*/}
                        <a href="mailto:zaikinaleks04@mail.ru" className="conctacts__link link">Email ↗</a>
                        <a href="https://github.com/zaikinale" target="_blank" className="conctacts__link link">GitHub ↗</a>
                    </div>
                    <p className="contacts__note">Готов взять первый коммерческий заказ по лояльной цене - в обмен на отзыв и кейс.</p>
                </div>
                <a className="contacts__link--qr" href="https://t.me/A7S_list" target="_blank">
                    <img className="contacts__qr"
                    src="http://qrcoder.ru/code/?http%3A%2F%2Ft.me%2FA7S_list&4&0"
                    title="QR код"/>
                    Cсылка на Telegram ↗
                </a>
            </div>
        </section>
    )
}