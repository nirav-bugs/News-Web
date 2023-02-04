import './App.css';
import Nav from './components/Nav';
import News from './components/News';
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Nav/>
          <Routes>
            <Route exact path='/' element={<News key="general" pagesize="5" country="in" category="general"/>}/>
            <Route exact path='/business' element={ <News key="business" pagesize="5" country="in" category="business"/>}/>
            <Route exact path='/entertainment' element={ <News key="entertainment" pagesize="5" country="in" category="entertainment"/>}/>
            <Route exact path='/general' element={ <News key="general" pagesize="5" country="in" category="general"/>}/>
            <Route exact path='/health' element={ <News key="health" pagesize="5" country="in" category="health"/>}/>
            <Route exact path='/science' element={ <News key="science" pagesize="5" country="in" category="science"/>}/>
            <Route exact path='/sports' element={ <News key="sports" pagesize="5" country="in" category="sports"/>}/>
            <Route exact path='/technology' element={ <News key="technology" pagesize="5" country="in" category="technology"/>}/>
          </Routes>
        </Router>

        
      </div>
    )
  }
}
