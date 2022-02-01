import React from "react";
import { useNavigate } from "react-router-dom";
export default function Form() {
  const navigate = useNavigate();
  return (
    <div className="conatiner">
      <div className="poll" onClick={() => { navigate("/start");}} >
        Start Polling
      </div>
      <div  className="poll"onClick={() => { navigate("/result");}}>
        View Polling
      </div>
    </div>
  );
}