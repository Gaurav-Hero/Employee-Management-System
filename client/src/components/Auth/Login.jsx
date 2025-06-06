import React, { useState } from 'react'

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault()
        console.log("email, loign : ", email , password)

        setEmail("")
        setPassword("")
    }

  return (
    <div className='h-screen w-screen flex items-center justify-center'>
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form onSubmit={(e)=> submitHandler(e)} className='flex flex-col items-center justify-center'>
            <input
            value={email} 
            onChange={(e) => {
                setEmail(e.target.value);
            }}
            required
            className='rounded-full outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl text-black placeholder:text-gray-400'
            type="email" 
            placeholder='Enter your email' />

            <input
            value={password} 
            onChange={(e) => {
                setPassword(e.target.value);
            }}
            required
            className='mt-5 rounded-full outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl text-black placeholder:text-gray-400' 
            type="password" 
            placeholder='enter password' />

            <button
            className='mt-5 rounded-full outline-none bg-emerald-700 border-2 border-emerald-600 py-3 px-26 text-xl text-white'
            >Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login

