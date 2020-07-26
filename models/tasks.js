const mongoose = require('mongoose')
const Schema = mongoose.Schema;



const TaskSchema= new Schema({
    task:{
        type:String,
        required:true
    },
    startAt:{
        type:Date,
        default:Date.now()
    },
    endAt:{
        type:Date,
    },
    status:{
        type:Boolean,
        default:false
    }
})

module.exports= Task =mongoose.model('task',TaskSchema);