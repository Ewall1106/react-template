import request from '@/utils/request'

export type UserInfoResponse = {
  uid?: string
  username?: string
  password?: string
  nickname?: string
  avatar?: string
}

export function getUserInfo() {
  return request<UserInfoResponse>({
    url: '/user/info',
    method: 'get'
  })
}
