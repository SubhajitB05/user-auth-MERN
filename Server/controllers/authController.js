const userModel = require('../models/users');

const test = (req, res)=>{
    return res.json('Working Fine');
}
const registerUser = async (req, res)=>{
    try{
        const {name, email, password, confirmPassWord} = req.body;
        if(!name){
            return res.json({error: 'Name is required'});
        }
        if(!password || password.length < 8){
            return res.json({error: "Password must be at least 8 characters long"});
        }
        else if(password.length > 13){
            return res.json({error: "Password must be less than 13 characters long"});
        }
        if(password !== confirmPassWord){
            return res.json({error: "Password not matched"});
        }
        const emailExist = await userModel.findOne({email});
        if(emailExist){
            return res.json({error: 'Email already exist'});
        }
        const newUser = await userModel.create({
            name, email, password
        })
        return res.json(newUser);

    }
    catch(error){
        console.log(error);
    }
}


const loginUser = async(req, res)=>{
    try{
        const {email, password} = req.body;
        if(!email){
            return res.json({error: 'Email is required'});
        }
        if(!password){
            return res.json({error: 'Password is required'});
        }
        const user = await userModel.findOne({email});
        if(!user){
            return res.json({error: 'User not found. Please check the details entered'});
        }
        else{
            if(user.password !== password){
                return res.json({error: 'Incorrect Password'});
            }
        }
        return res.json(user);
    }
    catch(err){
        console.log(err);
    }
}


module.exports = {
    test,
    registerUser,
    loginUser,
    // userDashboard

}