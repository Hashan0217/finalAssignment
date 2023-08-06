import axios from "axios";
import request from "./request";

//登录
export async function login(id_name,password) {
    return await request.get('/login', {
        params: {
            id:id_name,
            password:password
        }
    })
}
//注册
export async function register(data) {
    const params = new URLSearchParams();
    params.append('id', data.id);
    params.append('password', data.password);
    return await axios({
        method: 'POST',
        url: 'http://localhost:5000/api/login',
        params
    })
}
