import React from 'react'
import { Link } from 'react-router-dom'

function TaskBar() {
  return (
    <div className="h-[80px] border-2 bg-slate-200 border-gray-300 absolute top-0 w-full flex justify-around items-center">
  <Link to={"/"}>
    <button className="border-2 px-4 py-2 bg-slate-400 rounded-md text-white">All Tasks</button>
  </Link>
    

    <h1 className='text-3xl font-medium'>TO Do LIST</h1>

  <Link to={"/add"}>
    <button className="border-2 px-4 py-2 bg-slate-400 text-white rounded-md">New Tasks</button>
  </Link>
</div>

  )
}

export default TaskBar