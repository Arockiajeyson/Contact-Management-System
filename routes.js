const express =require('express')
const app =express()
const Schema =require('./schema')

app.post('/v1/contacts',async(req,res)=>{
    try {
        const cre = await Schema.create(req.body)
        return res.status(201).json(cre)
    } catch (error) {
        return res.json({error:`Missing required field :  ${error.message}`})
    }
})
app.get('/v1/contacts',async(req,res)=>{
    try {
        const finding =await Schema.find()
        return res.status(200).json(finding)
    } catch (error) {
        return res.json(error.message)
    }
})

app.get('/v1/contacts/:id',async(req,res)=>{
    try {
        const finding =await Schema.findOne({_id:req.params.id})
        if(finding){
            return res.status(200).json(finding)
        }
    } catch (error) {
        return res.status(404).json({
            error: "There is no contact with that id"
        })
    }
})

app.delete('/v1/contacts/:id',async(req,res)=>{
    try {
        const del =await Schema.deleteOne({_id:req.params.id})
        return res.status(204).json("Successfully Deleted")
    } catch (error) {
        return res.status(404).json({
            error: "There is no contact with that id"
        })
    }
})
app.put('/v1/contacts/:id',async(req,res)=>{
    try {
        const up =await Schema.updateOne({_id:req.params.id},req.body)
        return res.status(204).json("Successfully updated")
    } catch (error) {
        return res.status(404).json({
            error: "There is no contact with that id"
        })
    }
})

app.patch('/v1/contacts/:id',async(req,res)=>{
    try {
        const up =await Schema.updateOne({_id:req.params.id},req.body)
        return res.status(204).json("Successfully updated")
    } catch (error) {
        return res.status(404).json({
            error: "There is no contact with that id" 
        })
    }
})
module.exports=app