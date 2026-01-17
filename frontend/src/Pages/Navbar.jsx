import { NavLink } from 'react-router-dom'
import recipeLogo from '../assets/recipeLogo.png'
export default function Navbar(){

  return(
    <>
    <nav className="flex flex-row items-center bg-gray-50 p-2 ubuntu-regular border-b border-gray-300 shadow">
      <div className="w-1/2 p-2 flex flex-row items-center gap-2">
      <img src={recipeLogo} className='w-10 rounded-full cursor-pointer  shadow hover:scale-150 hover:border hover:border-gray-400'/>
        <h1 className='font-bold text-xl '>Recipe App</h1>

      </div>



      <div className="flex flex-row gap-5 ml-auto text-center justify-center items-center">
        <NavLink to='/' className="border border-green-200 bg-green-100 rounded-xl p-2 cursor-pointer hover:bg-green-200  hover:shadow">Home</NavLink>
        <NavLink to='/about' className="border border-green-200 bg-green-100 rounded-xl p-2 cursor-pointer hover:bg-green-200 hover:shadow ">About us</NavLink>
        <NavLink to='/contact' className="border border-green-200 bg-green-100 rounded-xl p-2 cursor-pointer hover:bg-green-200 hover:shadow">Contact us</NavLink>
        <div>
          <NavLink to='/login' className="border border-green-200 bg-green-100 rounded-xl p-2 cursor-pointer hover:bg-green-200 hover:shadow">Login</NavLink>

        </div>
        
        
        

      </div>
    </nav>
    </>
  )
}