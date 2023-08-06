<template>
    <div class="hot-container">
        <div class="container-title">
            <i class="el-icon-s-promotion"></i>
            <span>热门</span>
        </div>
        <div class="container-content">
            <div class="content-card" v-for="(index, item) in list" :key="index">
                <div class="img">
                    <img src="@/assets/logo.png" alt="" srcset="">
                </div>
                <div class="text">
                    <div class="text-title">StartAi项目团队</div>
                    <div class="text-subtitle">召集合伙人</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            list: [1, 2, 3, 4,]
        }
    }
}
</script>

<style lang="less" scoped>
.hot-container {
    width: 100%;
    height: 100%;
    background: rgb(44, 52, 58);
    border-radius: 10px;
    cursor: pointer;



    .container-title {
        height: 50px;
        // background: rgb(102, 255, 0);
        font-size: 18px;
        color: red;
        text-align: center;
        line-height: 50px;
        border-bottom: 2px solid rgba(171, 171, 171, 0.865);

        .el-icon-s-promotion {
            font-size: 25px;
        }

        & span {
            margin-left: 10px;
            color: #fff;
            font-size: 24px;
            font-weight: bolder;


        }
    }

    .container-content {
        .content-card {
            &:hover {
                background: rgb(29, 35, 42);

            }

            margin-top: 30px;
            padding-left: 15px;
            height: 50px;

            display: flex;
            align-content: center;
            // justify-content: space-around;

            img {
                width: 40px;
                height: 40px;
                background: rebeccapurple;
                padding: 5px;
                border-radius: 10px;
            }

            .text {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-content: center;
                font-size: 18px;
                color: #fff;
                margin-left: 20px;
                padding-top: 1px;

                .text-title {
                    font-weight: bolder;

                }

                .text-subtitle {
                    color: rgb(85, 91, 96);
                    margin-top: 1px;
                    font-size: 15px;
                }
            }


        }

    }

}
</style>