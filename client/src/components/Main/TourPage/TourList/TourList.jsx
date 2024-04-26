import { GetTourList } from "../../../../Axios/AxiosInit"
import { TourCard } from "../../../Layout/TourCard/TourCard";
import { useState, useEffect } from "react"

export const TourList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        GetTourList()
            .then((res) => {
            const responseDate = res.data

            setData(responseDate);
        })
    }, [data])

    return (
        <section className="TourList">
            <h1>Доступные <span>места</span> для посещения</h1>
            <section className="TourList_conetent">
                {
                    data.map((data, index) => 
                        <TourCard
                            key={index + 1}
                            Id={data.id}
                            Name={data.name}
                            PreviewImg={data.preview_img}
                            Description={data.description}
                            Price={data.price}
                            City={data.city}
                        />
                    )
                }
            </section>
        </section>
    )
}