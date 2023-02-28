const mongoose = require('mongoose')

const models = new mongoose.Schema({
    firstName: { type: String,required:true },
    lastName: { type: String,required:true},
    email: { type: String ,required:true ,unique:true},
    phone: { type: Number ,required:true ,unique:true}
})
const m = mongoose.model('ContactMan',models)

module.exports =m