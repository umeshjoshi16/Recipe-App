import { useState } from 'react';
import PostPic from'../assets/Post.png';
import UploadImage from '../assets/Upload.png'
import { Trash } from 'lucide-react';

export default function Post(){
  const [stepCount,setStepCount]=useState(1);
  const [step,setStep]=useState(false);
  const [inputValue, setInputValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");

  const handleSteps=()=>{
    setStep(!step);
  }
  const handleSubmit = () => {
    setSubmittedValue(inputValue);
  };

  const handleCancelStep=()=>{
    setStep(step===false);

    
  }


  return(
    <>
    <div className=" w-full flex flex-col items-center justify-center playfair ">
      <div className=" flex flex-col justify-center items-center w-full md:w-200    border border-gray-300  rounded-xl shadow-xl my-5">
        <div className='flex flex-wrap items-center justify-center gap-5 m-1'>
  
        <img src={PostPic} alt='post' className=' w-40 rounded-3xl cursor-pointer hover:scale-105'/>
        <h1 className='text-orange-800 font-extrabold text-3xl text-center'>Share your recipe with the world🍽️</h1>
        </div>
        <label className=' flex flex-col justify-center items-center border-2 border-dashed rounded-xl m-10 p-5 cursor-pointer w-80 text-center border-orange-300 hover:border-orange-700'>
          <img src={UploadImage} alt='upload' className='h-10 rounded-2xl'/>
          <h1 className='text-xl font-extrabold'>Upload Recipe Image</h1>
            <p className="text-xl text-gray-500 mb-2">Drag & drop or click to browse</p>
           <input type="file"accept="image/*"className="hidden"id="recipeImage"/>
        </label>
        <div className='flex flex-col items-start justify-center m-2 '>
          <label className='font-extrabold text-orange-800 text-xl'>Recipe Title</label>
          <input type='text' placeholder='e.g.Stream-Fried Momo' className=' h-10 w-90 border border-orange-800 rounded-xl focus:border-orange-800 outline-1 px-3'/>
        </div>

        <div className='flex flex-col items-start justify-center m-2'>
          <label className='font-extrabold text-orange-800 text-xl'>Description</label>
          <textarea  rows={4} placeholder=' Describe your dish' className='w-90 border border-orange-800 rounded-xl focus:border-orange-800  px-2 outline-1 '/>
        </div>

        <div className='flex flex-col items-start justify-center m-2 '>
          <label className='font-extrabold text-orange-800 text-xl'>Cook Time</label>
          <input type='text' placeholder='e.g.  45 min' className=' h-10 w-90 border border-orange-800 rounded-xl focus:border-orange-800 outline-1 px-3'/>
        </div>

       <div className='flex flex-col items-start justify-center m-2'>
  <label className='font-extrabold text-orange-800 text-xl'>
    Level
  </label>

  <div className='relative w-90'>
    <select
      className='h-10 w-full border border-orange-800 rounded-xl
                 px-3 appearance-none bg-white outline-none'
    >
      <option>Choose Level</option>
      <option>Easy</option>
      <option>Medium</option>
      <option>Hard</option>
    </select>

    <span className='absolute right-3 top-2.5 pointer-events-none'>
      ▼
    </span>
  </div>
</div>

    
        <div className='flex flex-col items-start justify-center m-2  '>
          <div className='flex flex-row items-center w-full'>

         
  
          <label className='font-extrabold text-orange-800 text-xl '>Ingredients</label>
          <h2 className='ml-auto px-2 text-lg'>1 item</h2>
           </div>

          <div className='flex flex-row items-center w-full justify-center gap-2'>

          
          <input type='text' placeholder='Ingredients name' className=' h-10 w-55 border border-orange-800 rounded-xl focus:border-orange-800 outline-1 px-3'/>
          <input type='text' placeholder='Amount' className=' h-10 w-25 border border-orange-800 rounded-xl focus:border-orange-800 outline-1 px-3'/>
          <button className='items-center flex justify-center cursor-pointer'> <Trash  size={30} className='text-orange-900'/></button>
          </div>
          <button className='border border-orange-700 rounded-md bg-orange-600 text-xl font-extrabold text-white px-3 p-1 cursor-pointer hover:bg-orange-700 m-2 items-center'>Add Ingredients</button>
        </div>


        <div className='flex flex-col items-start justify-center m-2 bg-gr'>
          <div className='flex flex-row items-center justify-between text-center w-90'>
            <h1 className='font-extrabold text-orange-800 text-xl'>Steps</h1>
            <div>-----------------------------</div>
            <button className='border rounded-md p-1 cursor-pointer hover:bg-orange-700 bg-orange-600 text-white  font-extrabold text-xl' onClick={handleSteps}> + Add Steps</button>
            
          </div>
          <div>
        {submittedValue && <li>{submittedValue}</li>}
      </div>


          {step===true&&<div className=' m-3 p-3 flex  flex-col justify-center items-center border border-green-800 rounded-xl focus:border-green-800 outline-1'>
            <label className='text-green-800'>Add Steps</label>
            <div className='flex flex-row items-center gap-1'>
              <h1>{stepCount})</h1>
                <input type='text' placeholder='Enter the step' className='border border-green-800 rounded-xl focus:border-green-800 outline-1 p-2' onChange={(e) => setInputValue(e.target.value)}/>
                </div>  


                <div className='flex flex-row gap-3'>
                  <button className='border rounded-xl m-2 p-1 border-green-800 shadow-xl cursor-pointer bg-red-50 hover:bg-red-200 px-5' onClick={handleCancelStep}>Cancel</button>
                  <button className='border rounded-xl m-2 p-1 border-green-800 shadow-xl cursor-pointer bg-green-50 hover:bg-green-200 px-5' onClick={handleSubmit}>OK</button>

                </div>


          </div>
}
                


  
          <div className='flex flex-col items-start justify-center'>
            <label className='font-extrabold text-orange-800 text-xl'>Hashtags (#)</label>
            <input typ='text' placeholder=' Enter hashtags, e.g, #Food #Recipe' className='h-10 w-90 border border-orange-800 rounded-xl focus:border-orange-800 p-3 outline-1'/>



          </div>

          <div className='flex m-2 items-center'>

          
          <button className='rounded-xl p-2  hover:bg-orange-700 text-white bg-orange-600 cursor-pointer text-xl hover:shadow-xl font-extrabold'>Post Recipe</button>
          </div>





        </div>
      </div>

    </div>
    
    </>
  )
}