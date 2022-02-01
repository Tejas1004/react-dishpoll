import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Users from "../Resources/users.json";
//import axios from "axios";
export default function Login() {
    const[username,setUsername]=useState(" ");
    const[password,setPassword] = useState(" ");
    const user =Users;
    console.log(user);
    const usernameOnchange = (e) =>{
        setUsername(e.currentTarget.value);
    };
    const passwordOnchange = (e) =>{
        setPassword(e.currentTarget.value);
    };
    const Navigate = useNavigate();
    const submitOnchange = () => {
        var person = user.filter((item) =>item.username === username && item.password === password);
        if(person.length>0){
            sessionStorage.setItem("user",username)
            Navigate("/form")
        }
    }

    return(
        <div className='container'>
            <div className='wrapper'>
           <h1>Login</h1>
             
              <input type="text" placeholder="Enter Name" value={username} onChange={(e) => usernameOnchange(e)} />  <br/>
              <input type="text" placeholder="Enter Password" value={password} onChange={(e) => passwordOnchange(e)}/> <br/>
               <button onClick={submitOnchange}>Login</button>
             </div>
        </div>
    )
  }
