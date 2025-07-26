const express = require('express');
const Todo = require('./models/todo');
const router = express.Router();

router.post("/send", async (req, res) => {
    try {
        const { name, email, age, dept, branch } = req.body;
        const newTodo = new Todo({ name, email, age, dept, branch });
        const savedTodo = await newTodo.save();
        res.status(201).json({ message: 'Todo Added', todo: savedTodo });  // ✅ corrected variable
    } catch (error) {
        res.status(500).json({ message: "Failed", error: error.message });
    }
});
router.get("/all",async(req,res)=>{
    try{
        const todos =await Todo.find();
        res.status(200).json(todos);
    }catch(error){
        res.status(500).json({ message: "Failed to fetch todos", error: error.message })
    }

});

// Delete todo by ID
router.delete("/delete/:id", async (req, res) => {
    try {
        const todoId = req.params.id;
        const deletedTodo = await Todo.findByIdAndDelete(todoId);

        if (!deletedTodo) {
            return res.status(404).json({ message: "Todo not found" });
        }

        res.status(200).json({ message: "Todo deleted", todo: deletedTodo });
    } catch (error) {
        res.status(500).json({ message: "Delete failed", error: error.message });
    }
});


module.exports = router;
