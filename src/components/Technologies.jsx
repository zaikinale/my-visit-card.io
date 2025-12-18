import '../assets/styles/main.scss'
import '../assets/styles/tech.scss'

export default function Technologies () {
    return (
        <section id="tech" className='tech'>
            <h2>Технологии</h2>
            <div className="container df fdc aic jcc g20">
                <div className="tech__group block">
                    <h3>Frontend</h3>
                    <p>React • TypeScript • Redux • Zustand • SCSS (БЭМ) • CSS Modules • Vite</p>
                </div>
                <div className="tech__group block">
                    <h3>Backend</h3>
                    <p>Node.js • Express.js • REST API • PostgreSQL</p>
                </div>
                <div className="tech__group block">
                    <h3>Инструменты</h3>
                    <p>Git • GitHub • Figma • Pixso • Adobe Photoshop • Adobe XD • Vercel</p>
                </div>
            </div>
        </section>
    )
}