import { Step_2 } from "../HomePage/Step_2/Step_2"
import { Step_5 } from "../HomePage/Step_5/Step_5"
import { ServiceVouchers } from "./ServiceVouchers/ServiceVouchers"

export const ServicesPage  = () => {

    return (
        <section className="ServicesPage">
            <Step_2 />
            <ServiceVouchers />
            <Step_5 />
        </section>
    )
}