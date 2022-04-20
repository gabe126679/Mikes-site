import React from 'react';
import Header from './components/Header'
import Howitworks from './components/Howitworks'
import About from './components/About'
import Agent from './components/Agent'
import Properties from './components/Properties'
import Contact from './components/Contact'
import Carousel from './components/Carousel'


function App() {
  return (
    <div className="App">
      <Header />
      <Howitworks />
      <About />
      <Agent />
      <Properties />
      <Carousel />
      <Contact />
    </div>
  );
}

export default App;