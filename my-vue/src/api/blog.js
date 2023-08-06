import axios from "axios";
import request from "./request";

//获取全部文章
export async function getBlogAll() {
    return await request.get('/blog/blogall')
}

//获取分类
export async function getCategory() {
    return await request.get('/blog/category')
}

//根据id获取文章
export async function getBlog(id) {
    return await request.get('/blog', {
        params: {
            id
        }
    })
}

//发布与修改文章
export async function addBlog(data) {
    const params = new URLSearchParams();
    params.append('id', data.id);
    params.append('text', data.text);
    params.append('title', data.title);
    params.append('category', data.category);
    params.append('author_id', data.author_id);
    params.append('imgUrl', data.imgUrl);
    params.append('author_name', data.author_name);
    return await axios({
        method: 'POST',
        url: 'http://localhost:5000/api/blog/add',
        params
    })
}




//删除文章
export async function deleteBlog(id) {
    return await request.get('/blog/delete', {
        params: {
            id
        }
    })
}
