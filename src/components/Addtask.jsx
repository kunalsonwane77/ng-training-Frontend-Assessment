import React, { useState } from 'react'

function Addtask() {


  let obj={
    User:"",
    Status:"",
    Date:"",
    Priority:"",
    Comment:"",

  }
  let [add,setadd]=useState(obj)



  function handlechange(e){
     setadd({...add,[e.target.name]:e.target.value})

  }


  function handleadd(){
   
    fetch('http://localhost:3000/tasks', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(add), 
    })

    alert("Task added")

  }

  return (
    <div className='mt-[100px] px-4'>
        <h1 className='text-center text-lg font-bold'>New Taks</h1>
       
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 border-2 rounded-md'> 
           <label>Assign to
             <select name="User" id="" value={add.User} onChange={handlechange}>
             <option value="" disabled>Select a User</option>
                <option value="User 1">User 1</option>
                <option value="User 2">User 2</option>
                <option value="User 3">User 3</option>
                <option value="User 4">User 4</option>
             </select>
           </label>


           <label> 
              status

              <select name="Status" id="" value={add.Status} onChange={handlechange}>
                <option value="" disabled>select</option>
                <option value="Not started">Not started</option>
                <option value="In progress">In progress</option>
                <option value="Completed">Completed</option>
              </select>
           </label>
       


       <label >
          Due Date
            <input type="date" name="Date" value={add.Date} id="" onChange={handlechange}/>
       </label>


       <label > 
        Priority
        <select name="Priority" id="" value={add.Priority} onChange={handlechange}>
          <option value="" disabled>select</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        
       </label>
   
   <label>Discription
   <input type="text" name="Comment" id="" value={add.Comment} className='w-[100%] h-[100px] border-2' onChange={handlechange}/>
   </label>
     
     

        </div>
       

       <button className='border-2 my-3 p-4 w-full sm:w-auto' onClick={handleadd}>submit</button>


    </div>
  )
}

export default Addtask