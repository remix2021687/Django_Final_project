import { useState } from "react";
import { Footer } from "./Footer/Footer"
import { Header } from "./Header/Header"
import { AuthForm } from "../AuthFrom/AuthForm";

export const RootLayout = ({ children }) => {
    const [Click, SetClick] = useState('')

    const HadelTransferClick = (name) => {
        SetClick(name)
    }

    return (
        <>
            <AuthForm isClicked={Click} />
            <Header ClickHadel={HadelTransferClick} />
            <main>
                { children }
            </main>
            <Footer />
        </>
    )
}