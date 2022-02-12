import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar-comp-1/navbar'
import Header from './components/Header_Comp_6/Header';
import About from './components/About_Comp_2/About';
import Services from './components/Skills_Com_4/Skills';
import Projects from './components/Projects_comp_5/Projects'
import Contact from './components/Contacts_Comp_3/Contact';
import Footer from './components/Footer_Comp_8/footer';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
