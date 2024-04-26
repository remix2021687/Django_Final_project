import { motion } from "framer-motion"
import { useState } from "react"
import { Registration, Authorization } from "../../../../../Axios/AxiosInit"

export const Register = ({UpadteState}) => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '', 
        username: '',
        email: '',
        password: '',
        password2: ''
    })

    const [formError, setFormError] = useState({
        first_name: '',
        last_name: '', 
        username: '',
        email: '',
        password: '',
        password2: ''
    })

    const ControlInput = (event) => {
        setFormData((data) => ({
            ...data,
            [event.target.name]: event.target.value
        }))
    }

    const onSubmit = async (event) => {
        event.preventDefault();

        await Registration({
            first_name: formData.first_name,
            last_name: formData.last_name,
            username: formData.username,
            email: formData.email,
            password: formData.password,
            password2: formData.password2
        })

        .then((res) => {
            setTimeout(() => {
                Authorization({
                    username: formData.username,
                    password: formData.password
                })
                .then((res) => {
                    localStorage.setItem('token', `Bearer ${res.data.access}`)

                    UpadteState(false)

                    setTimeout(() => {
                        location.reload()
                    }, 800)
                })
            }, 500)
        })

        .catch((err) => {
            const ErrorContext = err.response.data;

            setFormError({
                username: ErrorContext.username ? ErrorContext.username[0]: '',
                email: ErrorContext.email ? ErrorContext.email[0]: ''
            })
        })
    }

    return (
        <form className="Register" onSubmit={onSubmit}>
            <section className="Register_last_first_name">
                <input type="text" placeholder="Имя" name="first_name" onChange={ControlInput} />
                <input type="text" placeholder="Фамилия" name="last_name" onChange={ControlInput} />
            </section>
            <input type="text" placeholder="Имя пользователя" name="username" onChange={ControlInput} />
            <input type="email" placeholder="Электронная почта" name="email" onChange={ControlInput} />
            <input type="password" placeholder="Пароль" name="password" onChange={ControlInput} />
            <input type="password" placeholder="Повторить пароль" name="password2" onChange={ControlInput} />

            <motion.button whileHover={{scale: 1.05}} type='submit'>Зарегестрироватся</motion.button>
        </form>
    )
}