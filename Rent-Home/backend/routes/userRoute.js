const express = require("express");
const {
  register,
  login,
  getAllUsers,
  //  CreateAnnonce,
  //  getAnnonceById,
  //  getAllAnnonces,
} = require("../controllers/user");

const { 
  CreateAnnonce,
  getAnnonceById,
  getAllAnnonces,
} = require("../controllers/annonces");

const { isAuth } = require("../middelwares/isAuth");
// const { Authannonce } = require("../middelwares/Authannonce");
// const { CreateAnnonce } = require("../controllers/annonces");

const userRoute = express.Router();

userRoute.post("/register", register);
userRoute.post("/login", login);
userRoute.get("/list", isAuth, getAllUsers);

 userRoute.post("/CreateAnnonce", isAuth, CreateAnnonce);
 userRoute.get("/Annonces/:id", getAnnonceById);
 userRoute.get("/annonce", getAllAnnonces);
 // // userRoute.post("/deleteAnnonce", isAuth, DeleteAnnonce);


// userRoute.post('/add',isAuth,CreateAnnonce);
module.exports = userRoute;
