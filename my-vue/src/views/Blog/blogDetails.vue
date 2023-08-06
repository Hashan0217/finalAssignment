<template>
    <div class="blog-details-container">
        <div class="blog-up">
            <div class="blog-up-title">
                <h1>{{ title }}</h1>
            </div>
            <div class="blog-up-content">
                <div class="author">
                    <el-avatar class="avatar" :size="65"
                        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                    <div class="time">
                        <div class="name">{{ author }}</div>
                        <span>{{ time }} · 点赞 {{ likes }}</span>
                        <router-link :to="{
                            name: 'Release',
                            params: {
                                id
                            }
                        }" class="edit" style="text-decoration: none;">编辑</router-link>
                    </div>
                </div>

            </div>
            <div class="blog-down-content">
                <div v-html="text" class="markdown-body" style="margin-bottom: 80px;"></div>
            </div>
        </div>
    </div>
</template>

<script>
// import markdown from "@/styles/markdown.css";
import { getBlog } from "@/api/blog"
export default {
    data() {
        return {
            text: '',
            title: '',
            author: '',
            time: '',
            likes: '',
            id: null
        }

    },

    async mounted() {
        const id = this.$route.params.id
        const res = await getBlog(id)
        if (res.code == 200) {
            const data = res.result.data[0]
            this.text = `<div> ${data.article_content}</div>`
            this.title = data.title
            this.author = data.author_name
            this.time = data.article_time
            this.likes = data.likes_count
            this.id = data.article_id
        } else {
            alert('获取失败，刷新一下')
        }

    }
}
</script>

<style lang="less" scoped>
body {
    overflow: none;
}

.blog-details-container {
    background: rgb(29, 35, 42);
    color: #fff;
    min-height: 98vh;

    .blog-up {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-content: center;
        padding-left: 30px;


        .blog-up-content {
            display: flex;
            flex-direction: column;

            .author {
                display: flex;
                align-items: flex-start;
                font-size: 20px;
            }

            .time {
                margin-left: 10px;
            }

            .name {
                margin-bottom: 5px;
            }

            .edit {
                margin-left: 20px;
                color: rgb(21, 126, 231);
            }
        }
    }

    .markdown-body {
        margin-top: 50px;
        color: #fff;
        font-size: 24px;
        width: 90%;
        height: 100%;
        overflow: none;
    }
}
</style>