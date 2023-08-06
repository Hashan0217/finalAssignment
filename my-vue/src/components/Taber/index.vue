<template>
    <div class="taber-container">
        <div class="container-left">{{ pageName }}</div>
        <div class="container-right">
            <el-avatar class="avatar" :size="35"
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            <span v-if="user_id" @click="justMy">{{ user_name }}</span>
            <span v-else @click="login">
                未登录用户
            </span>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            user_id: localStorage.getItem('userId'),
            user_name: localStorage.getItem('user_name'),
            ispage: '',
        }
    },
    mounted() {

        this.$bus.$on('userLogin', (user_id, user_name) => {
            this.user_id = user_id,
                this.user_name = user_name
        })
    },
    computed: {
        pageName() {
            this.ispage = this.$route.name
            return this.$route.name;
        },


    },
    methods: {
        login() { // 跳转到注册界面

            if (this.ispage === 'Login') {
                return
            }
            this.$router.push('/login')

        },
        justMy() {
            if (this.ispage === 'My') {
                return
            }
            this.$router.push('/my')
        }


    }
}
</script>

<style lang="less" scoped>
.taber-container {
    width: 100%;
    height: 60px;
    background: rgb(29, 35, 42);
    display: flex;
    justify-content: space-between;
    text-align: center;
    line-height: 60px;
    border-bottom: #625f5fa4 solid 2px;

    .container-left {
        margin-left: 50px;
        font-size: 18px;
        font-weight: bold;
        color: #fff;

    }

    .container-right {
        margin-right: 40px;
        font-size: 15px;
        font-weight: bold;
        color: #c2c1c1;
        display: flex;
        align-items: center;
        cursor: pointer;

        & span {
            margin-right: 15px;

            &:hover {
                color: #fff;
            }
        }


    }
}
</style>