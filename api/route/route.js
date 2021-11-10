const express = require('express');
const route = express.Router();
const validation = require('./validation.js')
// permission
route.get('/dangki/nckh',(req,res)=>{
    res.send('Đăng kí -NCKH');
});
route.get('/dangki/td',(req,res)=>{
    res.send('Đăng kí -Thi đua');
})
route.get('/check/dknckh',(req,res)=>{
    res.send('ADmin duyêt (KHOA) - NCKH');
})
route.get('/check/dktd',(req,res)=>{
    res.send('ADmin duyêt (Trường) -Thi đua');
})
route.get('/lastcheck/nckh',(req,res)=>{
    res.send('ADmin + teacher duyêt (Trường) -Thi đua');
})

route.get('/storage/td',(req,res)=>{
    res.send('ADmin + teacher duyêt (Trường) -Thi đua');
})

route.get('/print/td',(req,res)=>{
    res.send('ADmin + teacher LƯU TRỮ -SỬA (Trường) -Thi đua');
})
module.exports = route;

