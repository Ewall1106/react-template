import React from 'react'
import { observer } from 'mobx-react'
import { useNavigate } from 'react-router-dom'

export const About = observer(() => {
  const navigate = useNavigate()

  const onClick = () => {
    navigate('/home', { replace: true })
  }

  return (
    <div>
      <button onClick={onClick}>Go Home</button>
    </div>
  )
})

export default About
