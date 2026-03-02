import { useState } from "react";
import ProfileImage from "../assets/Profile.png";
import Achar from "../assets/aachar.jpg";
import { Star, Clock } from "lucide-react";
import NoSaved from'../assets/noSaved.png';
import NoCollections from'../assets/noCollections.png';
import NoRecipes from'../assets/noRecipes.png';
import {useNavigate } from "react-router-dom";
import { ArrowLeft } from 'lucide-react';


export default function Profile() {
  const navigate=useNavigate();
  const [activeBtn, setActiveBtn] = useState("myRecipe");

  const logoutClicked=()=>{
    navigate('/profile/logout')

  }

  const handleBackArrow=()=>{
    navigate('/dashboard')

  }


  return (

    <div className="flex flex-col items-center justify-center md:m-5 playfair">
      <div className=" flex flex-col  items-center justify-center w-full md:w-3xl md:border border-gray-200 shadow-xl md:rounded-xl">
        <ArrowLeft size={30} className=" absolute top-5 left-3 hover:bg-gray-300 cursor-pointer rounded-lg border border-gray-400 shadow" onClick={handleBackArrow}/>
        <div className=" w-full md:w-300  h-100   flex  flex-col justify-center items-center p-5 border-gray-200  ">
          <img
            src={ProfileImage}
            alt="Profile"
            className="h-50 w-50 rounded-full "
          />
          <div>
            <h1 className="font-bold text-4xl text-green-900 ">Umesh Joshi</h1>
          </div>
          <div className="flex flex-row justify-center items-start w-full gap-6 text-xl">
            <h1 className="text-green-700 font-medium cursor-pointer ">
              24 Recipes
            </h1>
            <h1 className="text-green-700 font-medium cursor-pointer">
              112 Saved
            </h1>
            <h1 className="text-green-700 font-medium cursor-pointer flex gap-2 items-center">
              <Star size={15} className="text-yellow-600 fill-yellow-600"/>4.6
            </h1>
          </div>
          <div>
            <p className="p-4 text-black text-center text-xl">
              Food enthusiast who loves experimenting with flavors and sharing
              recipes.
            </p>
          </div>
          <button className="rounded-3xl border border-green-300 bg-green-500 p-2 cursor-pointer hover:bg-green-200  hover:text-black text-white text-xl  font-extrabold ">
            Edit Profile
          </button>
        </div>

        <div className="flex flex-col justify-center items-center gap-3 m-5">
          <div className="flex flex-row gap-8  font-bold text-green-700 border-b  border-gray-300">

            <button
              onClick={() => setActiveBtn("myRecipe")}
              className={`relative cursor-pointer px-2 py-1
    after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-black
    after:transition-all font-extrabold  text-xl after:duration-300
    ${
      activeBtn === "myRecipe" ? "after:w-full" : "after:w-0 hover:after:w-full"
    }`}
            >
              My Recipes
            </button>

            <button
              onClick={() => setActiveBtn("saved")}
              className={`relative cursor-pointer px-2 py-1
    after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-black
    after:transition-all font-extrabold  text-xl after:duration-300
    ${activeBtn === "saved" ? "after:w-full" : "after:w-0 hover:after:w-full"}`}
            >
              Saved
            </button>

            <button
              onClick={() => setActiveBtn("collections")}
              className={`relative cursor-pointer px-2 py-1
    after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-black
    after:transition-all font-extrabold  text-xl after:duration-300
    ${
      activeBtn === "collections"
        ? "after:w-full"
        : "after:w-0 hover:after:w-full"
    }`}
            >
              Collections
            </button>
          </div>

          {activeBtn === "myRecipe" && (
            <div className="flex flex-wrap text-xl ">
              <div className="rounded-xl shadow-xl  w-35 m-4 cursor-pointer hover:scale-105">
                <img src={Achar} className="rounded-t-xl" />
                <div className="flex flex-col">
                  <h1 className="font-medium px-2">Aachar</h1>
                  <div className="flex flex-row px-2 items-center">
                    <Star
                      className="text-yellow-500 fill-yellow-500"
                      size={15}
                    />
                    <Star
                      className="text-yellow-500 fill-yellow-500"
                      size={15}
                    />
                    <p className="text-yellow-500 text-center font-medium pl-1">
                      {" "}
                      4.6(5)
                    </p>
                  </div>
                  <div className="flex flex-row items-center pl-2 pb-2 text-gray-500 ">
                    <Clock size={12} className="" />
                    <p className="text-xs text-center ">15 min</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl shadow-xl  w-35 m-4 cursor-pointer hover:scale-105">
                <img src={Achar} className="rounded-t-xl" />
                <div className="flex flex-col">
                  <h1 className="font-medium px-2">Aachar</h1>
                  <div className="flex flex-row px-2 items-center">
                    <Star
                      className="text-yellow-500 fill-yellow-500"
                      size={15}
                    />
                    <Star
                      className="text-yellow-500 fill-yellow-500"
                      size={15}
                    />
                    <p className="text-yellow-500 text-center font-medium pl-1">
                      {" "}
                      4.6(5)
                    </p>
                  </div>
                  <div className="flex flex-row items-center pl-2 pb-2 text-gray-500 ">
                    <Clock size={12} className="" />
                    <p className="text-xs text-center ">15 min</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl shadow-xl  w-35 m-4 cursor-pointer hover:scale-105">
                <img src={Achar} className="rounded-t-xl" />
                <div className="flex flex-col">
                  <h1 className="font-medium px-2">Aachar</h1>
                  <div className="flex flex-row px-2 items-center">
                    <Star
                      className="text-yellow-500 fill-yellow-500"
                      size={15}
                    />
                    <Star
                      className="text-yellow-500 fill-yellow-500"
                      size={15}
                    />
                    <p className="text-yellow-500 text-center font-medium pl-1">
                      {" "}
                      4.6(5)
                    </p>
                  </div>
                  <div className="flex flex-row items-center pl-2 pb-2 text-gray-500 ">
                    <Clock size={12} className="" />
                    <p className="text-xs text-center ">15 min</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl shadow-xl  w-35 m-4 cursor-pointer hover:scale-105">
                <img src={Achar} className="rounded-t-xl" />
                <div className="flex flex-col">
                  <h1 className="font-medium px-2">Aachar</h1>
                  <div className="flex flex-row px-2 items-center">
                    <Star
                      className="text-yellow-500 fill-yellow-500"
                      size={15}
                    />
                    <Star
                      className="text-yellow-500 fill-yellow-500"
                      size={15}
                    />
                    <p className="text-yellow-500 text-center font-medium pl-1">
                      {" "}
                      4.6(5)
                    </p>
                  </div>
                  <div className="flex flex-row items-center pl-2 pb-2 text-gray-500 ">
                    <Clock size={12} className="" />
                    <p className="text-xs text-center ">15 min</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl shadow-xl  w-35 m-4 cursor-pointer hover:scale-105">
                <img src={Achar} className="rounded-t-xl" />
                <div className="flex flex-col">
                  <h1 className="font-medium px-2">Aachar</h1>
                  <div className="flex flex-row px-2 items-center">
                    <Star
                      className="text-yellow-500 fill-yellow-500"
                      size={15}
                    />
                    <Star
                      className="text-yellow-500 fill-yellow-500"
                      size={15}
                    />
                    <p className="text-yellow-500 text-center font-medium pl-1">
                      {" "}
                      4.6(5)
                    </p>
                  </div>
                  <div className="flex flex-row items-center pl-2 pb-2 text-gray-500 ">
                    <Clock size={12} className="" />
                    <p className="text-xs text-center ">15 min</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl shadow-xl  w-35 m-4 cursor-pointer hover:scale-105">
                <img src={Achar} className="rounded-t-xl" />
                <div className="flex flex-col">
                  <h1 className="font-medium px-2">Aachar</h1>
                  <div className="flex flex-row px-2 items-center">
                    <Star
                      className="text-yellow-500 fill-yellow-500"
                      size={15}
                    />
                    <Star
                      className="text-yellow-500 fill-yellow-500"
                      size={15}
                    />
                    <p className="text-yellow-500 text-center font-medium pl-1">
                      {" "}
                      4.6(5)
                    </p>
                  </div>
                  <div className="flex flex-row items-center pl-2 pb-2 text-gray-500 ">
                    <Clock size={12} className="" />
                    <p className="text-xs text-center ">15 min</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl shadow-xl  w-35 m-4 cursor-pointer hover:scale-105">
                <img src={Achar} className="rounded-t-xl" />
                <div className="flex flex-col">
                  <h1 className="font-medium px-2">Aachar</h1>
                  <div className="flex flex-row px-2 items-center">
                    <Star
                      className="text-yellow-500 fill-yellow-500"
                      size={15}
                    />
                    <Star
                      className="text-yellow-500 fill-yellow-500"
                      size={15}
                    />
                    <p className="text-yellow-500 text-center font-medium pl-1">
                      {" "}
                      4.6(5)
                    </p>
                  </div>
                  <div className="flex flex-row items-center pl-2 pb-2 text-gray-500 ">
                    <Clock size={12} className="" />
                    <p className="text-xs text-center ">15 min</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeBtn === "saved" && (
            <div className="flex  flex-col justify-center items-center w-70 m-4 text-center">
              <h1 className="text-2xl font-extrabold  inline">No Saved Recipes</h1>
              <img src={NoSaved} alt='saved'/>
              <h1 className="text-gray-500 text-lg">Start saving your favorite recipes!</h1>

            </div>
          )}

          {activeBtn === "collections" && (
            <div className="flex flex-col  justify-center items-center m-4  w-70 text-center ">
              <h1 className="text-2xl font-extrabold">No Collections Yet</h1>
              <img src={NoCollections} alt='collections' />
              <h1 className="text-gray-500 text-lg">Create a new collection to organize your recipes!</h1>
            </div>
          )}
        </div>
      </div>

      <span>
        <button  className="border rounded-xl p-2 m-5 w-30 bg-green-950 text-2xl text-white font-bold cursor-pointer hover:bg-green-800" onClick={logoutClicked}>
          Logout
        </button>
      </span>
    </div>
  );
}
