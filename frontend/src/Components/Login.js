import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Users from "../Resources/users.json"
//import axios from "axios";
export default function Login() {
    const[username,setUsername]=useState(" ");
    const[password,setPassword] = useState(" ");
    const user =Users;
    const usenameOnchange = (e) =>{
        setUsername(e.currentTarget.value);
    };
    const passwordOnchange = (e) =>{
        setPassword(e.currentTarget.value);
    };
    const submitOnchange = () => {
        var person = user.filter(
            (item) =>item.username === username && item.password === password
        );
        if(person.length>0){
            sessionStorage.setItem("user",username)
            Navigate("/form")
        }
    }






    return(
    <> 
        <div>
           <h1>Login</h1>
           <form >
               <input type='text' placeholder='username' name='username' value={username} onChange={(e)=>usenameOnchange(e)} /> <br/>
               <input type='password' placeholder='password' name='password' value={password} onChange={(e)=>passwordOnchange(e)} /> <br/>
               <button onClick={submitOnchange}>Login</button>
           </form>
        </div>
    </> 
    )
  }
