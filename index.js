const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser')
// const dotenv=require('dotenv')
const task=require('./routes/tasks')
const path=require('path')


// dotenv.config({path:'./config/config.env'})

const app=express();

app.use(bodyParser.json());

const db=require('./config/key').mongoURI;

mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>console.log("mongo db connected"))
    .catch(err=>console.log(err))



app.use('/api/task',task)

if(process.env.NODE_ENV=== "production"){
    app.use(express.static('todo-list/build'));

    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'todo-list','build','index.html'));
    })
}

const port=process.env.PORT || 5000;
app.listen(port,()=>console.log("server running on "+port))
