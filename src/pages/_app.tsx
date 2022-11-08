import "../styles/globals.css"
import "../styles/main.scss"
import type { AppProps } from "next/app"
import Navbar from "src/components/Navbar"
import { store } from "../store"
import { Provider } from "react-redux"

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className="app-wrapper">
            <Provider store={store}>
                <Navbar />
                <Component {...pageProps} />
            </Provider>
        </div>
    )
}

export default MyApp
