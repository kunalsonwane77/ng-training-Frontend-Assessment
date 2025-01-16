import { createContext, useEffect, useState } from "react";

export const Todocontext = createContext()



function TodoContextProvider({children}) {

       let [task,settask]=useState([])
   
     async function fetchtaskdata(){
       let data = await fetch("http://localhost:3000/tasks") 
       let actualdata = await data.json()
   
   
       settask(actualdata)
   
   
      }
   

      useEffect(()=>{
         fetchtaskdata()
      },[task])



     function handledelete(id){
        
      fetch(`http://localhost:3000/tasks/${id}`,{
        method:"DELETE",
      })
     
      let deldta = task.filter((el)=>{
        return el.id!==id
      })
   
      settask(deldta)

     }

     function updatetask({edid,edit}){
      fetch(`http://localhost:3000/tasks/${edid}`, {
        method: "PUT",
        body: JSON.stringify(edit),
        headers: {
            "Content-Type": "application/json"
        }

       })
       alert("updation success")  

     }



  return (
    <Todocontext.Provider value={{task,handledelete,updatetask}}>
        {children}
        
    </Todocontext.Provider>
  )
}

export default TodoContextProvider
