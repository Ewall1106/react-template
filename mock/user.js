export const userApi = [
  {
    url: '/user/info',
    type: 'get',
    response: config => {
      return {
        code: 200,
        status: true,
        data: {
          uid: '123456',
          username: 'react-template'
        },
        message: 'success'
      }
    }
  },

  {
    url: '/user/login',
    type: 'post',
    response: config => {
      return {
        code: 200,
        entry: {
          token: '123456'
        }
      }
    }
  }
]

export default userApi
