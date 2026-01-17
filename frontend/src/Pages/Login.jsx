import chefImage from '../assets/chef.png';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';


const schema=Yup.object().shape({
email: Yup.string().email("Invalid email").required("Enter your email"),
  password: Yup.string().required("Enter your password"),
})

export default function Login(){

  const navigate=useNavigate();

const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
   const onSubmit = (data) => {
    console.log("Form data:", data);
    navigate('/dashboard');
  };
  return(
    <>
    <div className="min-h-screen flex items-start justify-center  bg-linear-to-b from-orange-50 to-yellow-50 ">

    
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-xl my-10 mx-5 flex flex-col justify-start items-star shadow-lg">
      <div className="w-full text-center ubuntu-regular font-medium text-3xl mb-2 ">
        <div className="flex justify-center">
          <img
            src={chefImage}
            alt="Chef Illustration"
            className="w-40 h-40 object-contain rounded-full cursor-pointer"
          />
        </div>
        <span className='border-b-2 border-orange-400 rounded-xl p-2'>Welcome Back!</span>
        
      </div>

      <div className="roboto-condensed-paragraph flex flex-col p-5 gap-3">
        <div className="flex flex-col">

        
        <label className="text-lg">Email*</label>
        <input type='email' placeholder='Enter your email address' className="w-70 h-10 border border-gray-400 rounded p-1 focus:border-orange-500 focus:border-b-2 outline-none" {...register("email")}/>
         {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>}
        </div>

         <div className="flex flex-col">

        <label className="text-lg">Password*</label>
        <input type='password' placeholder='Enter your password' className="w-70 h-10 border border-gray-400 rounded p-1 focus:border-orange-500 focus:border-b-2 outline-none" {...register("password")} />
         {errors.password && <span className="text-red-500 text-sm mt-1">{errors.password.message}</span>}
        </div>
        
         <div className="flex flex-col">
        <button className="py-2 bg-orange-500 text-white font-bold rounded-4xl hover:bg-orange-600 transition text-xl cursor-pointer">Login</button>
        </div>
        <p className='text-lg text-center text-gray-500'>
          Forgot your Password? <NavLink to='reset' className='text-blue-500 cursor-pointer hover:text-blue-800'>Reset</NavLink>
        </p>
        <p className='text-lg text-center text-gray-500'>
          Don't have an account? <NavLink to='/register' className='text-orange-500 cursor-pointer hover:text-orange-800'>Register</NavLink>
        </p>
      </div>


    </form>
    
    </div>
    </>
  )
}