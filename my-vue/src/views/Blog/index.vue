<template>
  <div class="bolg-container">
    <!-- 导航 -->
    <div class="blog-container-taber">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane :label="item.title" :name="item.name" v-for="item in tabsList" :key="item.id">
          <div class="tab-content">
            <blogList v-loading="loading" :data="cardList" v-if="item.name === activeName" />
          </div>
        </el-tab-pane>
      </el-tabs>

    </div>
  </div>
</template>

<script>

import blogList from './components/blogList.vue'
export default {
  components: {
    blogList
  },
  mounted() {

  },
  data() {
    return {
      activeName: 'business',
      // tabsList: [],
      cardList: [],
      categoryDataList: {},
      loading: true
    };
  },
  computed: {
    //获取文章分类
    tabsList() {
      return this.$store.state.category
    }
  },
  methods: {
    async handleClick(tab) {
      // console.log(tab.label);
      this.cardList = this.categoryDataList[tab.label]
      setTimeout(() => {
        this.loading = false
      }, 600)

    },

  },

  async mounted() {

    await this.$store.dispatch('getBlog')
    await this.$store.dispatch('getcat')
    await this.$store.dispatch('catcontet')

    this.categoryDataList = this.$store.state.categoryDataList

    this.handleClick({ label: '创业' })




  },
}
</script>

<style lang="less" scoped>
.bolg-container {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  min-height: 98vh;
  background: rgb(29, 35, 42);


  .blog-container-taber {
    color: #FFF;
    // width: 99%;
    margin: 0px auto;
    height: 100%;


    ::v-deep .el-tabs__nav {
      //tab_nav去掉border
      border: 0;
    }

    ::v-deep .el-tabs__item {
      margin-top: 10px;
      width: 100px;
      height: 40px;
      text-align: center;
      padding: 0;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      line-height: 40px;
      display: inline-block;
      font-size: 15px;
      color: #fff;
      border: 0;
      position: relative;
    }

    ::v-deep .el-tabs__item.is-active {
      //激活项样式
      color: rgba(255, 255, 255, 0.9);
      background-color: rgb(64, 158, 255);
      border-radius: 4px 4px 0 0;
    }

    .tab-content {
      margin-left: 25px;

    }

  }

}
</style>