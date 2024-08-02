const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/mydb')
.then(()=>{
    console.log("mongodb connected");
})
.catch((error)=>{
    console.log("failed to connect");
})
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

const User = new mongoose.model("User",userSchema);

module.exports = User;
