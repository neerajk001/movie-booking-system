import express from 'express'
const PORT =3000;

const app = express()

app.get('/',(req , res)=>{
    res.send("hello world")
})
 


app.listen(PORT,()=>{
    console.log(`server is running on the ${PORT} `)
})