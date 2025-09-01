import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router,
          Route,
          Routes as Switch,
 } from 'react-router';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        {/* in recent versions of React Router, use `Routes` instead of `Switch` */}  
        <Switch>
          <Route path="/" element={<News key="general" pageSize={15} country="us" category="general" />} />
          <Route path="/general" element={<News key="general" pageSize={15} country="us" category="general" />} />
          <Route path="/business" element={<News key="business" pageSize={15} country="us" category="business" />} />
          <Route path="/entertainment" element={<News key="entertainment" pageSize={15} country="us" category="entertainment" />} />
          <Route path="/health" element={<News key="health" pageSize={15} country="us" category="health" />} />
          <Route path="/science" element={<News key="science" pageSize={15} country="us" category="science" />} />
          <Route path="/sports" element={<News key="sports" pageSize={15} country="us" category="sports" />} />
          <Route path="/technology" element={<News key="technology" pageSize={15} country="us" category="technology" />} />
        </Switch>
        </Router>
      </div>
    )
  }
}

