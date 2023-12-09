import mongoose, { Schema } from "mongoose";

const user=new Schema({
    username:String,
    email:String,
    usertype:{
        type:String,
        enum:["user","admin"],
        default:"user"
    },
    adminId:String
    
});
export default mongoose.model('user', user);









