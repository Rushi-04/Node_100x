// import { WebSocketServer } from "ws";

// const wss = new WebSocketServer({ port: 8080});

// wss.on("connection",  (socket) => {
//     console.log("Someone connected !");

//     socket.on("message", (event) => {
//         const realMessage = event.toString();
//         setTimeout(()=>{
//             if(realMessage.toLowerCase() === "ping"){
//                 socket.send("Pong");
//                 console.log("Pong")
//             }else{
//                 socket.send(realMessage);    
//                 console.log(realMessage);
//             }
//         }, 100)
//     });


// });


// Server --> Client  done
// Client --> Server  done

// --------- Chatter: Broadcast Chat Application ------------


import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({port: 8080});

let allSockets: WebSocket[] = [];
let user = 0;

wss.on("connection", (socket) => {
    allSockets.push(socket);
    user++;

    console.log("#"+user+" Connected to WebSocket.")
    
    socket.on("message", (msg) => {
        allSockets.forEach((skt) => {
            skt.send("Msg from Server: "+msg.toString());
        })
    });


    socket.on("close", () => {
        allSockets = allSockets.filter(x => x !== socket)
    })
});

