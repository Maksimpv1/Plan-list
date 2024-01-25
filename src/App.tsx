import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { LoginForm } from './components/login/login';

import './index.scss'
import { RegistrationForm } from './components/registration/registration';
import { MainPage } from './components/main/main';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={ <MainPage/>} />
          <Route path="/shcedule" />
          <Route path="/login" element={ <LoginForm/>} />
          <Route path="/registration" element={ <RegistrationForm/>} />
        </Routes>
      </Router>     
    </div>
  );
}

export default App;
