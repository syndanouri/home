const mongoose = require('mongoose');

require('dotenv').config();

const URI = process.env.URL;

const connectDb = async()=>{
await mongoose.connect(URI).then(()=>{
    console.log('Db connected');
}).catch((err)=>{
    console.log(err);
})
}


module.exports = connectDb