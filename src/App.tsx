import React from 'react';
import styles from './app.module.scss'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { LoginForm } from './components/login/login';

function App() {
  return (
    <div className={ styles.container }>
      <Router>
        <Routes>
          <Route path="/" element={ <LoginForm/>} />
          <Route path="/shcedule" />
        </Routes>
      </Router>     
    </div>
  );
}

export default App;
