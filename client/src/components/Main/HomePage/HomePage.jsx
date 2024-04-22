import { Step_1 } from "./Step_1/Step_1"
import { Step_2 } from "./Step_2/Step_2"
import { Step_3 } from "./Step_3/Step_3"
import { Step_4 } from "./Step_4/Step_4"
import { Step_5 } from "./Step_5/Step_5"

export const HomePage = () => {
    return (
        <>
            <Step_1 />
            <Step_2 />
            <Step_4 />
            <Step_3 />
            <Step_5 />
        </>
    )
}