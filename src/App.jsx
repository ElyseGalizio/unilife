import { useState } from 'react'
// import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import Header from './components/Header/Header';
import Homepage from './pages/Homepage/Homepage';
import Footer from './components/Footer/Footer';



function App() {
  

  return (
    <div>
      <Header />
      <Homepage />
      <Footer />
    </div>
  )
}

export default App
