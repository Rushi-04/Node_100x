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
// 2. Access DOM Nodes ( Most Common Use )
// 3. Tracking prev values

// import { createContext, useEffect } from "react";
// import { useRef, useState, useContext } from "react";
// const UserContext = createContext();


// function UserProvider({ children }) {
//   const [naav, setNaav] = useState('Rushi');

//   return (
//     <UserContext.Provider value={{
//       naav: naav
//     }}>
//       {children}
//     </UserContext.Provider>
//   )
// }


// export default function App() {

//   const [name, setName] = useState('');
//   const renderCount = useRef(0);
//   const inputRef = useRef(null);
//   const prevName = useRef('');
//   // {current: 0} 

//   useEffect(() => {
//     renderCount.current = renderCount.current + 1;
//   })

//   const focusHandler = () => {
//     inputRef.current.focus(); // inputRef.current --> <input value>
//   }

//   useEffect(() => {
//     prevName.current = name
//   }, [name]);



//   return (
//     <>
//       <h2>Dev-100x</h2>
//       <input ref={inputRef} type="text" placeholder="Name" onChange={e => setName(e.target.value)} />
//       <h1>Hello my name is {name} | It used to be {prevName.current}</h1>
//       <h1>This page is rendered {renderCount.current} time.</h1>
//       <button onClick={focusHandler}>Focus Input Box</button>
//       <h1>----------------------------------------------</h1>

//       <UserProvider>
//         <Dashboard />
//       </UserProvider>
//     </>

//   )
// }



// function Dashboard() {
//   return (
//     <>
//       <h1>Dashboard Here</h1>
//       <Home />
//     </>
//   )
// }

// function Home() {
//   const { naav } = useContext(UserContext);
//   return (
//     <>
//       <h1>Home Here: {naav}</h1>
//     </>
//   )
// }

// function Intro() {
//   return (
//     <>
//       <h1>Intro Here</h1>
//     </>
//   )
// }

///// Coustom Hooks - A custom hook should start with use , should use another hook under the hood and return something / states / values

// import { useState } from "react"


// function useCounter() {
//   const [count, setCount] = useState(0);
  
//   const IncreaseCount = () => {
//     // setCount(count+1);
//     setCount(count => count + 1);
//   }
//   return{
//     count: count,
//     IncreaseCount: IncreaseCount
//   }
// }

// function Counter() {
  
//   const {count, IncreaseCount} = useCounter();
//   return (
//     <>
//     <h1>Hello from App</h1>
//     <h2>Count: {count}</h2>
//     <button onClick={IncreaseCount} >Increase</button>
//     </>
//   )

// }

// export default function App() {

//   return (
//     <>
//     <Counter/>
//     <Counter/>
//     </>
//   )
// }

// 1. useFetch, usePrev, useDebounce Hook

// import { useEffect, useState } from "react";
// import { useEffect, useState } from "react";
// import {useDebounce, useFetch, usePost1, usePrev} from "./Hooks/useFetch";

// export default function App () {
//   const [count, setCount] = useState(0);
//   const prev = usePrev(count);
//   // const post = usePost1();
//   const post = useFetch("https://jsonplaceholder.typicode.com/posts/1");

//   const [value, setValue] = useState();
//   const debouncedValue = useDebounce(value, 700);


//   useEffect(() => {
//     // Exprensive Operation
//     console.log("Expensive Operation.")
//   }, [debouncedValue]);

//   return (
//     <>
//     <h1>Hello from App: {debouncedValue}</h1>
//     <br />
//     <h1>User Id</h1>  
//     <h2>{post.userId}</h2>

//     <h1>Title</h1>
//     <h2>{post.title}</h2>

//     <h1>Body</h1>
//     <h2>{post.body}</h2>
//     <br />
//     <h3>Count: {count}, PrevCount: {prev}</h3>
//     <button onClick={() => setCount(curr => curr + 1)}>Click Me!</button>
//     <br />
//     ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//     <div>
//       <h1>Search </h1>
//       <span>See useDebounce in Action: </span>
//       <input onChange={(e) => setValue(e.target.value)} type="text" placeholder="Search here... See in Console" style={{width: "200px"}}/>
      
//     </div>
//     </>
//   )
// }


// Recoil for State Management

// 1. Creating a simple counter app with useState Only

// import {useState} from "react";

// export default function App() {

//   const [count, setCount] = useState(0);

//   return <>
//   <div>
//     <button onClick={() => setCount(coumnt => count + 1)} >Increase</button> --- <button onClick={() => setCount(coumnt => count - 1)} >Decrease</button>
//   </div>
//   <h1>Counter: {count}</h1>
//   </>
// }


// 2. Creating a simple counter app with Context API

