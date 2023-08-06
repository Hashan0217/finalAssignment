<template>
    <div class="card-container">
        <router-link :to="{
            name: 'BlogDetails',
            params: {
                id: item.article_id
            }
        }" class="card" style="text-decoration: none;" v-for="(item, index) in  listdata " :key="index">
            <div class="image">
                <img src="https://bpic.588ku.com/templet_pic/20/06/30/5046919a2ad42837f33d6b86246089da.jpg!/fw/750/quality/90/unsharp/true/compress/true"
                    alt="">
            </div>
            <div class="avatar">
                <el-avatar class="avatar" :size="55"
                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            </div>
            <div class="text">
                <div class="text-author">
                    {{ item.author_name }}
                </div>
                <div class="text-title">
                    {{ item.title }}
                </div>
                <div class="text-time">
                    <i class="el-icon-time"></i>
                    <span>{{ item.article_time }}</span>
                </div>
            </div>
        </router-link>
    </div>
</template>
  
  
<script>

export default {
    data() {
        return {
            // datalist:[]
        }
    },
    computed: {
        listdata() {
            return this.$store.state.blog_all.slice(0, 12)
        }
    }
}

</script>
  
<style lang="less" scoped>
.card-container {
    display: flex;
    justify-content: space-between;
    align-content: center;
    flex-wrap: wrap;
    width: 95%;
    margin: 0 auto;
    cursor: pointer;

    .card {
        margin-bottom: 30px;
        position: relative;
        width: 240px;
        height: 280px;
        // background: red;
        background: rgb(44, 52, 58);
        border-radius: 10px;
        display: flex;
        flex-direction: column;

        .image {
            width: 240px;
            height: 150px;


            & img {
                border-radius: 10px 10px 0 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

        }

        .avatar {
            position: absolute;
            right: 10px;
            top: 60px;


        }

        .text {
            display: flex;
            flex-direction: column;

            .text-author {
                margin-top: 20px;
                margin-left: 5px;
                color: rgb(123, 128, 133);
                font-size: 14px;
            }

            .text-title {
                margin-left: 5px;
                margin-top: 8px;
                font-size: 18px;
                font-weight: bolder;
                color: #fff;
            }

            .text-time {
                margin-left: 5px;
                font-size: 14px;
                margin-top: 30px;
                color: rgb(123, 128, 133);

                & span {
                    margin-left: 5px;
                }
            }

        }
    }

}
</style>