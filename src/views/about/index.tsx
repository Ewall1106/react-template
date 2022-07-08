import React from 'react'
import { useNavigate } from 'react-router-dom'

import './index.less'

export const About = () => {
  const navigate = useNavigate()

  const onClick = () => {
    navigate('/home', { replace: true })
  }
  return (
    <div>
      <h4>About</h4>
      <button onClick={onClick}>Go Home</button>
    </div>
  )
}

export default About