// import {useState, useContext, createContext} from "react";

// const CounterContext = createContext();

// function CounterProvider({children}){
//   const [count, setCount] = useState(0);

//   return <CounterContext.Provider value={{count, setCount}}>
//     {children}
//   </CounterContext.Provider>

// }

// export default function App() {

//   return <>
//   <br />
//   <CounterProvider>
//     <Counter/>
//   </CounterProvider>
//   </>
// }

// function IncreaseCount(){
//   const {count, setCount} = useContext(CounterContext);
//   return <button onClick={() => setCount(count => count + 1)} >Increase</button>
// }

// function DecreaseCount(){
//   const {count, setCount} = useContext(CounterContext);
//   return <>
//     <button onClick={() => setCount(count => count - 1)} >Decrease</button>
//   </>
// }

// function Counter(){
//   const {count} = useContext(CounterContext);

//   return <>
//     <IncreaseCount/> =
//       = <DecreaseCount/>
//     <h2>Counter: {count}</h2>
//   </>
// }

// 3. Creating a simple counter app with Recoil

// import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
// import { counterAtom, evenSelector } from "./Store/atoms/counter";

// export default function App() {

//   return (
//   <RecoilRoot>
//     <MainCounter/>
//   </RecoilRoot>
//   )
// }

// function IncreaseCount(){
//   const setCount = useSetRecoilState(counterAtom);
//   return (
//   <button onClick={() => setCount(count => count + 2)} >Increase</button>
//   );
// }

// function DecreaseCount(){
//   const setCount = useSetRecoilState(counterAtom);
//   return (
//     <button onClick={() => setCount(count => count - 1)} >Decrease</button>
//   );
// }

// function MainCounter(){
 

//   return (
//   <>
//     <IncreaseCount/> =
//       = <DecreaseCount/>
//     <Counter/>
//     <IsEven/>
//   </>
//   )
// }

// function Counter(){
//   const count = useRecoilValue(counterAtom);
//   return (
//     <h2>Counter: {count}</h2>
//   )
// }

// function IsEven(){
//   const even = useRecoilValue(evenSelector);
//   console.log(even)
//   return (
//   <div>
//     {even? "Even": "Odd"}
//   </div>
//   )
// }


// Recoil Deep Dive


// Atoms and Selectors

// import { RecoilRoot, useRecoilValue } from "recoil"
// import { AllNotifications, notificationAtom } from "./Store/atoms/notifications";

// export default function App(){

//   return (
//     <RecoilRoot>
//       <MainApp/>
//     </RecoilRoot>
//   )
// }


// export const MainApp = () => {

//   const notification = useRecoilValue(notificationAtom);
//   const allNotification = useRecoilValue(AllNotifications);
//   console.log(notification)


//   return (
//     <>
//       <button>Home</button>-
//       <button>My Network ({notification.network})</button>-
//       <button>Jobs ({notification.jobs})</button>-
//       <button>Messaging ({notification.messaging})</button>-
//       <button>Notifications ({notification.notifications})</button>-
//       <button>Me: ({allNotification})</button>
//     </>
//   )
// }


// AtomFamily 

// Counter 
import { RecoilRoot, useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import { counterAtomFamily, todoAtomFamily } from "./Store/atoms/atmFamily";

export default function App() {

  return (
    <RecoilRoot>
      <Counter id={1}/>
      <Counter id={1}/>
      <Counter id={2}/>
      <Counter id={3}/>
      <TodoItem id={1}/>
      <TodoItem id={1}/>
      <TodoItem id={2}/>

    </RecoilRoot>
  )
}



const Counter = ({id}) => {

  return (
    <>
      <ShowCount id={id}/>
      <Increase id={id}/>
      <Decrease id={id}/>
    </>
  )
}

const ShowCount = ({id}) => {
  const count = useRecoilValue(counterAtomFamily(id));
  return (
    <>
      <h1>Counter: {count}</h1>
    </>
  )
}

const Increase = ({id}) => {
  const setCount = useSetRecoilState(counterAtomFamily(id));
  return (
    <>
      <button onClick={() => {setCount(c => c + 1)}} >Increase +</button>
    </>
  )
}

const Decrease = ({id}) => {
  const setCount = useSetRecoilState(counterAtomFamily(id));
  return (
    <>
      <button onClick={() => {setCount(c => c - 1)}} >Decrease -</button>
    </>
  )
}


function TodoItem({ id }) {
  const [todo, setTodo] = useRecoilState(todoAtomFamily(id));

  return (
    <div>
      <input
        type="text"
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={(e) => setTodo({ ...todo, completed: e.target.checked })}
      />
      <span>{todo.completed ? "✅ Done" : "⏳ Pending"}</span>
    </div>
  );
}