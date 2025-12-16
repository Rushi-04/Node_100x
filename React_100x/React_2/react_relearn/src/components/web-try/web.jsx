

export default function Web() 
{
  return (  
    <>
    <div className="grid grid-cols-1 bg-blue-900 h-full">
      <div className="bg-white-300 w-full h-40 text-2xl font-semibold flex justify-center items-center">
        <h1><span className="text-blue-400">Webinar</span><span className="text-white">.gg</span> </h1>
      </div>
      <div className="bg-white-300 flex justify-center items-center flex-col py-20 gap-4 text-xl font-medium h-35">
        <h1 className="text-white">Verify Your Age</h1>
      </div>
      <div className="bg-white-300 flex justify-center text-center items-center flex-col p-5 gap-4">
        <p className="text-sm font-semibold text-gray-400">Please confirm your birth year. This data will not be stored.</p>
        <input type="text" placeholder="Your Birth Year" className=" h-12 rounded p-4 w-1/4 border font-semibold"/>
      </div>
      <div className="bg-white-300 flex justify-center items-center h-71.5">
        <button className="w-1/4 rounded-md h-11 bg-gray-400 font-semibold mb-50 "><span className="text-white">Continue</span></button>
      </div>
    </div>
    </>
  )
}



// Practice Code - 1
// export default function App()
// {
//   return (  
//     <>
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-2 gap-y-3 p-4 grid-flow-dense">
//         <div className="bg-red-500 rounded-lg shadow-xl min-h-[50px] col-span-2 "></div>
//         <div className="bg-orange-500 rounded-lg shadow-xl min-h-[50px] "></div>
//         <div className="bg-yellow-500 rounded-lg shadow-xl min-h-[50px] row-span-2"></div>
//         <div className="bg-blue-500 rounded-lg shadow-xl min-h-[50px]"></div>
//         <div className="bg-teal-500 rounded-lg shadow-xl min-h-[50px] "></div>
//         <div className="bg-green-500 rounded-lg shadow-xl min-h-[50px]"></div>
//         <div className="bg-indigo-500 rounded-lg shadow-xl min-h-[50px] col-span-2" ></div>
//         <div className="bg-purple-500 rounded-lg shadow-xl min-h-[50px] "></div>
//         <div className="bg-pink-500 rounded-lg shadow-xl min-h-[50px] row-span-2"></div>
//         <div className="bg-slate-500 rounded-lg shadow-xl min-h-[50px] col-span-2"></div>
//       </div>
//     </>
//   )
// } 


// Practice Code - 2
// export default function App() 
// {
//   return (  
//     <>
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-2 gap-y-3 p-4">
//         <div className="bg-red-500 rounded-lg shadow-xl min-h-[50px] sm:row-span-2 sm:col-span-1"></div>
//         <div className="bg-teal-500 rounded-lg shadow-xl min-h-[50px] sm:col-span-2"></div>
//         <div className="bg-indigo-500 rounded-lg shadow-xl min-h-[50px] "></div>
//         <div className="bg-green-500 rounded-lg shadow-xl min-h-[50px] sm:row-span-2"></div>
//         <div className="bg-yellow-500 rounded-lg shadow-xl min-h-[50px] sm:col-span-2"></div>
        
//       </div>
//     </>
//   )
// } 


// Practice Code - 3
// export default function App() 
// {
//   return (  
//     <>
//       <div className="grid p-4 gap-2 grid-cols-1 sm:grid-cols-3 ">
//         <div className="bg-red-500 rounded-lg shadow-xl min-h-[50px] "></div>
//         <div className="bg-teal-500 rounded-lg shadow-xl min-h-[50px] "></div>
//         <div className="bg-indigo-500 rounded-lg shadow-xl min-h-[50px] "></div>

//       </div>
//     </>
//   )
// } 