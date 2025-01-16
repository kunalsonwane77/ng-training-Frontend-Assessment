import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { Todocontext } from '../context/TodoContextProvider'

function EditTask() {

  let {updatetask}=useContext(Todocontext)


  let {edid}= useParams()

  console.log(edid)         


  let [edit,setedit]=useState({})

  async function handleedit(){
     let data = await fetch(`http://localhost:3000/tasks/${edid}`)
     let actualdata = await data.json()
      setedit(actualdata)

  }

  useEffect(()=>{
    handleedit()
  },[])



   function editchange(e){
     setedit({...edit,[e.target.name]:e.target.value})
   }

  return (
    <div className='mt-[100px] px-4'>
    <h1 className='text-center text-lg font-bold'>New Taks</h1>
  
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 border-2 rounded-md'> 
       <label>Assign to
         <select name="User" id="" value={edit.User} onChange={editchange} className='border-2 m-2 p-1 rounded-md' >
         <option value="" disabled>Select a User</option>
            <option value="User 1">User 1</option>
            <option value="User 2">User 2</option>
            <option value="User 3">User 3</option>
            <option value="User 4">User 4</option>
         </select>
       </label>


       <label> 
          status

          <select name="Status" id="" value={edit.Status} onChange={editchange} className='border-2 m-2 p-1 rounded-md'>
            <option value="" disabled>select</option>
            <option value="Not started">Not started</option>
            <option value="In progress">In progress</option>
            <option value="Completed">Completed</option>
          </select>
       </label>
   


   <label >
      Due Date
        <input type="date" name="Date" id="" value={edit.Date} onChange={editchange} className='border-2 m-2 p-1 rounded-md' />
   </label>


   <label > 
    Priority
    <select name="Priority" id="" value={edit.Priority} onChange={editchange} className='border-2 m-2 p-1 rounded-md'>
      <option value="" disabled>select</option>
      <option value="Low">Low</option>
      <option value="Medium">Medium</option>
      <option value="High">High</option>
    </select>
    
   </label>

<label>Discription
<input type="text" name="Comment" id="" className='w-[100%] h-[100px] border-2' value={edit.Comment} onChange={editchange} />
</label>
 
 

    </div>
   

   <button className='border-2 my-3 px-2 py-1 rounded-md bg-slate-400 text-white w-full sm:w-auto' onClick={()=>{
    updatetask({edid,edit})
   }}>submit</button>


</div>
  )
}

export default EditTask
