import React from 'react'
import { useNavigate } from 'react-router-dom'

import './index.less'

export const Home = () => {
  const navigate = useNavigate()

  const onClick = () => {
    navigate('/about', { replace: true })
  }
  return (
    <div>
      <h4>Home</h4>
      <button onClick={onClick}>Go About</button>
    </div>
  )
}

export default Home
