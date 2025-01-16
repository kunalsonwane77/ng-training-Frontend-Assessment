import React from 'react'
import { Link } from 'react-router-dom'

function TaskBar() {
  return (
    <div className="h-[80px] border-2 border-gray-300 absolute top-0 w-full flex justify-around items-center">
  <Link to={"/"}>
    <button className="border-2 px-4 py-2">All Tasks</button>
  </Link>
  <Link to={"/add"}>
    <button className="border-2 px-4 py-2">New Tasks</button>
  </Link>
</div>

  )
}

export default TaskBar