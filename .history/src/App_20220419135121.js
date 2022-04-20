import React from 'react';
import Header from './components/Header'
import Howitworks from './components/Howitworks'
import About from './components/About'
import Agent from './components/Agent'
import Properties from './components/Properties'
import Contact from './components/Contact'
import All from './components/All'
import {
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
    <Routes>
      <Route
        path="/about"
        element={<About />}
      />
    </Routes>
      
      <Header />
      <Howitworks />
      <About />
      <Agent />
      <Properties />
      <Contact />
    </div>
  );
}

export default App;
