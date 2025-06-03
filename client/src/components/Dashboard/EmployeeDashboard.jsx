import React from 'react'
import Header from '../../other/Header'
import TaskState from '../../other/TaskState'
import TaskList from '../TaskList/TaskList'

function EmployeeDashboard() {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <Header />
      <TaskState />
      <TaskList />
    </div>
  )
}

export default EmployeeDashboard
