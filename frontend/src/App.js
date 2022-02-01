import React from 'react';
import { BrowserRouter as  Router, Route, Routes }from 'react-router-dom';
import Login from './Components/login';
import Form from './Components/Polling/form';
import Start from "./Components/Polling/start";
import Result from './Components/Polling/result';

const  App = () => {
 
return (
  <Router>
    <div className="conatiner">
      <Routes> <Route path="/" element={<Login />} /></Routes>
      <Routes> <Route path="/form" element={<Form />} /></Routes>
      <Routes><Route path="/start" element={<Start />} /></Routes>
      <Routes><Route path="/result" element={<Result />} /></Routes>
    </div>
  </Router>
);
}

export default  App;

