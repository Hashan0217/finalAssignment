<template>
  <div class="publish-page">
    <el-alert title="成功提示的文案" type="success" show-icon
      style="width: 50% ;height: 80px; background-color: rebeccapurple; position:absolute; top: 100%; left: 50%; transform:translate(-40%,-40%); z-index: 99;"
      v-if="isok">
    </el-alert>
    <div class="form">
      <label for="title">标题</label>
      <input type="text" id="title" v-model="title" style="width: 98%;" />

      <label for="cover">封面图片</label>
      <input type="file" id="cover" accept="image/*" @change="handleCoverUpload" />
      <img :src="cover" alt="" srcset="" style="width: 150px;height: 150px; object-fit: cover;margin-bottom: 10px;"
        v-if="cover">
      <label for="cover">选择分类</label>
      <el-select v-model="value" placeholder="请选择" style="width: 100%;">
        <el-option v-for="item in options" :key="item.category_id" :label="item.label" :value="item.title">
        </el-option>
      </el-select>
      <label for="content">内容</label>
      <div class="md">
        <v-md-editor v-model="md" height="800px"></v-md-editor>
      </div>


      <button @click="publishArticle">发布</button>
    </div>

  </div>
</template>

<script>
// import 'vue-markdown-editor/dist/index.css';
import VueMarkdownEditor from 'vue-markdown-editor';
import { getBlog } from "@/api/blog"
import { addBlog } from "@/api/blog"

export default {
  components: {
    VueMarkdownEditor
  },
  data() {
    return {
      title: '',
      cover: null,
      md: '',
      options: [],
      value: '',
      isok: false,
    };
  },
  async mounted() {

    const userId = localStorage.getItem("userId");
    if (!userId) {
      this.$router.push('/login')
    } else {
      await this.$store.dispatch('getcat')
      this.options = this.$store.state.category
      if (this.$route.params.id > 0) {
        const res = await getBlog(this.$route.params.id)
        if (res.code == 200) {
          const data = res.result.data[0]
          this.title = data.title
          this.md = data.article_content
          this.value = data.content_category
          this.cover = data.imgUrl
        }
      }

    }

  },
  methods: {
    handleCoverUpload(event) {
      const file = event.target.files[0];
      // 处理文件上传逻辑，例如显示图片预览
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.cover = e.target.result;
          console.log(e.target.result);
        };
        reader.readAsDataURL(file)


      }
    },
    async publishArticle() {
      // 在这里处理发布文章的逻辑，比如发送到后端保存等
      if (this.md.length < 5 || !this.value || this.title == 0) {
        alert('填写必要内容')
        return 0

      } else {
        const userId = localStorage.getItem('userId');
        const user_name = localStorage.getItem('user_name');
        const data = {
          text: this.md,
          title: this.title,
          category: this.value,
          author_id: userId,
          imgUrl: this.imgUrl,
          id: this.$route.params.id,
          author_name: user_name,
        }
        const res = await addBlog(data)
        console.log(res);
        if (res.data.code == 200) {
          this.$router.push('/my')
          setTimeout(() => {
            this.isok = false;
          }, 1500)
        }
      }


    }
  }
};
</script>

<style>
.publish-page {
  width: 100%;
  background: rgb(29, 35, 42);
  min-height: 98vh;
  margin: 0 auto;
  padding: 20px;
  color: #fff;
}

.publish-page h1 {
  text-align: center;
}

.form {
  margin-top: 20px;
  width: 90%;
  margin: 0 auto;
  z-index: 1;
}

.form label {
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
}

.form input {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
}

.form button {
  width: 80%;
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

}

.md {
  color: black;
}

.form button:hover {
  background-color: #0056b3;
}

.vue-mde-editor {
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
