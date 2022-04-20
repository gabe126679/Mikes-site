import React from 'react';
import Header from './components/Header'
import Howitworks from './components/Howitworks'
import About from './components/About'
import Agent from './components/Agent'
import Properties from './components/Properties'
import Contact from './components/Contact'
import All from './components/All'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<All />}
          />
          <Route
            path="/about"
            element={<PageAbout />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="/Howitworks"
            element={<Howitworks />}
          />
        </Routes>
          
          {/* <Header />
          <Howitworks />
          <About />
          <Agent />
          <Properties />
          <Contact /> */}
    
      </BrowserRouter>
    </div> 
  );
}

export default App;
