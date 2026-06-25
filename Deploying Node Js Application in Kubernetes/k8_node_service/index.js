const express = require('express')
const os = require('os')


const app = express()
const PORT = 3000

app.get("/", (req , res)=>{
    const message = `Hello World , I am Pod ${os.hostname()} : Version 1.2.0 `
    res.send(message)
}) 

app.listen(PORT, ()=>{
    console.log(`Web Server is listening at port ${PORT}`)
    console.log(os.hostname())
})