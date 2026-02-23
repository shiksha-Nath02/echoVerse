const express=require('express');
const { postSignup, postLogin, fetchLogin, logout} = require('../controllers/authcontroller');
const router=express.Router();

router.post("/signup",postSignup);
router.post("/login", postLogin);
/**
 * @summary Create new user
 * @body name:string email:string age:number
 */
router.get("/me",fetchLogin);
router.post("/logout",logout);

module.exports= router; 