import { motion } from 'framer-motion'
import { ContextMenu } from "./components/ContextMenu"
import { forwardRef, useState } from 'react'
import DataPicker from 'react-datepicker'

export const SearchMenu = () => {
    const [startData, setStartData] = useState(new Date());
    const [City, setCity] = useState(['Praga1', 'Praga2', 'Praga3'])
    const [people, setPeople] = useState(['People1', 'People2', 'People3'])

    const perent_view = {
        visible: {
            opacity: 1,

            transition: {
                delay: 0.8,
                when: 'beforeChildren',
                staggerChildren: 0.1,
            }
        }, 
        hidden: {
            opacity: 0
        }
    }

    const children_view_date = {
        visible: {
            opacity: 1,
            y: 0,
        },

        hidden: {
            opacity: 0,
            y: 3,
            
            transitionEnd: {
                y: -3
            }
        }
    }

    const DataButton = forwardRef(({value, onClick }, ref) => (
        <motion.button variants={children_view_date} className='SearchMenu_select_date' onClick={onClick} ref={ref}>
            <span>{value}</span>
        </motion.button>
    ))

    return (
        <>
            <motion.section
                variants={perent_view} 
                initial='hidden'
                whileInView='visible'
                className="SearchMenu"
                viewport={{once: true}}
            >
                <section className="SearchMenu_select">
                    <ContextMenu data={City} />
                    <DataPicker 
                        selected={startData} 
                        dateFormat='dd.MM.yy'
                        onChange={(date) => setStartData(date)}
                        customInput={<DataButton />}
                    />
                    <ContextMenu data={people} />
                </section>
                <motion.button className="SearchMenu_button">Поиск</motion.button>
            </motion.section>
        </>
    )
}