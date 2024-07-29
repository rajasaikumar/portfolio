import React from 'react';
import Home from './components/home';
import Contact from './components/contact';
import About from './components/about';
import Header from './components/header';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import './App.css';

const App = () => {
  return (
    <div>
     <Header/>
     <main>
      <Home/>
      <About/>
      <Contact/>
     </main>
    </div>
  )
}

export default App
