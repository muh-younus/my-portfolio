import React from 'react'
import img from '../images/image.webp' // Make sure to replace with the correct path to your image

function About() {
  return (
    <>
    <div className="min-h-screen w-full bg-black fixed left-0  text-white flex justify-center overflow-hidden ">
        <div className="flex justify-center items-center   bg-gray-800 overflow-hidden  gap-20 hidden w-[1000px]  sm:flex">

            <div>
            <img src={img} className=' w-[900px] h-[400px] rounded' alt="profile"/>
                </div>
                <div>
                     <h1>About Me</h1>
                    <p>Hi, I'm Muhammad Younus, a Full Stack Developer.and I'm passionate about building web applications. I love to work with the latest technologies and frameworks to create dynamic and responsive web applications.</p>
                </div>



            </div>
    </div>
   
    </>
  )
}

export default About
