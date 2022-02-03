import React from "react";
import { Navigate,Link } from "react-router-dom";
export default function Form() {
  

  return (
    <div className="conatiner">
      <div className="poll">
        <button > 
         <Link to="/start"> Start Polling </Link>
        </button>
      </div>
      <div >
        <button>
          <Link to="/result"> View Polling </Link>
        </button>
      </div>
    </div>
  );
}