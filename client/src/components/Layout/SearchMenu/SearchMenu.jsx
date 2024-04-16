import { motion } from 'framer-motion'
import { ContextMenu } from "./components/ContextMenu"


export const SearchMenu = () => {
    const perent_view = {
        visible: {
            opacity: 1,

            transition: {
                delay: 0.8,
                when: 'beforeChildren',
                staggerChildren: 0.1,
            }
        }, 
        hidden: {
            opacity: 0
        }
    }

    // const children_view = {
    //     visible: {
    //         y: 0,
    //         opacity: 1,

    //         transition: {
    //             type: 'tween',
    //             duration: 0.1
    //         }
    //     },

    //     hidden: {
    //         y: -10,
    //         opacity: 0,
    //     }
    // }

    return (
        <>
            <motion.section
                variants={perent_view} 
                initial='hidden'
                whileInView='visible'
                className="SearchMenu"
            >
                <section className="SearchMenu_select">
                    <ContextMenu />
                    <input type='date' id='data' className='SearchMenu_date'/>
                    <ContextMenu />
                </section>
                <motion.button className="SearchMenu_button">Поиск</motion.button>
            </motion.section>
        </>
    )
}