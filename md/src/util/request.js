import axios from 'axios'
const request= axios.create({    //根据指定配置创建一个新的 axios
  baseURL: process.env.VUE_APP_BASE_API+ "/api",
  timeout: 5000 // request timeout
})
request.interceptors.request.use(
  res=> {
    if (localStorage.getItem("token")) {
      res.headers['token'] = localStorage.getItem("token")
    }
    return res
  }
)
export default request