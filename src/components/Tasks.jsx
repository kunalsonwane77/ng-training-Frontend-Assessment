import React, { useContext, useEffect, useState } from 'react'
import TaskBar from './TaskBar'
import Pagination from './Pagination'
import TaskCard from './TaskCard'

import { Todocontext } from '../context/TodoContextProvider'

function Tasks() {
  const { task } = useContext(Todocontext);

  return (
<div className="h-[500px] overflow-y-auto relative">
  <div className="w-full bg-slate-200 absolute top-[100px]">
    <ul className="flex flex-wrap justify-around text-gray-800 font-semibold py-2 border-b border-gray-300">
      <li className="flex-1 text-center sm:w-1/5">Assign to</li>
      <li className="flex-1 text-center sm:w-1/5">Status</li>
      <li className="flex-1 text-center sm:w-1/5">Due Date</li>
      <li className="flex-1 text-center sm:w-1/5">Priority</li>
      <li className="flex-1 text-center sm:w-1/5">Comments</li>
    </ul>
    {task.map((el) => (
      <TaskCard
        id={el.id}
        key={el.id}
        user={el.User}
        status={el.Status}
        Date={el.Date}
        Priority={el.Priority}
        Comment={el.Comment}
      />
    ))}
  </div>
  <Pagination />
</div>

  );
}

export default Tasks;
