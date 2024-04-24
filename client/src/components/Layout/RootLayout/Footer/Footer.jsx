import { AssetsImage } from "../../../../../assets/assets"
import { NavLink } from 'react-router-dom'

export const Footer = () => {
    return (
        <section className="Footer">
            <img src={AssetsImage.BigLogo} alt='logo' />
            <section className="Footer_content">
                <ul>
                    <h2>Компания</h2>
                    <li><NavLink to={'/'}>Главная</NavLink></li>
                    <li><NavLink to={'/tours'}>Туры</NavLink></li>
                    <li><NavLink>О нас</NavLink></li>
                    <li><NavLink>Ваучеры</NavLink></li>
                </ul>
                <ul>
                    <h2>Контакты</h2>
                    <li><NavLink>Помощь</NavLink></li>
                    <li><NavLink>FAQ</NavLink></li>
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