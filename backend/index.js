// const path=require('path');
const express= require('express');
const cors = require('cors');
const app=express();


const cookieParser = require('cookie-parser');
require('dotenv').config();
// const { PrismaClient } = require("./generated/prisma");
// const prisma = new PrismaClient();
// const jwt = require('jsonwebtoken');
app.use(cookieParser());
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))


// app.use(express.urlencoded({extended:true}));
// app.use(express.json());

//api/auth
app.use('/api/auth', require('./routes/auth'));
app.use('/api/posts', require('./routes/posts'));

const PORT= process.env.PORT || 4444;
app.listen(PORT, ()=>{
    console.log('http://localhost:'+PORT);
});
