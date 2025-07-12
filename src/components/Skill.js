import React from 'react'

function Skill() {
  return (
    <>
    <section className="bg-black py-10">
  <div className="max-w-4xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center text-purple-800 mb-8">Education</h2>

    <div className="space-y-6">
      
      <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-purple-800">
        <h3 className="text-xl font-semibold text-gray-800">Matric (Science)</h3>
        <p className="text-gray-600">2018 - 2019</p>
      </div>

      
      <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-purple-800">
        <h3 className="text-xl font-semibold text-gray-800">FSc (Computer Science)</h3>
        <p className="text-gray-600">2019 - 2021</p>
      </div>

      
      <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-purple-800">
        <h3 className="text-xl font-semibold text-gray-800">Bachelor in Software Engineering</h3>
        <p className="text-gray-600">2021 - 2026</p>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Skill
