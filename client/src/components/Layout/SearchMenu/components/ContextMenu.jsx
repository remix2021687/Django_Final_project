import { useState } from 'react'
import { motion } from 'framer-motion'
import { AssetsImage } from '../../../../../assets/assets'

export const ContextMenu = ( {data} ) => {
    const [isClicked, setIsClicked] = useState(false);

    const children_view_conetextmenu = {
        visible: {
            y: 0,
            opacity: 1,

            transition: {
                type: 'tween',
                duration: 0.1
            }
        },

        hidden: {
            y: -10,
            opacity: 0,
        }
    }

    const parent_view = {
        visible: {
            opacity: 1,
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.2
            }
        },

        hidden: {
            opacity: 0,
            transition: {
                when: 'afterChildren',
                staggerChildren: 0.2
            }
        }
    }

    const children_view_Buttons = {
        visible: {
            display: 'flex',
            opacity: 1,
            y: 0,
        },

        hidden: {
            display: 'none',
            opacity: 0,
            y: 3,
            
            transitionEnd: {
                y: -3,
                display: 'none'
            }
        }
    }

    function HandleClick() {
        setIsClicked(true);

        if (isClicked) {
            setIsClicked(false);
        }
    }

    return (
        <section className="Context_Menu">
            <motion.button 
                variants={children_view_conetextmenu}
                onClick={HandleClick} 
                whileTap={{scale: 0.9}}
            >

                <img src={AssetsImage.city}/>
                <span>Город</span>

            </motion.button>

            <motion.section
                variants={parent_view}
                initial='hidden'
                animate={isClicked ? 'visible': 'hidden'}
                className="Contex_Menu_Drop"
            >

                {
                    data.map((data, index) => 
                        <motion.button key={index + 1} variants={children_view_Buttons}>{data}</motion.button>
                    )
                }

            </motion.section>
        </section>
    )
}