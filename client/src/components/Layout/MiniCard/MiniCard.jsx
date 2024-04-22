import { motion } from 'framer-motion'

export const MiniCard = ({BGsrc, Icon, Name}) => {

    const ChildrenView = {
        visible: {
            y: 0,
            opacity: 1,
        },

        hidden: {
            y: -10,
            opacity: 0
        }
    }

    return (
        <motion.section variants={ChildrenView} whileHover={{scale: 1.04}} className="MineCard" style={{backgroundImage: `url(${BGsrc})`}}>
            {Icon}
            <h2>{Name}</h2>
        </motion.section>
    )
}