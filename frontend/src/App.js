import React from 'react';
import { BrowserRouter as  Router, Route, Routes }from 'react-router-dom';
import Login from './Components/Login';
import Form from './Components/Polling/form';

const  App = () => {
  return( 
  <>
  <Router >
      <Routes>
      <Route path="/" element={<Login/>} exact />
      <Route path="/form" element={<Form/>}  />
  
      
      </Routes>
    </Router>
  
  </>
  );
};

export default  App;
