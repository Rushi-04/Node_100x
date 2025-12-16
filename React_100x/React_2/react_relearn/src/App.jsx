// import Web from "./components/web-try/web"
// import Sidebar from "./components/Sidebar"
// import DarkMode from "./components/answers/DarkMode"
import { useState } from "react";
import SidebarToggle from "./components/icons/SidebarToggle";
import ProfilePic from "./components/icons/ProfilePic";
import ProfileCard from "./components/cards/ProfileCard";

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

function Sidebar({ open, setOpen }) {

  return (
    <div className={`relative h-screen bg-red-200 transition-all ease-in-out duration-300 ${open ? "md:w-96 w-13" : "w-13"}`}>
      <button className="absolute px-3 py-1 cursor-pointer hover:bg-slate-200 rounded"
        onClick={() => setOpen(!open)}>
        <SidebarToggle />
      </button>
      <div className={`absolute top-1 right-2 bg-white rounded-xl p-1 ${open ? "block" : "hidden"}`}>
        <ProfilePic size={20} />
      </div>
    </div>
  )
}

function MainContent() {
  return (
    <div className="w-full">
      <div className="bg-black h-36 hidden md:block"></div>
      <div className="grid grid-cols-14 gap-8 p-8 ">
        <div className="h-full col-span-3 hidden md:block rounded-2xl bg-white -translate-y-18 shadow-2xl ">
          <ProfileCard/>
        </div>

        <div className="h-96 md:col-span-7 col-span-14 rounded-2xl bg-green-300 md:translate-y-20 shadow-2xl">

        </div>

        <div className="h-60 md:col-span-4 col-span-14 rounded-2xl bg-teal-300 md:translate-y-20 shadow-2xl">

        </div>
      </div>
    </div>
  )
}