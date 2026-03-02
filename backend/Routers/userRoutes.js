import express from'express';
const router=express.Router();
import {login,logout,register} from'../Controllers/userController.js';

import verifyToken from '../Middleware/authMiddleware.js';


router.post('/login',login);
router.post('/logout',logout);
router.post('/register',register);
router.get('/dashboard',verifyToken,(req,res)=>{

  res.json({
    message:'Welcome to dashboard',
    userId:req.user
  });
});


export default router;
