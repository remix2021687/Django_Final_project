import { motion } from 'framer-motion'

export const Cards = ({ImgSrc, Titile, Text}) => {

    const CardView = {
        visible: {
            opacity: 1,
            y: 0,
        }, 

        hidden: {
            opacity: 0,
            y: -10
        }
    }

    return (
        <motion.section variants={CardView} className="Step_2_Cards"
            whileHover={{
                y: -10,
                scale: 1.03
            }}
        >
            <img src={ImgSrc} />
            <h2>{Titile}</h2>
            <p>{Text}</p>
        </motion.section>
    )
} 