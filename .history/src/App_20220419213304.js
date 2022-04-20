import React from 'react';
import PageAbout from './components/PageAbout'
import Appointments from './components/Appointments'
import PageContact from './components/PageContact'
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
            path="/"
            element={<All />}
          />
          <Route
            path="about"
            element={<PageAbout />}
          />
          <Route
            path="contact"
            element={<PageContact />}
          />
          <Route
            path="Appointments"
            element={<Appointments />}
          />
        </Routes>

    </div> 
  );
}

export default App;
