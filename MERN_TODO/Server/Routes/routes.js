const express = require('express');
const router = express.Router();
const {getAllTodo, createTodo, delTodo, updateTodo} = require('../Controller/todoController')

// creating the get req
router.get('/todo', getAllTodo);

router.post('/todo',createTodo);

router.put('/todo/:id',updateTodo);

router.delete('/todo/:id',delTodo);

module.exports = router;