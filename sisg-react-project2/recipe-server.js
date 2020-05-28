// 서버
const express=require("express")

const app=express(); // 서버 생성
const port=3355;

app.listen(port,()=>{
    console.log("Start Server...","http://localhost:3355")
})

app.get('/recipe_data',(req,res)=>{
    res.send('Hello NodeJS')
})
