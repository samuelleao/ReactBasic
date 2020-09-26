import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'

import Header from './components/header'
import Home from './components/home'
import AboutUs from  './components/about_us'
import Contact from './components/contact'

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Header/>
      <Route path='/' exact component={Home} />
      <Route path='/about' component={AboutUs} />
      <Route path='/contact' component={Contact} />
    </div>
  </BrowserRouter>, 
  document.getElementById('content')
)

