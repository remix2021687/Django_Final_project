import { useState, useEffect } from "react"
import { motion } from 'framer-motion'

export const QuationContext = ({name, description}) => {

    const [isOpen, setIsOpen] = useState(false);

    const DropMenu = {
        visible: {
            opacity: 1,
            height: 'auto'
        },

        hidden: {
            opacity: 0,
            height: '0px'
        }
    }

    return (
        <section>
            <motion.section onClick={() => {setIsOpen(!isOpen)}} whileTap={{scale: 1.02}} className="QuationContext">
                <h3>{name}</h3>
                <motion.span animate={isOpen ? {rotateZ: 90}: {rotateZ: -90}} className="material-symbols-outlined">arrow_forward_ios</motion.span>
            </motion.section>
            <motion.section variants={DropMenu} initial='hidden' animate={isOpen ? 'visible': 'hidden'} className="QuationContext_content">
                <p>{description}</p>
            </motion.section>
        </section>
    )
}