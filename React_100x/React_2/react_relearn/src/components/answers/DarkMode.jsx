import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";


export default function DarkMode() {
const [dark, setDark] = useState(false);

useEffect(() => {
    // if(dark){
    //     document.documentElement.classList.add("dark");
    // }else{
    //     document.documentElement.classList.remove("dark");
    // }
    document.documentElement.classList.toggle("dark");
}, [dark]);

    return (
        <div className="bg-white dark:bg-black h-screen">
            <div className="flex h-screen justify-center items-center">
                <button className="flex bg-red-300 py-2 px-2 rounded-2xl transition-all ease-in-out duration-300 shadow-xl shadow-purple-400 dark:shadow-white dark:text-black font-semibold dark:border-none border hover:scale-105"
                onClick={() => setDark(!dark)}>
                  {dark ? <Sun className="mx-2"/> : <Moon className="mx-2"/> }  Toggle
                </button>
            </div>
        </div>
    )
}


