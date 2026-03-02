import LogoutImage from '../assets/Logout.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Logout(){
  const navigate=useNavigate();

  const handleLogout=async()=>{
    await axios('http://localhost:5173/profile/logout',{
      method:'POST',
      credentials:'include',

    });
    navigate("/");

  }
   const handleCancel=()=>{
    navigate('/profile');

  }

  return(
    
     <>
      <div className="flex flex-wrap items-center  playfair justify-center mt-10">


        <div className="w-200 rounded-xl shadow-xl flex flex-col justify-center items-center p-10">
          <h1 className='text-center font-extrabold text-green-700 text-2xl'>Are you sure, you want to logout?</h1>
          <img src={LogoutImage} alt='logout'/>
          <h1 className='text-center text-gray-500 text-xl p-2'>You will be logged out of your recipe account</h1>
          <div className='flex flex-row gap-15'>
            <button className='rounded border p-2 w-30 border-b-2 border-gray-400 cursor-pointer hover:bg-gray-200  text-xl font-extrabold' onClick={handleCancel}>Cancel</button>


            <button className='rounded border p-2 w-30 border-b-2 bg-red-300 cursor-pointer border-red-900 hover:bg-red-600 font-extrabold text-xl' onClick={handleLogout}>Logout</button>
          </div>

        </div>


     </div>
    </>
  )
}