import jwt from "jsonwebtoken";
const verifyToken=(req,res,next)=>{
  const token=req.cookie.token;
  if(!token){
    return res.status(401).json({
      message:'No token ,quthentication denied',
      success:false,
    })
  }
  try{
    const decoded=jwt.verify(token,process.env.JWT_SECRET);
    req.user=decoded.id;
    next();

  }
  catch(error){
    res.status(401).json({ message: "Invalid token" });

  }
}
export default verifyToken;