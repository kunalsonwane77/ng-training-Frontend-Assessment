import React, { useState } from 'react';
import { useContext } from 'react';
import { Todocontext } from '../context/TodoContextProvider';
import { Link } from 'react-router-dom';

function TaskCard({ user, status, Date, Priority, Comment , id}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

let {handledelete}=useContext(Todocontext)



  return (
    <div className="grid grid-cols-2 sm:grid-cols-5 items-center w-full h-auto bg-slate-500 text-amber-50 px-4 mb-2 rounded-md">
    <p className="text-center">{user}</p>
    <p className="text-center">{status}</p>
    <p className="text-center">{Date}</p>
    <p className="text-center">{Priority}</p>
    <div className="flex justify-center items-center relative">
      <p className="truncate">{Comment}</p>
      <button
        onClick={toggleDropdown}
        className="text-amber-50 p-2 cursor-pointer ml-2"
      >
        &#9660;
      </button>
      {dropdownOpen && (
        <div className="absolute top-full right-0 bg-slate-600 text-white py-2 px-4 rounded-md shadow-lg z-10">
          <Link to={`/${id}`}>
            <button className="block w-full text-left py-1 hover:bg-slate-700 ">
              Edit
            </button>
          </Link>
          <button
            className="block w-full text-left py-1 hover:bg-slate-700"
            onClick={() => {
              handledelete(id);
            }}
            value={id}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  </div>
  
  );
}

export default TaskCard;

