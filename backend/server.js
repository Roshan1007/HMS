const express = require('express');
require('dotenv').config();
const db = require('./utils/db');

const app = express();

app.listen(process.env.PORT, ()=>{
    db();
    console.log(`Server is running on ${process.env.PORT}!!!`);
});