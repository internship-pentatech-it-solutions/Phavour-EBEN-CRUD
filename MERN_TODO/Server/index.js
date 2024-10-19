const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./Routes/routes');
require("dotenv").config;

const port = 2050;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes);

mongoose
   .connect('mongodb+srv://ainooebenezer05:ainooebenezer05@cluster0.jhkqkgk.mongodb.net/MERN_ToDo?retryWrites=true&w=majority&appName=Cluster0')
   .then(() =>{
        console.log("successfully connected to the database");
  })
   .catch((err) => {
        console.log(err);
  });



app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})