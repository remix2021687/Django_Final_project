import { Footer } from "./Footer/Footer"
import { Header } from "./Header/Header"

export const RootLayout = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                { children }
            </main>
            {/* <Footer /> */}
        </>
    )
}