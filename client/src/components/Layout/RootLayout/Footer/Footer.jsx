import { AssetsImage } from "../../../../../assets/assets"

export const Footer = () => {
    return (
        <section className="Footer">
            <img src={AssetsImage.BigLogo} alt='logo' />
            <section className="Footer_content">
                <ul>
                    <h2>Компания</h2>
                    <li>Главная</li>
                    <li>О нас</li>
                    <li>Туры</li>
                    <li>Ваучеры</li>
                </ul>
                <ul>
                    <h2>Контакты</h2>
                    <li>Помощь</li>
                    <li>FAQ</li>
                </ul>
                <ul>
                    <h2>Дополнительно</h2>
                    <li>Регистрация</li>
                    <li>Вход</li>
                </ul>
            </section>
            <img src={AssetsImage.birge} alt="brige" />
        </section>
    )
}