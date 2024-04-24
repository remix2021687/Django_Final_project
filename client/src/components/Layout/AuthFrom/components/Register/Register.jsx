import { motion } from "framer-motion"

export const Register = () => {
    return (
        <form className="Register">
            <section className="Register_last_first_name">
                <input type="text" placeholder="Имя" name="first_name" />
                <input type="text" placeholder="Фамилия" name="last_name" />
            </section>
            <input type="text" placeholder="Имя пользователя" name="username" />
            <input type="email" placeholder="Электронная почта" />
            <input type="password" placeholder="Пароль" name="password" />
            <input type="password" placeholder="Повторить пароль" name="password2" />

            <motion.button whileHover={{scale: 1.05}} type='submit'>Зарегестрироватся</motion.button>
        </form>
    )
}