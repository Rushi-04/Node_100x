import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import {ReactNode} from "react";

export default function Layout({children}: {children:ReactNode}) {
    return (
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    )
}