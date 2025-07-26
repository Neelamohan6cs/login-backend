const express =require('express');
const User = require('./models/User');
const router =express.Router();


router.get('/',(req,res)=>{
    res.send('this is home page');

});

router.get('/menu',(req,res)=>{
    res.send('this is  menu datas');
});
router.get('/data',(req,res)=>{
    const userData={
        name: 'Neelamohan',
        age: 21,
        course: 'Node.js',
        isActive: true
    };
    res.json(userData);
})

//post route to add users
router.post("/add-user",async (req,res)=>{
    try{
        const {name,email,age}=req.body;
        const newUser =new User({name,email,age});
        const savedUser= await newUser.save();
        res.status(201).json({message:'User Added',user:savedUser});

    }catch(error){
        res.status(500).json({message:"faild",error:error.message});
    }
});
router.get("/users",async(req,res)=>{
    try{
        const users=await User.find();
        res.status(200).json(users);
    }catch(error){
        res.status(500).json({message:"faild to fetch",error});
    }
});

router.delete('/users/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const deletedUser = await User.findByIdAndDelete(userId); // use deletedUser

        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({ message: 'User deleted successfully', user: deletedUser });
    } catch (error) {
        res.status(500).json({ message: 'Delete failed', error: error.message });
    }
});



module.exports = router;