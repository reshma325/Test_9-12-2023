

import UserModel from "../Models/UserModel.js";



const CheckUserId=async(req,res,next)=>{
    try {
        const {adminId}=req.body;

        const user=await UserModel.findOne({_id:adminId});
       
        if(user && user.usertype==="admin"){
          next();
           
        }else{
            return res.status(401).json({success:false,message:"Only Admin can create users"})
        }
        
    } catch (error) {
        return res.status(500).json({success:false,message:"something went wrong in middleware,please try again after sometime"})
    }
}
export default CheckUserId