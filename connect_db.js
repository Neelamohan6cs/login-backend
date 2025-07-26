const mongoose = require('mongoose');

const connectDb =async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log('✅ Connected to MongoDB');

    } catch(err){
        console.log("error showing :" ,err.message);
        process.exit(1);
    }

};
module.exports=connectDb;