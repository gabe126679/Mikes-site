import React from 'react';
import Header from './components/Header'
import Howitworks from './components/Howitworks'
import About from './components/About'
import PageAbout from './components/PageAbout'
import Appointments from './components/Appointments'
import Properties from './components/Properties'
import PageContact from './components/PageContact'
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
            element={<PageContact />}
          />
          <Route
            path="/Appointments"
            element={<Appointments />}
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
