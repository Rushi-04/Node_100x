// import { useState } from "react"
// import { useEffect } from "react";

// export default function App() {
//  const [first, setFirst] = useState(0);
// //  setFirst(21)
//  const Increase = () => 
//   {
//     setFirst(21);
//   }
//   Increase()
//   return (
//     <>
//       <h1 >Hi Rushi !</h1>
//       <Counter first={first} />
//     </>
//   )
// }

//----------------------------------------------------------------------------

// function Counter(props)
// {
//   throw new Error("Error happened rushi")
//   const [count, setCount] = useState(0)
  
//   useEffect(() => {
    
//     // runs when component mounts
//     console.log("Hello from useEffect");
    
//     // runs when component unmounts
//     return function() {
//       // clearInterval(clock);
//     }
//   }, []) // dependency array, cleanup, fetch inside use

  
//   const IncreaseCount = () => {
//     setCount(count + 1);
//   }
  
//   const DecreaseCount = () => {
//     setCount(count - 1);
//   }
  
//   const ResetCount = () => {
//     setCount(0);
//   }
  
//   // setInterval(
//     //   IncreaseCount
//     // , 1000);
    
//     // Conditional Rendering
//     const isVisibble = true ;
//     const first = props.first
//     return (
//       <>
//       <div>
//         <h1>Counter: {count} </h1>
//       </div>
//       <button onClick={IncreaseCount} >Increase Count</button>
//       <button onClick={DecreaseCount} >Decrease Count</button>
//       <button onClick={ResetCount} >Reset Count</button>

//       <div>
//         <h1>Conditional Rendering Example</h1> 
//         {isVisibble? <h1>Visible Now</h1> : <h1>InVisible Now</h1> }  {/* 1.Use this Conditional Rendering, when true and false both have some value */}
//         {isVisibble && <h1>Visible Now</h1>} {/* 1.Use this Conditional Rendering, when we don't have to show on anther condition */}
//       </div>
//       <div>
//         {first && <h1>first</h1>}
//       </div>
//     </>  
//   )
// }
// function Counters(props)
// {
//   const [count, setCount] = useState(0)
  
//   useEffect(() => {

//     // runs when component mounts
//     console.log("Hello from useEffect");

//     // runs when component unmounts
//     return function() {
//       // clearInterval(clock);
//     }
//   }, []) // dependency array, cleanup, fetch inside use


//   const IncreaseCount = () => {
//     setCount(count + 1);
//   }

//   const DecreaseCount = () => {
//     setCount(count - 1);
//   }

//   const ResetCount = () => {
//     setCount(0);
//   }

//   // setInterval(
//   //   IncreaseCount
//   // , 1000);

//   // Conditional Rendering
//   const isVisibble = true ;
//   const first = props.first
//   return (
//     <>
//       <div>
//         <h1>Counter: {count} </h1>
//       </div>
//       <button onClick={IncreaseCount} >Increase Count</button>
//       <button onClick={DecreaseCount} >Decrease Count</button>
//       <button onClick={ResetCount} >Reset Count</button>

//       <div>
//         <h1>Conditional Rendering Example</h1> 
//         {isVisibble? <h1>Visible Now</h1> : <h1>InVisible Now</h1> }  {/* 1.Use this Conditional Rendering, when true and false both have some value */}
//         {isVisibble && <h1>Visible Now</h1>} {/* 1.Use this Conditional Rendering, when we don't have to show on anther condition */}
//       </div>
//       <div>
//         {first && <h1>first</h1>}
//       </div>
//     </>  
//   )
// }

// const ItemList = ({items}) => {

//   return (
//     <>
//       <ul>
//         {items.map((item) => (
//           <li key={item.id} >{item.name}</li>
//         ))}
//       </ul>
//     </>
//   )
// }

// export default function App(){

//   const items = [
//       {id: 1, name: "Pencil"},
//       {id: 2, name: "Eraser"},
//       {id: 3, name: "Pen"},
//     ]

