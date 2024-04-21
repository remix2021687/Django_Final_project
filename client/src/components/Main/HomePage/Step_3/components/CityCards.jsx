import { motion } from 'framer-motion'

export const CityCards = ({name, bgSrc}) => {

    const CardView = {
        visible: {
            y: 0,
            opacity: 1
        },

        hidden: {
            y: -10,
            opacity: 0
        }
    }

    return (
        <motion.section variants={CardView} whileHover={{scale: 1.05, y: -10}} className="CityCards" style={{backgroundImage: `url(${bgSrc})`}}>
            <h2>{name}</h2>
        </motion.section>
    )
}