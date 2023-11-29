import { useState } from 'react'
// import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import Header from './components/Header/Header';
import Homepage from './pages/Homepage/Homepage';



function App() {
  

  return (
    <div>
      <Header />
      <Homepage />
    </div>
  )
}

export default App
