const patientDb = require('../models/patient.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');

const register = async (req, res)=>{
    try{
        const {fullname, email, password, role} = req.body;
        const existingUser = await patientDb.findOne({email});
        if(existingUser){
            return res.status(409).json({
                success: false,
                message: "Account with this Email already exists!",
            });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await patientDb.create({fullname, email, hashedPassword, role});

        return res.status(200).json({
            success: true,
            message: "New user registered!",
        });
    }catch(err){
        console.log("Registration Error: ",err);
        res.status(500).json({
            success: false,
            message: "Server Error!",
        });
    }
}

const login = async(req, res)=>{
    try{
        const {email, password} = req.body;
        const trueUser = await patientDb.findOne({email});
        if(!trueUser){
            return res.status(401).json({
                success: false,
                message: "User with this email is not found!",
            });
        }
        const isValid = await bcrypt.compare(password, trueUser.password);
        if(!isValid){
            return res.status(401).json({
                success: false,
                message: "Invalid Password!",
            });
        }

        jwt.sign({id: trueUser._id, jti: uuidv4()}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRE});
        
        return res.status(200).json({
            success: true,
            message:"User loggedin!"
        })
    }catch(err){
        console.log("Login error: ", err);
        res.status(500).json({
            success: false,
            message: "Server error during login!",
        });
    }
}