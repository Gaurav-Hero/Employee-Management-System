import React from 'react'

function TaskState() {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
      <div className='py-6 px-10 rounded-xl w-[45%] bg-red-400'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-2xl font-medium'>New Task</h3>
      </div>
      <div className='py-6 px-10 rounded-xl w-[45%] bg-blue-400'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-2xl font-medium'>New Task</h3>
      </div>
      <div className='py-6 px-10 rounded-xl w-[45%] bg-green-400'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-2xl font-medium'>New Task</h3>
      </div>
      <div className='py-6 px-10 rounded-xl w-[45%] bg-yellow-400'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-2xl font-medium'>New Task</h3>
      </div>
    </div>
  )
}

export default TaskState
