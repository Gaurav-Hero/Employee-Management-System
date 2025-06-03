import React from 'react'

function Header() {
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello, <br /> <span className='text-3xl font-semibold'>Gaurav  🐳</span></h1>
      <button className='bg-red-600 text-white font-medium px-5 py-3 rounded-xl text-lg'>Log Out</button>
    </div>
  )
}

export default Header
