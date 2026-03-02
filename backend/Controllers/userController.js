import User from "../Model/userModel.js";
import bcrypt from "bcryptjs";
import generateToken from "../Utils/generateToken.js";

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //validate input
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    //check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    //hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    //create user
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({
      message: "User registered succesfully",
      success: true,
      
      
    });
  } catch (error) {
    res.status(400).json({
      message: "Internal Server error",
      success: false,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    //validate input
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
        success: false,
      });
    }
    //check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "user not found",
        success: false,
      });
    }

    //compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid password",
        success: false,
      });
    }
    //GENERATE AND SEND TOKEN IN cookies
    const token=generateToken(user._id);
    res.cookie('token',token,{
      httpOnly:true,
      secure:false,
      sameSite:'lax',
      maxAge:7*24 * 60 * 60 * 1000

    });

    res.status(200).json({
      message: "login success",
      success: true,
      user: {
        id: user._id,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

const logout=async(req,res)=>{
  try{
    res.clearCookie('token',{
      httpOnly:true,
      secure:false,
      sameSite:'lax',
    });
    return res.json({
      message:"Logged out sucessfully"
    });

  }
  catch(error){
    console.error(error.message);
    res.status(500).json({
      message: "Internal Server Error",
      
    });

  }
};

export { login, register,logout };
