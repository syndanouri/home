const mongoose = require('mongoose');

const annonceSchema = new mongoose.Schema({

    Name: String,
    City: String,
    Type: String,
    Rooms: String,
    Price : Number,
    Message: String,
    user:{
        type: mongoose.Schema.Types.ObjectId, ref:"User"
    }

})


module.exports = mongoose.model('Annonce',annonceSchema)