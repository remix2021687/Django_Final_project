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
                    description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptas cupiditate ea officiis ipsa eveniet, laudantium quod nesciunt itaque id exercitationem maxime adipisci, architecto aliquid. Nisi delectus voluptatibus perferendis odit.'}
                />

                <CityCards 
                    bgSrc={AssetsImage.brno}
                    name={'Брно'}
                    description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptas cupiditate ea officiis ipsa eveniet, laudantium quod nesciunt itaque id exercitationem maxime adipisci, architecto aliquid. Nisi delectus voluptatibus perferendis odit.'}
                />
                
                <CityCards 
                    bgSrc={AssetsImage.karlovyVary}
                    name={'Карловы Вары'}
                    description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptas cupiditate ea officiis ipsa eveniet, laudantium quod nesciunt itaque id exercitationem maxime adipisci, architecto aliquid. Nisi delectus voluptatibus perferendis odit.'}
                />

                <CityCards 
                    bgSrc={AssetsImage.telc}
                    name={'Тельч'}
                />  
            </motion.section>
        </section>
    )
}