import { useEffect, useRef, useState } from "react"



function App() {

  const [socket, setSocket] = useState<WebSocket | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // new 
  type ChatMessage = {
    id: number;
    text: string;
  };

  const [messages, setMessages] = useState<ChatMessage[]>([]);

  function sendMessage() {
    if (!socket) return;
    if (!inputRef.current) return;

    const msg = inputRef.current.value;
    if(!msg) return;
    socket.send(msg);
    inputRef.current.value = "";
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>){
    if(e.key === "Enter"){
      e.preventDefault();
      sendMessage();
    }
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);

    // new 
    ws.onmessage = (event) => {
      setMessages((prev) => [
        {
          id: Date.now(),
          text: event.data
        },
        ...prev
      ])
    }



    // ws.onmessage = (event) => {
    //   alert(event.data)
    // }

    ws.onerror = (err) => {
      console.error("WebSocket error", err);
    }

    return () => {
      ws.close();
    };
  }, []);



  return (
    <div className="bg-neutral-300 h-screen">
      <div className="flex justify-center items-center h-1/2">
        <h1 className="text-emerald-800 font-serif text-7xl mt-35  ">Welcome to Chatter...</h1>
      </div>
      <div className="h-1/6 flex justify-center items-center">
        <h1 className="text-teal-900 font-serif text-3xl mt-5">Chat with Server... (Supported by WebSockets)</h1>
      </div>
      <div className="h-1/3 flex justify-center items-center">
        <div className="mb-40">

          <label className="font-serif text-xl text-black" >Chat here: </label>
          <input ref={inputRef} type="text" placeholder="Send Message" className="border py-3 px-7 m-2 rounded-2xl" onKeyDown={handleKeyDown}/>
          <button
            className="m-2 bg-teal-600 py-2 px-7 rounded-lg text-lg shadow-lg font-sans transition-transform border text-white hover:bg-teal-700 hover:shadow-md hover:translate-y-2"
            onClick={sendMessage}
          >Send</button>
        </div>

        <div className="h-40 w-100 overflow-y-auto bg-white rounded-xl shadow-md p-4 mb-6 space-y-2">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="
                  bg-emerald-400 text-white px-4 py-2 rounded-lg
                  animate-messageIn
                "
            >
              {msg.text}
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default App
