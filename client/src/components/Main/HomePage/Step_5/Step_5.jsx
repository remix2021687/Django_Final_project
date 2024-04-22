import { Cards } from "../Step_2/components/Cards"
import { AssetsImage } from "../../../../../assets/assets"
import { motion } from "framer-motion"

export const Step_5 = () => {

    const ParentView = {
        visible: {
            opacity: 1,
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.2
            },

            hidden: {
                opacity: 0
            }
        }
    }

    return (
        <section className="Step_5">
            <h2>Что вам <span>нужно</span> сделать</h2>

            <motion.section  variants={ParentView} initial='hidden' whileInView='visible' viewport={{once: true}} className="Step_5_content">
                <Cards
                    ImgSrc={AssetsImage.verify}
                    Titile={'Зарегестрироватся'}
                    Text={'Конечно, Вы можете забронировать и купить билеты без входа. Регестрации даст вам не только самие свежте новости, но и доступ к купонам, что предоставят Вам скидку)'}
                />

                <Cards 
                    ImgSrc={AssetsImage.pig}
                    Titile={'Оплатить'}
                    Text={'После того как Вы выберете тур, Вы можете выбрать один тиз способов оплаты и совершить транзакцию.'}
                />

                <Cards 
                    ImgSrc={AssetsImage.heart}
                    Titile={'Наслажлатся'}
                    Text={'ДА! Теперь Вы почувствуете на себе наш WOW-эфект и получите приятные воспоминая на всю жизнь. Хорошего путешествия!'}
                />
            </motion.section>
        </section>
    )
}