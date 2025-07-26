const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    age: Number,
    dept: {
        type: String,
      
    },
    branch: {
        type: String,
        
    }
});

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;
