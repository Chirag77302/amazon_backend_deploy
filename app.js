const express = require('express');
if(process.env.NODE_ENV !== "production"){
  require('dotenv').config();
}

const mongoose = require('mongoose');
const Product = require('./models/product');
const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/Products';
const app = express();
var cors = require('cors');

app.use(cors())
app.use(express.json());
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB connection successful!'));

app.get("/api/", async (req,res)=> {
    const products = await Product.find({});
    res.status(201).json(products);
});

const port = process.env.PORT || 3000;
app.listen(port,console.log('connected backend'));