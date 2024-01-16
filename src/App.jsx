import { useState } from 'react'
import {Routes, Route} from "react-router-dom";
import './App.css'
import Header from './components/Header/Header';
import Homepage from './pages/Homepage/Homepage';
import Footer from './components/Footer/Footer';
import SeeAllCities from './pages/SeeAllCities/SeeAllCities';



function App() {
  

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/allcities' element={<SeeAllCities />} />
        {/* data comes from cities/name */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App
