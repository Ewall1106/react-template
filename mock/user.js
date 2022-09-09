export const userApi = [
  {
    url: '/user/info',
    type: 'get',
    response: config => {
      return {
        code: 200,
        status: true,
        message: 'success',
        data: {
          name: 'react-template'
        }
      }
    }
  }
]

export default userApi
