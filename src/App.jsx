import React from 'react'
import "./App.css"
import{BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar'
import AboutUs from './components/AboutUs'
import Home from './components/Home'
import Catalog from './components/Catalog'
import Services from './components/Services'

const App = () => {
  return (
    <div>
      <Router>
          <Navbar/>
        <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/aboutus' Component={AboutUs}></Route>
          <Route path='/services' Component={Services}></Route>
          <Route path='/catalog' Component={Catalog}></Route>
          <Route path='/contact' Component={Home}></Route>
        </Routes>
      </Router>
    </div>
    
  )
}

export default App