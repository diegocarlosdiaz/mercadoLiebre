const express = require('express')
const app = express()
const path = require('path')
const port = 3030


app.use(express.static('public'));

app.get('/',(req,res) => res.sendFile(path.join(__dirname,'views','home.html')))
app.get('/login.html',(req,res) => res.sendFile(path.join(__dirname,'views','login.html')))
app.get('/register.html',(req,res) => res.sendFile(path.join(__dirname,'views','register.html')))


app.listen(port,()=> console.log("Servidor funcionando en el puerto" + port))

