import { motion } from 'framer-motion'
import { SearchMenu } from "../../../Layout/SearchMenu/SearchMenu"


export const Step_1 = () => {

    const parent_view = {
        visible: {
            opacity: 1,

            transition: {
                when: 'beforeChildren',
                delay: 0.6,
                staggerChildren: 0.2
            }
        },

        hidden: {opacity: 0}
    }

    const children_view = {
        visible: {
            x: 0, 
            opacity: 1,

            transition: {
                type: 'tween',
                ease: 'easeInOut',
                duration: 0.5,
            }
        },

        hidden: {x: -50, opacity: 0}
    }

    return (
        <section className="Step_1">
            <motion.section
                variants={parent_view}
                initial='hidden'
                whileInView='visible'
                viewport={{once: true}}
                className="Step_1_title"
            >
                <motion.h3 variants={children_view}>Открой для себя WOW</motion.h3>
                <motion.h1 variants={children_view}>ЧЕХИЮ</motion.h1>
            </motion.section>

            {/* <SearchMenu /> */}
        </section>
    )
}