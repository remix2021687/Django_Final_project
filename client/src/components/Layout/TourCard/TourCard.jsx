import { AssetsImage } from "../../../../assets/assets"
import { motion } from 'framer-motion'

export const TourCard = ({Id, Name, PreviewImg, Description, Price, City}) => {

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
            <img src={PreviewImg ? PreviewImg : AssetsImage.PrahaStreet}/>
            <section className="TourCard_header">
                <h2>{Name ? Name : 'Оперный театр'}</h2>
                <h4><span className="material-symbols-outlined">location_on</span>{City ? City : 'Прага'}</h4>
            </section>
            <hr />
            <p>{Description ? Description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a metus faucibus quam lacinia consequat.'}</p>
            <section className="TourCard_lower">
                <h3>Цена: {Price ? Price : 20}€</h3>
                <motion.button whileHover={{scale: 1.08}} whileTap={{scale: 0.95}} transition={{duration: 0.3}}><span>Больше</span></motion.button>
            </section>
        </motion.section>
    )
}