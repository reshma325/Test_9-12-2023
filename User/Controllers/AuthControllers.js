import UserModel from "../Models/UserModel.js";



export const createUser = async (req, res) => {
    try {
        console.log("1")
        const { username, email, usertype } = req.body;
        console.log(req.body, "2")
      
        if (username && email && usertype) {
            if (usertype === "admin" || usertype === "user") {
                const user = await new UserModel({ username, usertype, email });
                await user.save();
                console.log(user,"3")

                return res.status(200).json({ success: true, message: "Created user successfully!", user: { name: username, type: usertype } })
            } else {
                return res.status(401).json({ success: false, message: "type can either be Admin or User" })
            }
        } else {
            return res.status(401).json({ success: false, message: "fill all fields" })
        }


    } catch (error) {
        return res.status(500).json({ success: false, message: "Something went wrong,Try again after sometime" })
    }
}


export const deleteUser=()=>{
    
}