const http = require('http');
const fs = require('fs')
const express = require('express')
const route = require('./api/route/route')
// const publicPath = __dirname+'/'
const app = express();

app.use('/',route)
// 
app.get('/',(req,res)=>{
    res.send('Home')
})


app.listen(4000);