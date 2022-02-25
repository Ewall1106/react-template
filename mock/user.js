export const userApi = [
  {
    url: "/user/info",
    type: "get",
    response: (config) => {
      return {
        code: 200,
        data: {
          name: "Ewall Xiong",
          avatar:
            "https://raw.githubusercontent.com/Ewall1106/panda-vue-template/master/src/assets/logo.png",
          id: "00001",
        },
        status: true,
        message: "success",
      };
    },
  },

  {
    url: "/user/login",
    type: "post",
    response: (config) => {
      return {
        code: 200,
        entry: {
          token: "mall-token123456",
        },
      };
    },
  },
];

export default userApi;
