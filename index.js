const express =require('express')
const app =express()
const mongoose =require('mongoose')
app.use(express.json())
app.use(express.urlencoded())
app.use('/',require('./routes'))
app.listen(3000,async()=>{
    await mongoose.connect('mongodb+srv://Aro:aro123@arockiajeyson.aswzaya.mongodb.net/?retryWrites=true&w=majority')
    console.log('dbConnected')
    console.log('port is up')
})