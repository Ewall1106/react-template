import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './views/home'
import About from './views/about'

import './styles'

if (process.env.PROJECT_ENV === 'mock') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<Home />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
