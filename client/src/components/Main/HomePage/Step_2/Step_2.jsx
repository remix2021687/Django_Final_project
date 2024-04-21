import { Cards } from "./components/Cards"
import { AssetsImage } from "../../../../../assets/assets"
import { motion } from 'framer-motion'


export const Step_2 = () => {
    const perentView = {
        visible: {
            opacity: 1,
            
            transition: {
                whan: 'beforeChildren',
                staggerChildren: 0.2,
            }
        },

        hidden: {
            opacity: 1
        },
    }

    return (
        <section className="Step_2">
            <h1>Мы предлагаем <span>лучшие</span> услуги</h1>

            <motion.section variants={perentView} initial='hidden' whileInView='visible' viewport={{once: true}} className="Step_2_content">
                <Cards 
                    ImgSrc={AssetsImage.singal}
                    Titile={'Расчетная погода'}
                    Text={'Мы предусматриваем погоду что бы Вы чувствовали себя комфортнее'}
                />
                <Cards 
                    ImgSrc={AssetsImage.bus}
                    Titile={'Лучший транспорт'}
                    Text={'Мы предусматриваем погоду что бы Вы чувствовали себя комфортнее'}
                />
                <Cards 
                    ImgSrc={AssetsImage.mic}
                    Titile={'Местные события'}
                    Text={'Мы предусматриваем погоду что бы Вы чувствовали себя комфортнее'}
                />
                <Cards 
                    ImgSrc={AssetsImage.mobile}
                    Titile={'С Вами на связи'}
                    Text={'Мы предусматриваем погоду что бы Вы чувствовали себя комфортнее'}
                />
            </motion.section>
        </section>
    )
}