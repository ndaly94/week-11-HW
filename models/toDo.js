const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const toDoSchema = new mongoose.Schema({
    title: { type: String, required: true }, 
    description: { type: String },
    completed: { type: Boolean, default: false },
    created_at: { type: Date, default: Date.now }
})

const toDo = mongoose.model('User', toDoSchema)

module.exports = ToDo;