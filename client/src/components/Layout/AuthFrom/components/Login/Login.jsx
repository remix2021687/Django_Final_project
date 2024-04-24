import { PostLogin } from "../../../../../Axios/AxiosInit"
import { useState } from "react"

export const Login = ({UpadteState}) => {
    const [formData, setFormDate] = useState({
        username: '',
        password: ''
    })

    const [ErrorMsg, SetErrorMsg] = useState({
        username: '',
        password: ''
    })


    const ControlInput = (event) => {
        setFormDate((date) => ({
            ...date,
            [event.target.name]: event.target.value 
        }))
    }

    const LoginAuth = (event) => {
        event.preventDefault();
        PostLogin({
            username: formData.username,
            password: formData.password
        })
        .then((res) => {
            localStorage.setItem('token', `Bearer ${res.data.access}`)

            UpadteState(false)

            setTimeout(() => {
                location.reload();
            }, 1000)
        })

        .catch((err) => {
            const ErrorContext = err.response.data;

            SetErrorMsg({
                username: ErrorContext.username ? ErrorContext.username[0] : '',
                password: ErrorContext.password ? ErrorContext.password[0] : ''
            })

        })

    }

    return (
        <form className="Login" onSubmit={LoginAuth}>
            <input type="text" placeholder="Имя пользователя" name="username" onChange={ControlInput} />
            {ErrorMsg.username}
            <input type="password" placeholder="Пароль" name="password" onChange={ControlInput} />
            {ErrorMsg.password}

            <button type='submit'>Войти</button>
        </form>
    )
}