// import Web from "./components/web-try/web"
// import Sidebar from "./components/Sidebar"
// import DarkMode from "./components/answers/DarkMode"
import { useState } from "react";
import SidebarToggle from "./components/icons/SidebarToggle";

export default function App() {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      {/* <Sidebar /> */}
      {/* <DarkMode/> */}

      <Sidebar open={open} setOpen={setOpen} />
      <MainContent open={open} setOpen={setOpen} />
    </div>
  )
}

function Sidebar({open, setOpen}) {

  return (                     
    <div className={`h-screen bg-red-200 transition-all ease-in-out duration-300 ${open ? "w-96":"w-12"}`}>
        <button className="px-3 py-1 cursor-pointer hover:bg-slate-200 rounded"
        onClick={() => setOpen(!open)}>
          <SidebarToggle/>
        </button>
    </div>
  )
}

function MainContent() {
  return (
    <div className="w-full">
      <div className="bg-black h-36"></div>
      <div className="grid grid-cols-14 gap-8 p-8">
        <div className="h-90 col-span-3 rounded-2xl bg-red-300 -translate-y-18 shadow-lg">
        </div>
        <div className="h-96 col-span-7 rounded-2xl bg-green-300 translate-y-20 shadow-lg">

        </div>
        <div className="h-60 col-span-4 rounded-2xl bg-yellow-300 translate-y-20 shadow-lg">

        </div>
      </div>
    </div>
  )
}