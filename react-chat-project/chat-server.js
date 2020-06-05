const express=require("express")
const app=express()

const server=require("http").createServer(app)
const port=7777

server.listen(port,()=>{
    console.log("Chat Server Start...")
})

const socketio=require('socket.io')
const io=socketio.listen(server)

///////////////////// 채팅 서버 nodeJS => socket(webSocket)



/*
      public class Server {
         ServerSocket ss;
         public Server() {
            ss=new SererSocket(7777);
         }
         public void run() {
            Socket s=ss.accept();
         }
      }
 */
// 클라이언트가 요청
// 접속이 되었다면 socket 하나를 만든다
io.on('connection',(socket)=>{
    socket.on('chat_msg',(msg)=>{
        console.log(msg)
        io.emit('chat_msg',msg) // 접속한 모든 유저에 데이터 전송
    })
})