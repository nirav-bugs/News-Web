import './App.css';
import Nav from './components/Nav';
import News from './components/News';
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
// import 'dotenv'

export default class App extends Component {
  apikey = process.env.REACT_APP_NEWS_API

  state={
    progress:0
  }
  setprogress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
          <Nav />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            height={3}
          />
          <Routes>
            <Route exact path='/' element={<News apikey={this.apikey} setprogress={this.setprogress} key="general" pagesize="5" country="in" category="general" />} />
            <Route exact path='/business' element={<News apikey={this.apikey} setprogress={this.setprogress} key="business" pagesize="5" country="in" category="business" />} />
            <Route exact path='/entertainment' element={<News apikey={this.apikey} setprogress={this.setprogress} key="entertainment" pagesize="5" country="in" category="entertainment" />} />
            {/* <Route exact path='/general' element={<News apikey={this.apikey} setprogress={this.setprogress} key="general" pagesize="5" country="in" category="general" />} /> */}
            <Route exact path='/health' element={<News apikey={this.apikey} setprogress={this.setprogress} key="health" pagesize="5" country="in" category="health" />} />
            <Route exact path='/science' element={<News apikey={this.apikey} setprogress={this.setprogress} key="science" pagesize="5" country="in" category="science" />} />
            <Route exact path='/sports' element={<News apikey={this.apikey} setprogress={this.setprogress} key="sports" pagesize="5" country="in" category="sports" />} />
            <Route exact path='/technology' element={<News apikey={this.apikey} setprogress={this.setprogress} key="technology" pagesize="5" country="in" category="technology" />} />
          </Routes>
        </Router>


      </div>
    )
  }
}
