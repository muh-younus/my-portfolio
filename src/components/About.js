import React from "react";
import img from "../images/image.webp"; // Make sure to replace with the correct path to your image

function About() {
  return (
    <>
      <div className="min-h-screen w-full fixed left-0  text-white bg-black flex justify-center overflow-hidden ">
        <div className="flex justify-center items-center   overflow-hidden  gap-20 hidden w-[1000px]  sm:flex">
          <div>
            <img
              src={img}
              className=" w-[900px] h-[400px] rounded"
              alt="profile"
            />
          </div>
          <div className="">
            <h1 className="text-4xl  font-bold space-y-8">About Me</h1>

            <br />
            <p className="mb-6">
              Hi, I'm Muhammad Younus, a Frontend Developer.and I'm passionate
              about building web applications. I love to work with the latest
              technologies and frameworks to create dynamic and responsive web
              applications.
            </p>

            <div className="space-y-4 mb-8">

              <div className="flex items-center gap-2">
                <label className="w-2/14" htmlFor="HtmlAndCss">
                  Html & CSS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                  
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <label className="w-2/14" htmlFor="HtmlAndCss">
                  JavaScript
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-8/12"></div>
                  
                </div>
              </div>
              <div className="flex items-center gap-7">
                <label className="w-2/14" htmlFor="HtmlAndCss">
                  React JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-7/12"></div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
