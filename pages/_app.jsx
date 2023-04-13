import { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar";
import { StateContext } from "../context/StateContext";
import "../styles/App.css"
import Cart from "../components/Cart";
//Start
export default function MyApp({ Component, pageProps }) {
    return(
        <StateContext>
            <div className="drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Navbar></Navbar>
                    <Toaster containerStyle={{top:70}}/>
                    <Component {...pageProps} /> 
                </div>
                    
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                    <div className="menu p-4 w-80 bg-base-100 text-base-content">
                        <Cart/>
                    </div>
                </div>
            </div> 
            
        </StateContext>
    );
  }