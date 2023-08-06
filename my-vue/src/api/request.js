import axios from "axios";
import showMessage from "../utils/showMessage";
// 创建一个axios的实例
const ins = axios.create({
  baseURL:'http://localhost:5000/api/'
}); 

ins.interceptors.response.use(function(resp) {
  if (resp.data.code !== 200) {
    showMessage({
      content: resp.data.msg,
      type: "error",
      duration: 1500,
    });
    return null;
  }
  return resp.data;
});

export default ins;
