import{Route, Routes,useLocation}from'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact'
import Login from'./Pages/Login';
import Register from './Pages/Register';
import Navbar from'./Pages/Navbar';
import Dashboard from './Pages/Dashboard';

export default function App(){
  const location=useLocation();
  const hideNavbarRoutes = ["/login", "/register","/dashboard"];
  const hideNavbar=hideNavbarRoutes.includes(location.pathname);


  return(
    <>
    {!hideNavbar&&<Navbar/>}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>



    </Routes>
    
    
    
    </>
  )
}