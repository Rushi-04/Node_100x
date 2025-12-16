import { useState } from "react"

export function Sidebar() {
    const [open, setOpen] = useState(true);

    return (
        <div className="flex">
            <div className={`bg-red-300 hidden sm:block h-screen transition-all ease-in-out duration-300 ${open ? "w-64":"w-0"}`}>
                Sidebar
            </div>
            <div className="bg-cyan-300 w-full h-screen">
                <button className="bg-blue-500 border-black rounded px-3 py-1 m-2 hidden sm:block text-white font-semibold"
                onClick={() => setOpen(!open)}>
                    Toggle
                </button>
                <div className="flex justify-center items-center h-screen ">Content</div>
                
                {/* {open ? "True" : "False"} */}
            </div>
        </div>
    )
}