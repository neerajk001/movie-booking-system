import express from 'express'
import dotenv from 'dotenv'
import { mongoConnect } from './lib/mongoConnect.js';
dotenv.config()
const PORT =3000;


const app = express()

app.use(express.json())

app.get('/',(req , res)=>{
    res.send("hello world")
})
  


app.listen(PORT,()=>{
    mongoConnect()
    console.log(`server is running on the ${PORT} `)
    
})