import { useState, useEffect } from "react"
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

export const DropMenu = ( {isClicked} ) => {
    const [isOpen, setIsOpen] = useState(false);

    const link_view = {
        
        visible: {
            opacity: 1,
            height: '100vh',
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.1
            }
        },
        
        hidden: {opacity: 0},
    }

    const link_children_view = {
        visible: {opacity: 1, y: 0},
        
        hidden: {opacity: 0, y: -20},
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
            <section className="topnav_links DropMenu_link">
                    <ul>
                        <motion.li variants={link_children_view}>
                            <NavLink className="actived">Главная</NavLink>
                        </motion.li>

                        <motion.li variants={link_children_view}>
                            <NavLink>Туры</NavLink>
                        </motion.li>

                        <motion.li variants={link_children_view}>
                            <NavLink>Услуги</NavLink>
                        </motion.li>

                        <motion.li variants={link_children_view}>
                            <NavLink>FAQ/Контакты</NavLink>
                        </motion.li>

                        <motion.li variants={link_children_view}>
                            <NavLink>Язык</NavLink>
                        </motion.li>

                    </ul>
                </section>
        </motion.section>
    )
}