import React from 'react'


function Login() {
  return (
    <>
    <div className="bg-gray-100 p-10 space-y-6  w-[350px] rounded-lg mx-auto">
      <h2 className="text-center focus:border-blue-700 font-bold text-3xl text-blue-400">Login</h2>
      <form className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="email">Email:</label><br />
          <input className="border border-gray-300 p-2 w-full rounded" type="email" id="email" name="email" required />
        </div>
        <div className="space-y-2">
          <label htmlFor="password">Password:</label><br/>
          <input className="border border-gray-300 p-2 w-full rounded" type="password" id="password" name="password" required />

          <div className="flex justify-between">
            <div className="inline-flex">
                <input type="checkbox" class="default:ring-2 ..." />
            <p className="text-sm">Remeber for 30 Days</p>
            </div>
          <a href="#"  className="text-blue-500 text-sm hover:underline text-right">Forget Password</a>
          </div>
        </div>
        <div className="flex justify-center flex-col space-y-4 ">
            <button className="hover:bg-blue-400  w-[250px]  p-2 rounded-xl  bg-blue-500 text-white" type="submit">Sign In</button>

            <button className="rounded-lg gap-2 text-center flex justify-center hover:bg-blue-100 items-center p-2  border border-gray-300"><i className="fab fa-google  text-red-500 text-xl"></i><span>Sign in with Google</span>

</button>
<p className="text-center text-sm">Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign up</a></p>
        </div>
        
      </form>
    </div>
    </>
  )
}

export default Login
