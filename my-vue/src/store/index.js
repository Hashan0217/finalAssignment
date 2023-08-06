import Vue from 'vue'
import Vuex from 'vuex'
import { getBlogAll } from "@/api/blog"
import { getCategory } from "@/api/blog"
import { deleteBlog } from "@/api/blog"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    blog_all: [],
    category: [],
    categoryDataList: {},
    myBlog:[]
  },
  mutations: {
    SETBLOGALL(state, value) {
       state.blog_all=value
    },
    GETCAT(state, value) { 
        state.category=value      
    },
    CATCONTENT(state, value) {
      const categoryDataList = {}
      const data = state.blog_all
      const category = state.category
      category.filter(i => {
        const newData = data.filter(item => item.content_category == i.title)
        categoryDataList[i.title] = newData
      })
      state.categoryDataList=categoryDataList
    },

    GETMYBLOG(state) { 
      const id = localStorage.getItem('userId')
      const data = state.blog_all
     
      const newData = data.filter(item => {    
       return item.author_id == id
      })
      
      state.myBlog=newData
    },
    REMOVEDBLOG(state, id) {
      const data = state.blog_all
      const newData= data.filter(item => { return item.article_id !== id })
      state.blog_all = newData
    }
  },
  actions: {

    //获取全部文章
    async getBlog({ commit,state }) {
      const data = state.blog_all
      if (data.length) {
        return 0
      }
      const res = await getBlogAll()
      if (res.code === 200) {
         commit('SETBLOGALL',res.result.data)        
      }
    },

    //获取分类

    async getcat({ commit, state }) {
      const data = state.category
      if (data.length) {
        return 0
      }
      const res = await getCategory()
      if (res.code = 200) {
        commit('GETCAT',res.result.data) 
      }
      
    },

    //分类下的内容
    catcontet({ commit,state }) {
      if (state.categoryDataList.length>0) {
        return
      } else {
        commit('CATCONTENT')
      }
     
    },

    //获取 我的 文章

    getMyBlog({ commit, state }) { 
      if (state.myBlog.length>0) {
        return 
      } else {
        commit('GETMYBLOG')
      }
     
    },

    //删除文章
    
    async removeBlog({ commit},id) {
     console.log(id);
     const res= await deleteBlog(id)
    if (res.code==200) {
      commit('REMOVEDBLOG',id)
    }
    }

  },
  
})
