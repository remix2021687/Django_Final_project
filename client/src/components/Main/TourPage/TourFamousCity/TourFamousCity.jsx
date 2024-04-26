import { CityCards } from "../../HomePage/Step_3/components/CityCards"
import { AssetsImage } from "../../../../../assets/assets"

export const TourFamousCity = () => {
    return (
        <section className="TourFamousCity">
            <h1>Наши <span>самые</span> популярные города</h1>
            <section className="TourFamousCity_content">
                <CityCards 
                    bgSrc={AssetsImage.telc}
                    name={'Тельч'}
                />
                <CityCards 
                    bgSrc={AssetsImage.kutnahora}
                    name={'Кутна Гора'}
                />
                <CityCards 
                    bgSrc={AssetsImage.mirinskelazne}
                    name={'Марианске-Лазне'}
                />
                <CityCards 
                    bgSrc={AssetsImage.olmouc}
                    name={'Оломоуц'}
                />
                <CityCards 
                    bgSrc={AssetsImage.czbudovice}
                    name={'Ческе-Будеёвице'}
                />
            </section>
        </section>
    )
}