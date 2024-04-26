import { CityCards } from "./components/CityCards"
import { AssetsImage } from "../../../../../assets/assets"
import { motion } from 'framer-motion'

export const Step_3 = () => {

    const parentView = {
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
        <section className="Step_3">
            <h1>Наши топ-WOW 4 города для тура</h1>

            <motion.section variants={parentView} initial='hidden' whileInView='visible' viewport={{once: true}} className="Step_3_content">
                <CityCards 
                    bgSrc={AssetsImage.Prague}
                    name={'Прага'}
                />

                <CityCards 
                    bgSrc={AssetsImage.brno}
                    name={'Брно'}
                />
                
                <CityCards 
                    bgSrc={AssetsImage.karlovyVary}
                    name={'Карловы Вары'}
                />

                <CityCards 
                    bgSrc={AssetsImage.telc}
                    name={'Тельч'}
                />  
            </motion.section>
        </section>
    )
}