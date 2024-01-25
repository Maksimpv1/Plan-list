import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { LoginForm } from './components/login/login';

import './index.scss'
import { RegistrationForm } from './components/registration/registration';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={ <LoginForm/>} />
          <Route path="/shcedule" />
          <Route path="/registration" element={ <RegistrationForm/>} />
        </Routes>
      </Router>     
    </div>
  );
}

export default App;
