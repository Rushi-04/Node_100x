import { useState } from "react"

function App() {

  return (
    <>
      <h1 >Hi Rushi !</h1>
    </>
  )
}



function Counter()
{
  const [count, setCount] = useState(0)

  const IncreaseCount = () => {
    setCount(count + 1);
  }

  const DecreaseCount = () => {
    setCount(count - 1);
  }

  const ResetCount = () => {
    setCount(0);
  }

  setInterval(
    IncreaseCount
  , 1000);

  return (
    <>
      <div>
        <h1>Counter: {count} </h1>
      </div>
      <button onClick={IncreaseCount} >Increase Count</button>
      <button onClick={DecreaseCount} >Decrease Count</button>
      <button onClick={ResetCount} >Reset Count</button>
    </>  
  )
}


export default Counter
