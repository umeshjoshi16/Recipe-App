import chefImage from '../assets/chefRegister.png';
import{useForm} from 'react-hook-form';
import{yupResolver}from'@hookform/resolvers/yup';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';
import { Toaster,toast } from 'react-hot-toast';


const schema=Yup.object().shape({
  userName:Yup.string().required('User name is required'),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
   confirmPassword: Yup
    .string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required")

})

export default function Register(){


  const {register,handleSubmit,reset,formState:{errors}}=useForm({
    resolver:yupResolver(schema)
  });

const onSubmit = (data) => {
    console.log("Form data:", data);
    reset();
     toast.success("Account Created Successfully!");
     
  };

  return(
    <>
    <Toaster position="top-center" reverseOrder={false} />
    <div className=" flex items-start justify-center  bg-linear-to-b from-orange-50 to-yellow-50 ">

    
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-xl my-10 md:m-5 mx-5 flex flex-col justify-start items-star shadow-lg">
      <div className="w-full text-center ubuntu-regular font-medium text-3xl mb-2 ">
        <div className="flex justify-center">
          <img
            src={chefImage}
            alt="Chef Illustration"
            className="w-40 h-40 object-contain rounded-full cursor-pointer"
          />
        </div>
        <span className='border-b-2 border-orange-400 rounded-xl p-2'>Create an Account!</span>
        
      </div>

      <div className="roboto-condensed-paragraph flex flex-col p-5 gap-3">
        <div className="flex flex-col">

        
        <label className="text-lg">User Name*</label>
        <input type='text' placeholder='Enter your name' className="w-70 h-10 border border-gray-400 rounded p-1 focus:border-orange-500 focus:border-b-2 outline-none" {...register("userName")}/>
        {errors.userName && <span className="text-red-500 text-sm mt-1">{errors.userName.message}</span>}
        </div>
        <div className="flex flex-col">

        
        <label className="text-lg">Email*</label>
        <input type='email' placeholder='Enter your email address' className="w-70 h-10 border border-gray-400 rounded p-1 focus:border-orange-500 focus:border-b-2 outline-none" {...register("email")}/>
        {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>}
        </div>

         <div className="flex flex-col">

        <label className="text-lg">Password*</label>
        <input type='password' placeholder='Enter your password' className="w-70 h-10 border border-gray-400 rounded p-1 focus:border-orange-500 focus:border-b-2 outline-none" {...register("password")}/>
        {errors.password && <span className="text-red-500 text-sm mt-1">{errors.password.message}</span>}
        </div>
        <div className="flex flex-col">

        <label className="text-lg">Confirm Password*</label>
        <input type='password' placeholder='Enter your password again' className="w-70 h-10 border border-gray-400 rounded p-1 focus:border-orange-500 focus:border-b-2 outline-none" {...register("confirmPassword")}/>
        {errors.confirmPassword && <span className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</span>}
        </div>
         <div className="flex flex-col">
        <button type='submit' className="py-2 bg-orange-500 text-white font-bold rounded-4xl hover:bg-orange-600 transition text-xl cursor-pointer">Submit</button>
        </div>
        <span className='text-lg text-center text-gray-500 border-b border-gray-400'>
          Already have an account? <NavLink to='/login' className='text-blue-500 cursor-pointer hover:text-blue-800'>Login</NavLink>
        </span>
      </div>


    </form>
    
    </div>
    </>
  )
}