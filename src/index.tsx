import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Routes, Route } from 'react-router-dom'

import Home from './views/home'
import About from './views/about'

import './styles'

// if (process.env.NODE_ENV === 'development') {
//   const { mockXHR } = require('../mock')
//   mockXHR()
// }

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="*" element={<Home />}></Route>
    </Routes>
  </HashRouter>,
  document.getElementById('root')
)
