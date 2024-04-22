import { AssetsImage } from "../../../../../assets/assets"
import { MiniCard } from "../../../Layout/MiniCard/MiniCard"
import { TourCard } from "../../../Layout/TourCard/TourCard"
import { motion } from "framer-motion"

export const Step_4 = () => {
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
        <section className="Step_4">
            <h1>С легкостью спланируйте <br /> 
            путешествие и cвой <span>идеальный</span> 
            день</h1>
            <section className="Step_4_content">
                <motion.section variants={parentView} initial='hidden' whileInView='visible' viewport={{once: true}} className="Step_4_content_upper">
                    <MiniCard
                        BGsrc={AssetsImage.cityphoto}
                        Name={"Тур городом"}
                        Icon={<span className="material-symbols-outlined">location_on</span>}
                    />

                    <MiniCard
                        BGsrc={AssetsImage.monition}
                        Name={"Горный тур"}
                        Icon={<span className="material-symbols-outlined">landscape</span>}
                    />

                    <MiniCard
                        BGsrc={AssetsImage.cityphoto}
                        Name={"WOW-Микс"}
                        Icon={<span className="material-symbols-outlined">image</span>}
                    />
                </motion.section>
                <motion.section variants={parentView} initial='hidden' whileInView='visible' viewport={{once: true}} className="Step_4_content_middel">
                    <TourCard />
                    <TourCard />
                    <TourCard />
                </motion.section>
                <section className="Step_4_content_lower">
                    <h2>Нажмите, что бы забронировать</h2>
                    <motion.button whileTap={{scale: 0.95}} whileHover={{scale: 1.05, y: -5, borderRadius: '10px'}}>Забронировать</motion.button>
                </section>
            </section>
        </section>
    )
}