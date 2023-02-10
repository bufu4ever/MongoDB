const express = require ('express');
const app=express();
const moragan = require('morgan');
const cors = require('cors');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(moragan('dev'));
app.use(cors());
const Productrouter = require("./api/v1/routes/product");
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const Conn_str = `mongodb+srv://shawnDB:bufu4ever@cluster0.lssdz12.mongodb.net/ecomdb`;
mongoose.connect(Conn_str);
app.use("/product", Productrouter);
module.exports=app;

