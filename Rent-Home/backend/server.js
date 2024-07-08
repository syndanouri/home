const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT
const cors = require('cors');
const connectDb = require('./config/connexion');
const userRoute = require('./routes/userRoute');
connectDb()
// middelware 
app.use(express.json());
app.use(cors({origin:"http://localhost:3000"}))
app.use('/api',userRoute)

app.listen(port,(err)=>{
    (err)? console.log(err) : console.log(`server run with sucess : ${port}`)
})