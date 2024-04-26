import { Authorization } from "../../../../../Axios/AxiosInit"
import { useState } from "react"

export const Login = ({UpadteState}) => {
    const [formData, setFormDate] = useState({
        username: '',
        password: ''
    })

    const [ErrorMsg, SetErrorMsg] = useState({
        HeadError: '',
        username: '',
        password: ''
    })


    const ControlInput = (event) => {
        setFormDate((date) => ({
            ...date,
            [event.target.name]: event.target.value 
        }))
    }

    const LoginAuth = async (event) => {
        event.preventDefault();
        await Authorization({
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
                HeadError: ErrorContext.detail ? ErrorContext.detail : '',
                username: ErrorContext.username ? ErrorContext.username[0] : '',
                password: ErrorContext.password ? ErrorContext.password[0] : ''
            })

            console.log(ErrorContext)

        })

    }

    return (
        <form className="Login" onSubmit={LoginAuth}>
            <input type="text" placeholder="Имя пользователя" name="username" onChange={ControlInput} />
            {ErrorMsg.username ? <span>{ErrorMsg.username}</span> : null}
            <input type="password" placeholder="Пароль" name="password" onChange={ControlInput} />
            {ErrorMsg.password ? <span>{ErrorMsg.password}</span> : null}
            {ErrorMsg.HeadError ? <span>{ErrorMsg.HeadError}</span> : null}

            <button type='submit'>Войти</button>
        </form>
    )
}