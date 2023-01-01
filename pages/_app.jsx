import Navbar from "../components/Navbar";
import "../styles/App.css"

export default function MyApp({ Component, pageProps }) {
    return(
        <>
            <Navbar></Navbar>
            <Component {...pageProps} />
        </>
    );
  }