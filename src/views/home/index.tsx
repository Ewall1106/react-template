import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import UserObserver from '@/model/user'

import Info from '@/components/Info'

export const Home = observer(() => {
  const info = UserObserver.getInfo()

  useEffect(() => {
    UserObserver.requestInfo()
  }, [])

  return (
    <div>
      <Info name={info.name} />
    </div>
  )
})

export default Home