// return <ItemList items={items} />
// }

// ----------------------------- Error Boundary -------------------------

// import ErrorBoundary from "./ErrorBoundary";

// export default function App() {
//   return (
//     <div>
//       <h1>---------------------- My App: First ----------------------</h1>
//       <ErrorBoundary>  {/* Using Error Boundary */}
//         <Counter />
//       </ErrorBoundary>
//       <h1>---------------------- Second ----------------------</h1>
//         <Counters />
//     </div>
//   );
// }


// -------------------------------------------------------------------------


// ------------------------- Routing in React ------------------------------

// import { useRef } from "react";
// import {BrowserRouter as Rushi, Routes, Route, Link, useNavigate, Outlet} from "react-router-dom";

// export default function App() {
//   return (
//     <>
//     <Rushi>
//       <Routes>
//         <Route path="/" element={<Layout/>} >
//           <Route path="/" element={<Home/>} />
//           <Route path="/class11" element={<Class11/>} />
//           <Route path="/class12" Component={Class12} />
//           <Route path="*" Component={ErrorPage} />
//         </Route>
//       </Routes>
//     </Rushi>
//     </>
//   )
// }

// function Layout(){
//   return (
//     <div style={{height:"100vh"}}>
//       <Header/>
//       <div style={{height: "70vh"}} >
//         <Outlet/>
//       </div>

//       <Footer/>

//     </div>
//   )
// }

// function Header(){
//   return (
//     <>
//       <Link to="/">Home</Link> |
//     | <Link to="/class11">Class 11</Link> |
//     | <Link to="/class12">Class 12 </Link>
//     </>
//   )
// }
// function Footer(){
//   return (
//     <>
//     <h2>Footer</h2>
//     </>
//   )
// }

// function Home() {
//   return (
//     <>
//     <h2>Home Page</h2>
//     <InputFocus/>
//     </>
//   )
// }

// function Class11() {
//   return (
//     <>
//     <h2>Class 11 Content</h2>
//     </>
//   )
// }

// function Class12() {
//   const navigate = useNavigate();

//   function redirectUser(){
//     navigate("/")
//   }

//   return (
//     <>
//     <h2>Class 12 Content</h2>
//     <button onClick={redirectUser}>Go Back To Landing Page</button>
//     </>
//   )
// }

// function ErrorPage() {
//   return (
//     <>
//     <h2>Error ! Page Not Found </h2>
//     </>
//   )
// }

// function InputFocus(){
//   const inputRef = useRef(null);

//   function focusIt(){
//     inputRef.current.focus(); 
//   }

//   return (
//     <>
//     <input ref={inputRef} type="text" placeholder="Click the button and see me focused" style={{width: "220px"}} />
//     -----
//     <button onClick={focusIt} >Click me! buddy</button>
//     </>
//   )

// }


// ---------------------------------- useRef ------------------------------

// 1. It persists values/data across re-renders --> count renders
// 2. Access DOM Nodes
// 3. Tracking prev values

import { useEffect } from "react";
import { useRef, useState } from "react"; 

export default function App(){

  const [name, setName] = useState('');
  const renderCount = useRef(0);
  const inputRef = useRef(null);
  const prevName = useRef('');
  // {current: 0}

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  })

  const focusHandler = () => {
    inputRef.current.focus(); // inputRef.current --> <input value>
  }

  useEffect(() => { 
    prevName.current = name
  }, [name]);

  return (
    <>
    <h2>Dev-100x</h2>
    <input ref={inputRef} type="text" placeholder="Name" onChange={e => setName(e.target.value)} />
    <h1>Hello my name is {name} | It used to be {prevName.current}</h1>
    <h1>This page is rendered {renderCount.current} time.</h1>
    <button onClick={focusHandler}>Focus Input Box</button>
    </>
  )
}

