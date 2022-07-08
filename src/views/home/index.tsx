import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getUserInfo } from '@/api'

import './index.less'

export const Home = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')

  useEffect(() => {
    getInfo()
  }, [])

  const getInfo = () => {
    getUserInfo().then(res => {
      const { username } = res.data
      setName(username)
    })
  }

  const onClick = () => {
    navigate('/about', { replace: true })
  }
  return (
    <div>
      <h4>Home</h4>
      <div>
        route navigate: <button onClick={onClick}>Go About</button>
      </div>
      <div>api request: This is {name}</div>
    </div>
  )
}

export default Home
