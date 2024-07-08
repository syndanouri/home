const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = require('../models/userModel');
//  const Annonce = require('../models/annonceModel');  // schema annonce

require('dotenv').config();
// handel register

exports.register = async(req,res)=>{
try{
   const{name,email,password} = req.body;
   // test 3le l existance mte3 l email 
   const exist = await userSchema.findOne({email});
   if(exist){
    return res.status(400).json({msg:"email already exist"})
   }
   // bech nabda n3amel el creation du compte
   const newUser = await new userSchema(req.body);
   // cryptage
   const saltRounds = 10;
   const salt = bcrypt.genSaltSync(saltRounds);
   const hash = bcrypt.hashSync(password,salt); // password hashed
   // newUser {name:'',email:'',password:'hashed password'}
   newUser.password = hash 
     newUser.save(); // enregistre l'objet fel database
     res.status(200).json({msg:'user created',newUser})

}catch(err){
    res.status(500).json({msg:'can not create this user'})
}
}


// handel login

exports.login= async(req,res)=>{
try {
    const {email,password} = req.body;
    // search for email existance
    const found = await userSchema.findOne({email});
    if(!found){
        return res.status(400).json({msg:"invalid email or password"})
    }

    const match = await bcrypt.compare(password,found.password);
    if(!match){
        return res.status(400).json({msg:"invalid email or password"})
    }
    // w ken el pwd ta3mel match (password === found.password)
    // na3tiw el user mte3na token 
     const payload = {id: found._id,email:found.email};
     const token = jwt.sign(payload,process.env.private_key);
     res.status(200).json({msg:"user logged In",token,found})
} catch (error) {
    res.status(500).json({msg:"you can not log in now"})
}
}

exports.getAllUsers = async(req,res)=>{

    try {
       const result = await userSchema.find({})
       res.status(200).json({msg:"list of all users",result}) 
    } catch (error) {
        res.status(500).json({msg:"can not get the users no token "})
    }
}


// create annnce

// exports.createAnnonce = async(req,res)=>{

//     try {
//        const {id} = req.user;  // decodage mte3 token bech ya3tini fi id 
//        const {categorie,price,Types,location,picture}= req.body;

//        const newAnnonce = await  new Annonce({categorie,price,Types,location,picture, user: id});
//       newAnnonce.save();
//        res.status(200).json({msg:"annonce created",newAnnonce})

//     } catch (error) {
//         res.status(500).json({msg:"can not create this annonce"})
//     }
// }

// // get annonce with id 

// exports.getAnnonceById = async(req,res)=>{
//     const {id} = req.params;
//     try {
//         const result = await Annonce.findById(id).populate('user')
//         res.status(200).json({msg:"annonce detail",result})
//     } catch (error) {
//       res.status(500).json({msg:"server error"})  
//     }
// }
// exports.getAllAnnonce = async(req,res)=>{
    
//     try {
//         const result = await Annonce.find({})
//         res.status(200).json({msg:"list of annonces",result})
//     } catch (error) {
//       res.status(500).json({msg:"server error"})  
//     }
// }