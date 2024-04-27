import { useState, useEffect } from "react"
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ProfileNavigate } from "./ProfileNavigate"

export const DropMenu = ( {isClicked} ) => {
    const [isOpen, setIsOpen] = useState(false);

    const link_view = {
        
        visible: {
            display: 'flex',
            opacity: 1,
            height: '100vh',
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.1
            },
        },
        
        hidden: {
            opacity: 0,

            transitionEnd: {
                display: 'none'
            }
        },
    }

    const link_children_view = {
        visible: {opacity: 1, y: 0},
        
        hidden: {
            opacity: 0, 
            y: -20,
        },
    }

    function OnClickNav() {
        setIsOpen(false);
    }

    useEffect(() => {
        if (isClicked) {
            setIsOpen(true)

            if (isOpen == true) {
                setIsOpen(false)
            }
        }
    
    }, [isClicked])


    return (
        <motion.section 
            className="topnav DropMenu"
            initial='hidden'
            animate={isOpen ? 'visible' : 'hidden'}
            variants={link_view}
        >
            <motion.button whileTap={{scale: 0.8}} onClick={() => {setIsOpen(false)}}><span className="material-symbols-outlined">close</span></motion.button>
            <section className="topnav_links DropMenu_link">
                    <ul>
                        <motion.li variants={link_children_view}>
                            <NavLink to={'/'} onClick={OnClickNav}>Главная</NavLink>
                        </motion.li>

                        <motion.li variants={link_children_view}>
                            <NavLink to={'/tours'} onClick={OnClickNav}>Туры</NavLink>
                        </motion.li>

                        <motion.li variants={link_children_view}>
                            <NavLink to={'/service'} onClick={OnClickNav}>Услуги</NavLink>
                        </motion.li>

                        <motion.li variants={link_children_view}>
                            <NavLink to={'/contact'} onClick={OnClickNav}>FAQ/Контакты</NavLink>
                        </motion.li>

                        {/* <motion.li variants={link_children_view}>
                            <NavLink>Язык</NavLink>
                        </motion.li> */}

                    </ul>

                    <ProfileNavigate />
                </section>
        </motion.section>
    )
}