import React from 'react'

function TaskList() {
  return (
    <div id='tasklist' className='overflow-x-auto flex items-center justify-start gap-5 flex-nowrap h-[55%] w-full bg-red-500 mt-10 py-5'>
      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-emerald-400 rounded-xl '>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
          <h4 className='text-sm'>12 mar 2025</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold'>complete this work !</h2>
        <p className='text-sm mt-2'>hello guys i am here to declare a war against humainty rules and barbaric mgmt !</p>
      </div>
     
      
      
    </div>
  )
}

export default TaskList
