import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './elements/Header'
import BrCountry from './BrCountry'
import Countries from './Countries'


function App() {
  return (
    <Router>
      <div>
          <Header />
          <Route path='/' exact component={Countries} />
          <Route path='/countries/' component={BrCountry} />
      </div>
    </Router>
  )
}

export default App
