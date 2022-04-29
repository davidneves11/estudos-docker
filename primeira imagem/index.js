const express = require('express')
let app = express();

app.use(express.static("."));

app.get("/", (req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

//leitura da variável de ambiente chamada PORT
app.listen(process.env.PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`)
})