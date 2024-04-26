import { motion } from "framer-motion"

export const CardVoucher = ({BGsrc, name}) => {

    const CardView = {
        visible: {
            opacity: 1,
            y: 0
        },

        hidden: {
            opacity: 0,
            y: -10
        }
    }

    return (
        <motion.section variants={CardView} whileHover={{scale: 1.04, y: -10}} viewport={{once: true}} className="CardVoucher">
            <img src={BGsrc} alt="img" />
            <section className="CardVoucher_content">
                <h3>{name}</h3>
            </section>
        </motion.section>
    )
}