import { AssetsImage } from "../../../../assets/assets"
import { motion } from 'framer-motion'

export const TourCard = () => {

    const ChildrenView = {
        visible: {
            y: 0,
            opacity: 1,
        },

        hidden: {
            y: 10,
            opacity: 0
        }
    }

    return (
        <motion.section variants={ChildrenView} whileHover={{scale: 1.02, y: -5}} className="TourCard">
            <img src={AssetsImage.PrahaStreet}/>
            <section className="TourCard_header">
                <h2>Оперный театр</h2>
                <h4><span className="material-symbols-outlined">location_on</span> Прага</h4>
            </section>
            <hr />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum tellus eget felis congue rutrum.
             Quisque at viverra risus, id.</p>
            <section className="TourCard_lower">
                <h3>От 20€</h3>
                <motion.button whileHover={{scale: 1.08}} whileTap={{scale: 0.95}} transition={{duration: 0.3}}><span>Больше</span></motion.button>
            </section>
        </motion.section>
    )
}