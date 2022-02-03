import React from 'react';
import { BrowserRouter, BrowserRouter as  Router, Route, Routes }from 'react-router-dom';
import Login from './Components/login';
import Form from './Components/Polling/form';
import Start from "./Components/Polling/start";
import Result from './Components/Polling/result';

import { Nomatch } from './Components/Nomatch';

const  App = () => {
 
return (
  
  <Router>
    <div className="conatainer">
      <Routes>
              <Route path="/" element={<Login />} exact />
              <Route path="/form" element={<Form />} />
              <Route path="/start" element={<Start />} />
              <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  </Router>
  
);
}

export default  App;

