// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

const annonceSchema = require("../models/annonceModel");
 const mongoose = require("mongoose");
// require("dotenv").config();   

exports.CreateAnnonce = async (req, res) => {
   const { Name, City, Type, Price, Message, Rooms } = req.body;
  try {
    const { id } = req.User; // decodage mte3 token bech ya3tini fi id
    const newAnnonce = await new annonceSchema({
      Name,
      City,
      Type,
      Price,
      Message,
      Rooms,
      user: id,
    });
    await newAnnonce.save();
    
    res.status(200).json({ msg: "annonce created", newAnnonce });
  } catch (error) {
    res.status(500).json({ msg: "can not create this annonce" });
  }
};

// exports.CreateAnnonce = async (req, res) => {
//   const { Name, City, Type, Price, Message, Rooms } = req.body;
//   try {
//     let newAnnonce = new annonceSchema({
//       user: req.user.id,
//       Name,
//       City,
//       Type,
//       Price,
//       Message,
//       Rooms,
//     });
//     await newAnnonce.save(); //enregistre lobjet in DB
//     res.status(200).json({ msg: "annonce created", newAnnonce });
//   } catch (err) {
//     res.status(500).json({ msg: "annonce not created" });
//   }
// };


exports.getAnnonceById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Annonce.findById(id).populate("user");
    res.status(200).json({ msg: "annonce detail", result });
  } catch (error) {
    res.status(500).json({ msg: "server error" });
  }
};
exports.getAllAnnonces = async (req, res) => {
  try {
    const result = await Annonce.find({});
    res.status(200).json({ msg: "list of annonces", result });
  } catch (error) {
    res.status(500).json({ msg: "server error" });
  }
};
