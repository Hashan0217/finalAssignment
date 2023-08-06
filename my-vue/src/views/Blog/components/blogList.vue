<template>
    <div>
        <waterfall :col="col" :data="data" :width="itemWidth" :gutterWidth="gutterWidth">
            <!-- @loadmore="loadmore"
            @scroll="scroll" -->
            <template>
                <router-link :to="{
                    name: 'BlogDetails',
                    params: {
                        id: item.article_id
                    }
                }" class="cell-item" v-for="item in data" :key="item.article_id">
                    <img v-if="item.imgUrl" :lazy-src="item.imgSrc" alt="加载错误" />
                    <div class="item-body">
                        <div class="item-desc">{{ item.title }}</div>
                        <div class="item-text">
                            {{ item.article_content }}
                        </div>
                        <div class="item-footer">
                            <div class="footer-left">
                                <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" alt=""
                                    srcset="" />
                                <div class="name">{{ item.author_name }}</div>
                            </div>
                            <div class="like">
                                <img src="" alt="" />
                                <div class="like-total">{{ item.likes_count }}</div>
                            </div>
                        </div>
                    </div>
                </router-link>
            </template>
        </waterfall>
    </div>
</template>
<script>

export default {

    props: {
        data: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            col: 5,
        };
    },
    computed: {
        itemWidth() {
            //大屏幕
            return (188 * 0.5 * (document.documentElement.clientWidth / 585))  //rem布局 计算宽度
        },
        gutterWidth() {
            //大屏幕
            return (8 * 0.5 * (document.documentElement.clientWidth / 375))	//rem布局 计算x轴方向margin(y轴方向的margin自定义在css中即可)
        }
    },


    methods: {},
};
</script>
<style lang="scss" scoped>
.item-body {
    margin: 9px;
    min-height: 100%;
    position: relative;

    .item-desc {
        text-align: left;
        font-family: Roboto;
        font-style: normal;
        font-weight: bolder;
        font-size: 18px;
        line-height: 16px;
        color: #189def;
    }

    .item-footer {
        display: flex;
        justify-content: space-between;
        // position: absolute;
        // bottom: 0;
        // left: 0;

        .footer-left {
            display: flex;
            align-items: center;
            font-family: SF Pro Display;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 20px;
            color: rgba(0, 0, 0, 0.6);

            img {
                border-radius: 50%;
                width: 25px;
                height: 25px;
                margin-right: 4px;
            }
        }

        .like {
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: SF Pro Display;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 14px;
            color: rgba(0, 0, 0, 0.4);

            img {
                margin-right: 4px;
            }
        }


    }

    .item-text {
        padding-left: 2px;
        height: 80px;
        // background: red;
        font-size: 14px;
        color: #8a8888;
        line-height: 16px;
        font-weight: lighter;
        margin-top: 10px;
        margin-bottom: 5px;
        overflow: hidden;

    }
}

.cell-item {
    display: block;
    text-decoration: none;
    width: 100%;
    margin-bottom: 6px;
    background: #ffffff;
    border: 2px solid #f0f0f0;
    border-radius: 6px;
    overflow: hidden;
    box-sizing: border-box;

    img {
        width: 100%;
        height: auto;
        display: block;
    }
}
</style>
