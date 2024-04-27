import { GetTour } from "../../../Axios/AxiosInit"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom";
import { motion } from 'framer-motion'

export const TourDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [ImgList, setImgList] = useState([]);


    useEffect(() => {
        GetTour(id)
        .then((res) => {
            const responseDate = res.data

            setData(responseDate);
        })

        if (data.img_list) {
            setImgList(data.img_list[0])
        }
    }, [data])

    return (
        <>
            <section className="TourDetail">
                <img src={ImgList.img_url ? ImgList.img_url: null} alt={ImgList.name}/>
                <section className="TourDetail_content">
                    <header className="TourDetail_content_header">
                        <h1>{data.name}</h1>
                        <h3><span className="material-symbols-outlined">location_on</span> {data.city}</h3>
                    </header>
                    <p>{data.description}</p>
                </section>
            </section>
            <section className="TourDetail_button">
                <motion.button onClick={() => {navigate(-1)}} whileHover={{scale: 1.05}}>Назад</motion.button>
                <motion.button whileHover={{scale: 1.05}}>Забронировать</motion.button>
            </section>
        </>
    )
}