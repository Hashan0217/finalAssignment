<template>
  <div class="my-page">
    <div class="profile">
      <div class="avatar">
        <img :src="avatar" alt="头像" />
      </div>
      <h2 class="avatar-name">{{ name }}</h2>
    </div>
    <div class="articles">
      <h3>发布的文章</h3>
      <div class="card" v-for="item in articles" :key="item.article_id">
        <!-- 封面 -->
        <div class="cover-image" v-if="item.imgUrl">
          <img :src="item.imgUrl" alt="封面图片" />
        </div>
        <!-- 信息 -->
        <div class="cover-content">
          <h4>{{ item.title }}</h4>
          <router-link :to="{
            name: 'BlogDetails',
            params: {
              id: item.article_id
            }
          }" class="content" style="text-decoration: none;">{{ truncateContent(item.article_content) }}</router-link>
          <div class="meta">
            <span class="time">{{ item.article_time }}</span>
            <div class="">
              <router-link :to="{
                name: 'Release',
                params: {
                  id: item.article_id
                }
              }" class="edit" style="text-decoration: none;">编辑</router-link>
              <span class="edit-remot" @click="remove(item.article_id)">删除</span>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="quit-user">
      <button style="margin-top: 20px; width: 80%;" @click="quitUser">退出登录</button>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png', // 你的头像路径
      name: localStorage.getItem('user_name'),
      articles: [],
    };
  },
  async mounted() {

    const userId = localStorage.getItem("userId");
    if (!userId) {
      this.$router.push('/login')
    } else {
      await this.$store.dispatch('getBlog')
      await this.$store.dispatch('getMyBlog')

    }
    this.articles = this.$store.state.myBlog
    console.log(this.articles);
  },
  methods: {
    truncateContent(content) {
      const maxLength = 100; // 截取的内容最大长度
      if (content.length > maxLength) {
        return content.substring(0, maxLength) + '...';
      }
      return content;
    },
    handleClick(id) {
      console.log(id);
    },
    remove(id) {
      this.$store.dispatch('removeBlog', id)
      //刷新
      window.location.reload()
    },
    quitUser() {
      localStorage.removeItem("userId");
      localStorage.removeItem("user_name");
      this.$router.push('/login')
      this.$bus.$emit('userLogin', '', '')
    }
  },
};
</script>
<style lang="less" scoped>
.my-page {
  // max-width: 800px;
  width: 100%;
  background: rgb(29, 35, 42);

  min-height: 98vh;
  margin: 0 auto;
  padding: 20px;
}

.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 10px;

}

.avatar-name {
  color: #007bff;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.articles {
  margin-top: 20px;
  color: white;
}

.articles h3 {
  margin: 20px auto;
  width: 95%;
  height: 60px;
  line-height: 60px;
  // margin-left: 10px;
  padding-left: 10px;
  border-radius: 10px;
  background: #007bff;
}

.card {

  margin: 0 auto;
  background-color: #f2f2f2;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  width: 90%;
  color: black;
  cursor: pointer;
  display: flex;
  position: relative;
}

.cover-content {
  display: flex;
  flex-direction: column;

}

.card h4 {
  margin: 0;
  font-size: 28px;
  margin-bottom: 10px;
}

.card .content {
  margin-top: 5px;
  color: #333;
  font-size: 20px;
}

.card .meta {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-size: 12px;
  color: #777;
  position: absolute;

  bottom: 10px;
  right: 10px;
}


.card .meta .time {
  margin-right: 10px;
}

.edit-remot {
  color: red;
  margin-left: 5px;
  cursor: pointer;
}

.card .meta .edit {
  cursor: pointer;
  color: #007bff;
}

.card .cover-image {

  width: 30%;
  height: 200px;
  margin-bottom: 10px;
  overflow: hidden;
  margin-right: 30px;

}

.card .cover-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}
</style>