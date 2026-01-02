import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080});

wss.on("connection",  (socket) => {
    console.log("Someone connected !");

    socket.on("message", (event) => {
        const realMessage = event.toString();
        setTimeout(()=>{
            if(realMessage.toLowerCase() === "ping"){
                socket.send("Pong");
                console.log("Pong")
            }else{
                socket.send(realMessage);
                console.log(realMessage);
            }
        }, 100)
    });


});


// Server --> Client  done
// Client --> Server  done
