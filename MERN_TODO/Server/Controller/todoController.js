const express = require('express');
const todo = require('../model/todoModel');
const { default: mongoose } = require('mongoose');

const createTodo = async(req, res)=>{
    try{
        const newTodo = new todo(req.body);
        await newTodo.save();
        res.json(newTodo);
    }catch{
        res.status(500).json({message: 'Server Error'});
    }
};

const getAllTodo = async (req, res) =>{
    try{
        const todos = await todo.find().sort({createdAt: -1});
        res.json(todos);
    }catch{
        res.status(500).json({message: 'Server Error'});
    }
};

const updateTodo = async(req, res)=>{
    const {id} = req.params;
    const {completed} = req.body;
    try{
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({message: 'Invalid Todo ID'});
            
        }
        const update = {completed};
        const updatedTodo = await todo.findByIdAndUpdate(id, update, {new: true})
        if(!updatedTodo){
            return res.status(404).json({message: 'No Todo with this Id'});
        }
        res.status(200).json(updatedTodo);
    }catch{
        res.status(500).json({message: 'Server Error'});
    }
};

const delTodo = async(req, res)=>{
    const {id} = req.params;
    try{
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({message: 'Invalid Todo ID'});
            
        }
        // const update = {complete};
        const deletedTodo = await todo.findByIdAndDelete(id)
        if(!deletedTodo){
            return res.status(404).json({message: 'No Todo with this Id'});
        }
        res.json(deletedTodo);
    }catch{
        res.status(500).json({message: 'Server Error'});
    }
}


module.exports = {getAllTodo, createTodo, updateTodo, delTodo}  