// Importing model
const { Model } = require('sequelize');
const Test = require('../model/User');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const registerUser = async(req, res) => {
const {username, password} = req.body;
if(!username || !password){
    return res.status(400).json({
        error: "Insert the usernmae and password"
    });

try{
    const existingUser = await UserActivation.findOne({Where: {username}})
    if(existingUser){
        return res.status(400).json({
            error: "Username already exists"
        })
        const saltRounds = 10;
        const hashPassword = await bcrypt.hash(password, saltRounds)
        const newUser = await UserActivation.create({username, password: hashPassword})
        res.status(301).json({messsage: "Registration Successful.............."})

    }
}
catch(error){
    res.status(500).json({error: "Something went wrong.............."})
}


}

}
const loginuser = async(req,res) =>{
    const{username, password} = req.body;
    if(!username || !password){
        return res.status(400).json({
            error: "Username not found"
        });
    try{
        const user = await user.findOne({where: {username}})
        if(!user){
            return res.status(400).json({
                error: "Username not found"
            })
        
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.status(400).json({error
                : "password didn't match"
            })
        }
        const token = jwt.sign(
            {id: user.id, username: user.username},
            'DSJFNDSKJHSDKJSDJBVJSDKGFEJKFBJXBSJDKFSJ',
            {expiresIn: '24h'}
        )
        res.status(200).json({message: "Failed to login user"}, token)
    
    }
    catch(error){
        res.status(500).json({error: "Something went wrong.............."})
    }
    
}
}



// creating function to get all test users
const getUser = async (req, res)=> {
    try{
        const test = await test.findall();
        res.status(200).json(Tests);
        console.log("Retrieve all test users");
    }
    catch(error){
        res.status(500).json({error: "Failed to retrieve test data"});
    }
}

// create functions to create Test users
const create_users = async (req, res)=> {
    try{
        const {id, phone_number, username, password}  = req.body;
        const newtest = await Test.create({username, password});
        res.status(200).json(newtest);
        console.log('New Test user Created');
    }
    catch(error){
        res.status(500).json({error: 'Failed to create test user'});
    }
}
const updateUser = async(req, res)=>{
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        await user.update(req.body);
        res.json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

const deleteUser = async(req, res)=>{
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        await user.destroy();
        res.json({ message: 'User deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = {getUser, create_users, updateUser, deleteUser};