import React from "react";
import img from "../images/image.webp"; // Make sure to replace with the correct path to your image

function Proj() {
  return (
    <>
    
        
      
        <div className="bg-black text-white flex flex-col items-center justify-center space-y-10 pb-10 ">
            <h1 className="text-center p-6 text-3xl font-bold"> My Project</h1>
            <hr className="border-white w-1/2 mb-5" />

            <div className=" flex  justify-center items-center  gap-10 overflow-y-hidden">


        <div className="flex justify-center h-[290px] rounded-xl items-center p-6 w-[200px]  flex-col bg-gray-800 items-center transform transition-all hover:-translate-y-2 hover:shadow-lg">
          <img
            src={img}
            alt="Project Placeholder"
            className="w-full h-38 rounded-full mb-4"
          />
          <div className="text-center">
            <h1 className="text-1xl font-bold mb-4">My Projects</h1>
            <p className="mb-4">This is a description of my projects.</p>
            <a href="#" className="text-blue-500 hover:bg-blue-500 hover:text-white rounded bg-white px-4 font-bold ">View Project</a>
          </div>
        </div>
        <div className="flex justify-center h-[290px] rounded-xl items-center p-6 w-[200px]  flex-col bg-gray-800 items-center transform transition-all hover:-translate-y-2 hover:shadow-lg">
          <img
            src={img}
            alt="Project Placeholder"
            className="w-full h-38 rounded-full mb-4"
          />
          <div className="text-center">
            <h1 className="text-1xl font-bold mb-4">My Projects</h1>
            <p className="mb-4">This is a description of my projects.</p>
            <a href="#" className="text-blue-500 hover:bg-blue-500 hover:text-white rounded bg-white px-4 font-bold ">View Project</a>
          </div>
        </div>
        <div className="flex justify-center h-[290px] rounded-xl items-center p-6 w-[200px]  flex-col bg-gray-800 items-center transform transition-all hover:-translate-y-2 hover:shadow-lg">
          <img
            src={img}
            alt="Project Placeholder"
            className="w-full h-38 rounded-full mb-4"
          />
          <div className="text-center">
            <h1 className="text-1xl font-bold mb-4">My Projects</h1>
            <p className="mb-4">This is a description of my projects.</p>
            <a href="#" className="text-blue-500 hover:bg-blue-500 hover:text-white rounded bg-white px-4 font-bold ">View Project</a>
          </div>
        </div>
       

      </div>
            <div className=" flex  justify-center items-center  gap-10 overflow-y-hidden">


        <div className="flex justify-center h-[290px] rounded-xl items-center p-6 w-[200px]  flex-col bg-gray-800 items-center transform transition-all hover:-translate-y-2 hover:shadow-lg">
          <img
            src={img}
            alt="Project Placeholder"
            className="w-full h-38 rounded-full mb-4"
          />
          <div className="text-center">
            <h1 className="text-1xl font-bold mb-4">My Projects</h1>
            <p className="mb-4">This is a description of my projects.</p>
            <a href="#" className="text-blue-500 hover:bg-blue-500 hover:text-white rounded bg-white px-4 font-bold ">View Project</a>
          </div>
        </div>
        <div className="flex justify-center h-[290px] rounded-xl items-center p-6 w-[200px]  flex-col bg-gray-800 items-center transform transition-all hover:-translate-y-2 hover:shadow-lg">
          <img
            src={img}
            alt="Project Placeholder"
            className="w-full h-38 rounded-full mb-4"
          />
          <div className="text-center">
            <h1 className="text-1xl font-bold mb-4">My Projects</h1>
            <p className="mb-4">This is a description of my projects.</p>
            <a href="#" className="text-blue-500 hover:bg-blue-500 hover:text-white rounded bg-white px-4 font-bold ">View Project</a>
          </div>
        </div>
        <div className="flex justify-center h-[290px] rounded-xl items-center p-6 w-[200px]  flex-col bg-gray-800 items-center transform transition-all hover:-translate-y-2 hover:shadow-lg">
          <img
            src={img}
            alt="Project Placeholder"
            className="w-full h-38 rounded-full mb-4"
          />
          <div className="text-center">
            <h1 className="text-1xl font-bold mb-4">My Projects</h1>
            <p className="mb-4">This is a description of my projects.</p>
            <a href="#" className="text-blue-500 hover:bg-blue-500 hover:text-white rounded bg-white px-4 font-bold ">View Project</a>
          </div>
        </div>
       

      </div>
      </div>
    </>
  );
}

export default Proj;
