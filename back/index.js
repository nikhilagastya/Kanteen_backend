const express=require('express')
const app=express()
const port=5000
const mongo=require('./db');
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Request-With,Content-Type,Accept"
    )
    next();
})
app.use(express.json())


mongo()
app.get("/",(req,res)=>{
    res.send("hello")
})
app.use(require("./Routes/CreateUser"))
app.use(require("./Routes/food"))
app.use(require("./Routes/DisplayData"))
app.listen(port,()=>{
    console.log("Running on server");
})
