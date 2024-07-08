const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
// const Annonce = require("../models/annonceModel");

exports.isAuth = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    // decodage
    const decoded = jwt.verify(token, process.env.private_key);
    if (!decoded) {
      return res.status(400).json({ msg: "client error" });
    }
    // else implicite
    const user = await User.findById(decoded.id);
    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({ msg: "you are not allowed to do this action" });
  }

  //   const annonces = await Annonce.findById(decoded.id);
  //   req.annonces = annonces;
};
