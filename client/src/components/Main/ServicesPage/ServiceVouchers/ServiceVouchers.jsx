import { CardVoucher } from "./components/CardVoucher"
import { AssetsImage } from "../../../../../assets/assets"
import { motion } from "framer-motion"

export const ServiceVouchers = () => {
    const PerentView = {
        visible: {
            opacity: 1,
            
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.2
            }
        },

        hidden: {
            opacity: 0
        }
    }

    return (
        <section className="ServiceVouchers">
            <h2>Наши <span>ваучеры</span> для вас</h2>

            <motion.section variants={PerentView} initial='hidden' whileInView='visible' className="ServiceVouchers_content">
                <CardVoucher 
                    BGsrc={AssetsImage.hands}
                    name={'10% за регестрацию'}
                />

                <CardVoucher 
                    BGsrc={AssetsImage.dort}
                    name={'15% на День Рождения'}
                />

                <CardVoucher 
                    BGsrc={AssetsImage.cats}
                    name={'10% за отзыв на след. тур'}
                />

                <CardVoucher 
                    BGsrc={AssetsImage.friends}
                    name={'20% за 10 и больше человек'}
                />
            </motion.section>
        </section>
    )
}