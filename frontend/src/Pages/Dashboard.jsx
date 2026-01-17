import recipeLogo from '../assets/recipeLogo.png'


export default function Dashboard(){

  return(
    <>
    <nav className='bg-orange-400'>
      <div className="w-1/2 p-2 flex flex-row items-center gap-2">
            <img src={recipeLogo} className='w-10 rounded-full cursor-pointer  shadow hover:scale-150 hover:border hover:border-gray-400'/>
              <h1 className='font-bold text-xl '>Recipe App</h1>
      
            </div>
    </nav>
    
    </>
  )
}