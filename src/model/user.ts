import { makeAutoObservable } from 'mobx'
import { getUserInfo } from '@/api'

class User {
  info = {
    name: 'loading...'
  }

  constructor() {
    makeAutoObservable(this)
  }

  requestInfo = async () => {
    const res = await getUserInfo()
    this.setInfo(res.data)
  }

  setInfo = info => {
    this.info = info
  }

  getInfo = () => {
    return this.info
  }
}

export const UserObserver = new User()

export default UserObserver
