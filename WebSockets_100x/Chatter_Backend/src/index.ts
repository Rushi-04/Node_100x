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


// import { WebSocketServer, WebSocket } from "ws";

// const wss = new WebSocketServer({port: 8080});

// let allSockets: WebSocket[] = [];
// let user = 0;

// wss.on("connection", (socket) => {
//     allSockets.push(socket);
//     user++;

//     console.log("#"+user+" Connected to WebSocket.")
    
//     socket.on("message", (msg) => {
//         allSockets.forEach((skt) => {
//             skt.send("Msg from Server: "+msg.toString());
//         })
//     });


//     socket.on("close", () => {
//         allSockets = allSockets.filter(x => x !== socket)
//     })
// });

// -------------- Room Based : Chat application ------------

/*

Join Schema 
{
    "type": "join",
    "payload": {
        "roomId": 121
    }
}

Chat Schema 
{
    "type": "chat",
    "payload": {
        "message": "Kas Kay Mandali !"
    }
}

*/

import { WebSocketServer, WebSocket } from "ws";

// websocket server
const wss = new WebSocketServer({port: 8080});

interface User {
    socket: WebSocket,
    room: string
}

// 
let allSockets: User[] = [];

// on connection
wss.on("connection", (socket) => {
    
    // on message
    socket.on("message", (message) => {
        // convert message as string to json
        console.log("parsed")
        const parsedMessage = JSON.parse(message as unknown as string);
        
        console.log("parsedMessage: ", parsedMessage)
        // If wants to join 
        if(parsedMessage.type == "join"){
            allSockets.push({
                socket: socket,
                room: parsedMessage.payload.roomId
            });
        }
        
        // If wants to chat
        if(parsedMessage.type == "chat"){
            const currentUserRoom = allSockets.find((x) => x.socket == socket)?.room

            allSockets.forEach((storedSocket) => {
                if(storedSocket.room == currentUserRoom){
                    storedSocket.socket.send(parsedMessage.payload.message);
                }
            });
        }

    });

    socket.on("close", () => {
        allSockets = allSockets.filter((x) => x.socket != socket);
    })
});