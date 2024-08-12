const express = require('express')
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser'); 
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

const ur = require('./routes/ur');
const cr = require('./routes/cr');

app.use('/user', ur);
app.use('/candidate', cr);


app.listen(PORT, ()=>{
    console.log('Running succesfully on port 3000');
})