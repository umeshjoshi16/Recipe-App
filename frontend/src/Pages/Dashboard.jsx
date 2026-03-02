import { useNavigate } from 'react-router-dom';
import recipeLogo from '../assets/recipeLogo.png'
import { useState } from 'react';
import { Camera,CircleUserRound,Heart,MessageCircle,Bookmark,Dot,BellRing,Star,Clock,ChevronDown,Plus,ArrowUpRight,X, Clock10,Timer} from 'lucide-react';
import Momo from'../assets/momo.webp';
import Profile from '../assets/Profile.png'


export default function Dashboard(){
  const[expandStep,setExpandStep]=useState(false);
  const [liked, setLiked] = useState(false);
  const[like,setLike]=useState(0);
  const[openNotification,setOpenNotification]=useState(false);
  const [active, setActive] = useState("ingredients");
  const[openDot,setOpenDot]=useState(false);
  const navigate=useNavigate();
  const handleProfile=()=>{
    navigate('/profile')

  }
  const handleNotification=()=>{
    setOpenNotification(!openNotification);
    
  }
  const handleDot=()=>{
    setOpenDot(!openDot)
  }

  const handlePost=()=>{
    navigate('/add-post')
  }
 
 
  return(
    <>
    <div className='flex   flex-col gap-10 bg-orange-50'>
 
   
    <nav className='z-50 bg-orange-50 border  flex flex-row items-center  fixed w-full border-b border-orange-200 shadow-sm'>
      <div className="w-1/2 p-2 flex flex-row items-center gap-2">
            <img src={recipeLogo} className='w-10 rounded-full cursor-pointer  shadow hover:scale-150 hover:border hover:border-gray-400'/>
              <h1 className='font-bold text-xl  brand-gradient tracking-tight'>Rasoi</h1>
      
            </div>
            <div className='flex flex-row items-center ml-auto'>
              <button className='flex items-center justify-center ml-auto cursor-pointer
                text-neutral-800 hover:text-black mr-2 rounded-full
                hover:bg-fuchsia-50  hover:border hover:border-fuchsia-400 p-2 h-10 hover:shadow-sm' onClick={handlePost}>
              <Plus size={22} className='text-gray-500 hover:text-black'/>
            </button>

           
            <button className='flex items-center justify-center ml-auto cursor-pointer
                text-neutral-800 hover:text-black mr-2 rounded-full
                hover:bg-fuchsia-50  hover:border hover:border-fuchsia-400 p-2 h-10 hover:shadow-sm'>
              <BellRing size={22} onClick={handleNotification} className='text-gray-500 hover:text-black'/>
            </button>
            <button className='flex items-center justify-center ml-auto cursor-pointer
                text-neutral-800 hover:text-black mr-2 rounded-full
                hover:bg-fuchsia-50  hover:border hover:border-fuchsia-400 p-2 h-10 hover:shadow-sm' onClick={handleProfile}>
                  
              <CircleUserRound size={22} className='text-gray-500 hover:text-black '/>
            </button>
             </div>
    </nav>
    {
      openNotification&&(
        <div className=' fixed w-70 top-20 right-0 bg-white   shadow-xl rounded-xl border border-orange-200  playfair mr-5 z-50'>
          <div className='flex flex-row w-full justify-center items-center border-b border-orange-500 relative'>

          <h1 className='underline text-2xl   w-full p-4 font-bold '>Notifications</h1>
          <X size={20} className='absolute right-4 cursor-pointer' onClick={handleNotification}/>
          </div>


          <div className='flex flex-col rounded-sm cursor-pointer hover:bg-orange-50 px-2 '>

          <div className='  flex   flex-row justify-center items-center gap-2 py-3'>
            <div>
              <img src={Profile} className='w-10 rounded-full'/>

              </div>

              <div className='flex flex-col'>
            
            <p className='font-medium'>Bhuwan Shahi liked your post.</p>
            
            <p className='text-sm px-2 text-red-600 font-medium'>2 hours ago</p>
            </div>
            </div>
            </div>

            
          <div className='flex flex-col rounded-sm cursor-pointer hover:bg-orange-50 px-2 '>

          <div className='  flex   flex-row justify-center items-center gap-2 py-3'>
            <div>
              <img src={Profile} className='w-10 rounded-full'/>

              </div>

              <div className='flex flex-col'>
            
            <p className='font-medium'>Gita Kumari liked your post.</p>
            
            <p className='text-sm px-2 text-red-600 font-medium'>8 hours ago</p>
            </div>
            </div>
            </div>
              
            
          <div className='flex flex-col rounded-sm cursor-pointer hover:bg-orange-50 px-2 '>

          <div className='  flex   flex-row justify-center items-center gap-2 py-3'>
            <div>
              <img src={Profile} className='w-10 rounded-full'/>

              </div>

              <div className='flex flex-col'>
            
            <p className='font-medium'>Surya Joshi liked your post.</p>
            
            <p className='text-sm px-2 text-red-600 font-medium'>4 hours ago</p>
            </div>
            </div>
            </div>

          </div>
      )
    }

    <main className='mt-10'> 
      <div className='w-full  flex flex-col justify-center items-center gap-5 ubuntu-regular  '>
        <div className='flex flex-col items-start justify-start mt-10 w-full md:w-150'>

        
        <h1 className='playfair font-bold  text-3xl'>
          What will you

        </h1>
        <h1 className='playfair font-bold text-5xl bg-linear-to-r 
           from-yellow-400 via-orange-400 to-pink-950
           bg-clip-text text-transparent'>
          cook today?
        </h1>
        </div>
        <div className='flex flex-row items-center justify-start md:w-150 w-full playfair text-xl'>
          <ArrowUpRight size={25} className='text-red-500'/> Trending Now
        </div> 

         {/* Post */}
        
        <div className='flex flex-col justify-start items-start w-full md:w-150 border border-orange-200 shadow-xl rounded-xl relative bg-gray-50 mb-10 z-0'>
          <div className='flex flex-row w-full  gap-3 items-center justify-start px-3'>
            
            <div className='flex flex-row items-center justify-start'>

           
           <img src={Profile} className='w-15 rounded-full cursor-pointer'/>
           
            </div>
           <div className='flex  flex-col justify-center gap-1 items-start '>
            <div>
              <h1 className=' font-bold playfair text-black text-xl cursor-pointer'>Umesh Joshi</h1>
            </div>
              <div className='flex items-center flex-row gap-1 '>
            < Clock10 className='text-gray-500 cursor-pointer  ' size={12}/>
           <p className='text-gray-500 cursor-pointer  playfair'>1 hr ago</p>
            </div>
           </div>
           <button className='ml-auto  cursor-pointer' onClick={handleDot}>
            ...

           </button>
           {
            openDot&&(
              <div className='flex w-30 rounded-md bg-white shadow absolute top-20 right-20 p-3'>
                  hello
                </div>
            )
           }
          <div className='absolute rounded-3xl bg-black/50 p-1 px-3 text-white top-20 right-3 flex flex-row items-center playfair text-lg cursor-pointer'>
           <Timer/> 1 hrs
          </div>


          </div>
          <img src={Momo} alt='post' className='w-full  h-90'/>
          <div className='flex flex-row items-center w-full p-2 gap-3'>
            <div className='flex flex-row gap-1   items-center'>

          
            <Heart className={`cursor-pointer ${
          liked ? "text-pink-500 fill-pink-500" : " "}`} size={25} onClick={() => setLiked(!liked)}/>
            <p className=' font-medium  cursor-pointer '>{like}</p>
              </div>


               <div className='flex flex-row gap-1 '>
            <MessageCircle className='cursor-pointer'size={22}/>
            <p className=' font-medium cursor-pointer  '>6</p>

          </div>
             <div className='flex flex-row gap-1 '>
            <Star className='cursor-pointer'size={22}/>
            <p className=' font-medium cursor-pointer   '>4(5)</p>

          </div>
          

          <div className='ml-auto cursor-pointer'>
            <Bookmark/>
          </div>

          </div>


          <div className='p-2 playfair text-lg text-gray-600 text-justify'>
            <div className='flex border-orange-400 border-b'>

           
            <p className='flex flex-col'><p className='text-black font-extrabold'>Dumpling</p>Served hot with spicy tomato or sesame dipping sauce, each bite is aromatic, flavorful, and irresistible. Perfect as a snack, appetizer, or main course!</p>
             </div>

             <div className='flex justify-evenly items-center text-2xl'>
              <div className=''>

              
              <button  
              onClick={()=>{
                setActive("ingredients")
              }}
              className='cursor-pointer bg-linear-to-r 
           from-orange-700 to-red-950
           bg-clip-text text-transparent relative'>Ingredients
                <span className={`absolute left-0 bottom-0 h-1 w-full bg-orange-700 rounded-xl
      transition-transform duration-300 origin-center
      ${active === "ingredients" ? "scale-x-100" : "scale-x-0"}`}>
                  
                </span>
                
                </button>
              </div>

              <div className=''>
                
             
           <button  
              onClick={()=>{
                setActive("steps")
              }}
              className='cursor-pointer bg-linear-to-r 
           from-orange-700 to-red-950
           bg-clip-text text-transparent relative'>Steps
                <span className={`absolute left-0 bottom-0 h-1 w-full bg-orange-700 rounded-xl
      transition-transform duration-300 origin-center
      ${active === "steps" ? "scale-x-100" : "scale-x-0"}`}>
                  
                </span>
                
                </button>
               </div>

             </div>

             {active==="ingredients" && (
              <div className='w-full flex flex-row justify-items-stretch flex-wrap gap-5 my-4'>
                <span className='w-fit p-1 px-2 border border-orange-200 hover:shadow-sm rounded-xl cursor-pointer text-black '>All-purpose flour
                  <p className='text-md text-gray-600 font-light'>2 cups</p>
                </span>
                <span className='w-fit p-1 px-2 border border-orange-200 hover:shadow-sm rounded-xl cursor-pointer text-black'>Minced chicked
                  <p className='text-md text-gray-600 font-light'>300 g</p>
                </span>
                <span className='w-fit p-1 px-2 border border-orange-200 hover:shadow-sm rounded-xl cursor-pointer text-black'>Green Onion
                  <p className='text-md text-gray-600 font-light'>4 stalks</p>
                </span>
                <span className='w-fit p-1 px-2 border border-orange-200 hover:shadow-sm rounded-xl cursor-pointer text-black'>Garlic cloves
                  <p className='text-md text-gray-600 font-light'>4 cloves</p>
                </span>
                <span className='w-fit p-1 px-2 border border-orange-200 hover:shadow-sm rounded-xl cursor-pointer text-black'>Sesame oil
                  \<p className='text-md text-gray-600 font-light'>1 tsnp</p>
                </span>
                <span className='w-fit p-1 px-2 border border-orange-200 hover:shadow-sm rounded-xl cursor-pointer text-black'>Red chilli
                  <p className='text-md text-gray-600 font-light'>2 pieces</p>
                </span>
                <span className='w-fit p-1 px-2 border border-orange-200 hover:shadow-sm rounded-xl cursor-pointer text-black'>Tomato
                  <p className='text-md text-gray-600 font-light'>2 medium</p>
                </span>
                <span className='w-fit p-1 px-2 border border-orange-200 hover:shadow-sm rounded-xl cursor-pointer text-black'>Salt and pepper
                  <p className='text-md text-gray-600 font-light'>To taste</p>
                </span>
                



                </div>

             )}
            
            {active==="steps" && (
        <ul className="list-decimal list-inside text-black leading-relaxed space-y-1 ">
          <li>Make soft dough and let it rest.</li>
          <li>Prepare filling: minced meat or veggies with spices.</li>
          <li>Roll dough into small circles.</li>
          <li>Place filling and fold edges to seal.</li>
          <li>Steam 10–15 min or pan-fry until cooked.</li>
          <li>Serve hot with spicy achar.</li>
        </ul>
      )}
            
            <p className='text-blue-900 font-medium playfair border-t border-orange-400'>#Momo #NepaliFood #TastyBites #Foodie #Recipe</p>
          </div>

         

          

        </div>

      </div>

    </main>

     </div>
    </>
  )
}