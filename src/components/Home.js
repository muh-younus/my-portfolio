
import React from 'react'
import img from '../images/images.jpg'
 // Make sure to replace with the correct path to your image

function Home() {
  return (
    
    <>
    <div className=" bg-gray-800  items-center">
        <div className="flex justify-center items-center min-h-screen gap-20 hidden sm:flex">
            <div>
                <p className="text-white font-bold text-xl">Hello</p>
                <h1 className="text-4xl text-white font-bold">I am <span className="text-purple-700">Muhammad Younus</span>   </h1>
                <p className="text-white font-bold text-xl">A Full Stack Developer</p>
            </div>
            {/* image */}
            <div>
              <img src={img} alt="Profile" className="w-48 h-48 rounded-full mt-4" />
            </div>
        </div>
        <div className="flexitems-center  min-h-screen sm:hidden flex-col gap-10 p-6">
            <div>
                <p className="text-white font-bold text-xl">Hello</p>
                <h1 className="text-2xl text-white font-bold">I am <span className="text-purple-700">Muhammad Younus</span>   </h1>
                <p className="text-white font-bold text-xl">A Full Stack Developer</p>
            </div>
            {/* image */}
            <div>
              <img src={img} alt="Profile" className="w-48 h-48 rounded-full mt-4" />
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Home
