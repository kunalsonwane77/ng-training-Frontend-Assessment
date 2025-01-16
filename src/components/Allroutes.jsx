import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Tasks from './Tasks'
import Addtask from './Addtask'
import EditTask from './EditTask'

function Allroutes() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Tasks/>} />
            <Route path='/add' element={<Addtask/>}/>
            <Route path='/:edid' element={<EditTask/>}></Route>
        </Routes>
    </div>
  )
}

export default Allroutes