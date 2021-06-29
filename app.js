const express = require('express');
const mongoose=require('mongoose');
const bodyParser =require('body-parser');
const app = express();
const cors = require('cors');
require('dotenv/config');

//Middlewre
app.use(cors());
app.use(bodyParser.json());

//Import routes
const postsRoute = require('./routes/bike');
app.use('/api/bike',postsRoute);

const postsUser = require('./routes/users');
app.use('/api/user',postsUser);

//ROUTES
app.get('/',(req,res)=>{
    res.send('welcome at home')
});


//Connect ala db
mongoose.connect(process.env.DB_CONNECTION, 
{ useNewUrlParser: true, useUnifiedTopology: true },
() => console.log('Connecté à mongoDb')

);
//ecoute du server
app.listen(3000);