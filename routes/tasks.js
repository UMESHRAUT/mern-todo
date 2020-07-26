const express=require('express');
const router=express.Router();
// Task Model

const Task=require('../models/tasks');

router.get('/',(req,res)=>{
    Task.find()
        .sort({startAt:-1})
        .then(task=>res.json(task)).catch(err=>res.send(err))
})
router.get('/:id',(req,res)=>{
    Task.find({_id:req.params.id})
        .then(task=>res.json(task)).catch(err=>res.send(err))
})

router.post('/',(req,res)=>{
    const newTask=new Task({
        task:req.body.task
    })
    newTask.save().then(task=>res.send(task)).catch(err=>res.send(err))
})

router.patch('/:id',(req,res)=>{
    const id=req.params.id
    const update=req.body;
    Task.findByIdAndUpdate(id,update).then(ress=>res.send(ress))
})

router.delete('/:id',(req,res)=>{
    const id=req.params.id
    Task.findById(id).then(task=>task.remove().then(()=>res.json("deleted sucessfully"))).catch(()=>res.status(400).json("item does not exist"))
})

module.exports=router;