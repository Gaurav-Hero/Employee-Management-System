import React from 'react'
import Header from '../../other/Header'
import AllTask from '../../other/AllTask'

function AdminDashboard() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] p-10 text-white">
      <Header />
      <div className="max-w-5xl mx-auto mt-10 bg-[#1e293b] rounded-2xl shadow-lg p-8">
        <form className="space-y-6">

          {/* Row 1: Title & Date */}
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
            <div className="w-full">
              <h3 className="text-lg font-semibold mb-1">Task Title</h3>
              <input
                type="text"
                placeholder="Enter your task"
                className="w-full px-4 py-2 rounded-lg bg-[#0f172a] text-white border border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>
            <div className="w-full">
              <h3 className="text-lg font-semibold mb-1">Date</h3>
              <input
                type="date"
                className="w-full px-4 py-2 rounded-lg bg-[#0f172a] text-white border border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>
          </div>

          {/* Row 2: Assign to & Category */}
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
            <div className="w-full">
              <h3 className="text-lg font-semibold mb-1">Assign to</h3>
              <input
                type="text"
                placeholder="Employee Name"
                className="w-full px-4 py-2 rounded-lg bg-[#0f172a] text-white border border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>
            <div className="w-full">
              <h3 className="text-lg font-semibold mb-1">Category</h3>
              <input
                type="text"
                placeholder="Design, Dev, etc"
                className="w-full px-4 py-2 rounded-lg bg-[#0f172a] text-white border border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>
          </div>

          {/* Row 3: Description */}
          <div>
            <h3 className="text-lg font-semibold mb-1">Description</h3>
            <textarea
              placeholder="Enter your description!"
              className="w-full px-4 py-2 rounded-lg bg-[#0f172a] text-white border border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              rows={4}
            ></textarea>
          </div>

          {/* Button */}
          <div>
            <button
              className="w-full bg-emerald-500 hover:bg-emerald-600 transition-colors text-white py-2 px-6 rounded-lg font-semibold shadow-lg"
            >
              Create Task
            </button>
          </div>

        </form>
      </div>
      <AllTask />
    </div>
  )
}

export default AdminDashboard
