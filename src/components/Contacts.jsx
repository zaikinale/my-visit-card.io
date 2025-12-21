import '../assets/styles/main.scss'
import '../assets/styles/contacts.scss'
import {useLanguage} from "../i18n/LanguageContext.jsx";

export default function Contacts() {
    const { t, lang } = useLanguage();
    return (
        <section id="contacts" className="contacts">
            <h2 className="contacts__title">{t('contacts.title')}</h2>
            <div className="container df jcc g20 fwwr">
                <div className="contacts__content  df fdc ais g20 block">
                    <p className="contacts__subtitle">{t('contacts.subtitle')}</p>
                    <div className="contacts__links df fdc ais g10">
                        {/*<a href="https://t.me/A7S_list" target="_blank" className="conctacts__link">Telegram ↗</a>*/}
                        <a href="mailto:zaikinaleks04@mail.ru" className="conctacts__link link">{t('contacts.email')}</a>
                        <a href="https://github.com/zaikinale" target="_blank" className="conctacts__link link">{t('contacts.github')}</a>
                    </div>
                    <p className="contacts__note">{t('contacts.note')}</p>
                </div>
                <a className="contacts__link--qr" href="https://t.me/A7S_list" target="_blank">
                    <img className="contacts__qr"
                    src="http://qrcoder.ru/code/?http%3A%2F%2Ft.me%2FA7S_list&4&0"
                    title="QR код"/>
                    {t('contacts.telegramLink')}
                </a>
            </div>
        </section>
    )
}