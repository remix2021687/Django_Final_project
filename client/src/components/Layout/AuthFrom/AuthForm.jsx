import { useState, useEffect } from "react"
import { motion } from 'framer-motion'
import { AssetsImage } from "../../../../assets/assets";
import { Register } from "./components/Register/Register";
import { Login } from "./components/Login/Login";

export const AuthForm = ({isClicked}) => {
    const [isLogin, setIsLogin] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    
    useEffect(() => {
        switch(isClicked) {
            case 'Регистрация':
                setIsOpen(true)
                setIsLogin(false)
                break;
            
            case 'Вход':
                setIsOpen(true)
                setIsLogin(true)
                break;

            default:
                setIsLogin(true)
        }
    }, [isClicked])

    const HandelStateChange = (state) => {
        setIsOpen(state)
    }

    const ParentView = {
        visible: {
            display: 'flex',
            opacity: 1,
            y: 0,
        },

        hidden: {
            opacity: 0,
            y: -10,

            transitionEnd: {
                display: 'none'
            }
        }
    }

    return  (
        <>
            <motion.section variants={ParentView} initial='hidden' animate={isOpen ? 'visible' : 'hidden'} className="nonBG"></motion.section>

            <motion.section variants={ParentView} initial='hidden' animate={isOpen ? 'visible' : 'hidden'} className="AuthFrom">
                <img src={AssetsImage.karlovmost}/>

                <section className="AuthFrom_select">
                    {isLogin ? <button onClick={() => {setIsLogin(false)}}><span>Регистрация</span></button> : null}
                    {isLogin ? null : <button onClick={() => {setIsLogin(true)}}><span>Вход</span></button>}
                </section>

                <section className="AuthFrom_right">
                    <h2>Сделаете первый шаг <br /> к лучшей жизни с нами.</h2>
                    {
                        isLogin ? <Login UpadteState={HandelStateChange}/> : <Register UpadteState={HandelStateChange}/>
                    }
                </section>
            </motion.section>
        </>
    )
}