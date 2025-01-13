const express = require('express');
const app = express();


const mongoose = require('mongoose');

const bodyParder = require('body-parser');
app.use(bodyParder.json());

const dotenv = require("dotenv");
dotenv.config();

const cors = require('cors');
app.use(cors());

const customerRoute = require('./src/Routes/customers');
app.use('/', customerRoute);




mongoose.connect(process.env.DB_URL,  { useNewUrlParser: true, useUnifiedTopology: true },  () =>
    console.log("MongoDB connection established successfully")
);



const port = process.env.PORT ;
app.listen(port, () =>
console.log(`The Server is running on port: ${port}`)
);