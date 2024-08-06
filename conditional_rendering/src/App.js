import React from 'react';
import './App.css';
import Greetings from './components/Greetings';
import Login from './components/login';
import StudentCard from './components/StudentCard';

function App() {
  return (
    <div className="App">
      <Greetings />
      <Login />
      <StudentCard />
    </div>
  );
}

export default App;
