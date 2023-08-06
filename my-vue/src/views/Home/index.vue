<template>
  <div class="home-container">
    <!-- 上 -->
    <div class="container-top">
      <!-- 轮播图 -->
      <div class="left">
        <Carousel :list="list" />
      </div>
      <!-- 热搜 -->
      <div class="right">
        <Hot />
      </div>
    </div>
    <!-- 下 -->
    <div class="container-bottom">
      <!-- 精选 -->
      <div class="featured">
        <div class="featured-title">
          Featured-精选文章
        </div>
        <div class="featured-content">
          <Card />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from './components/Carousel.vue'
import Hot from './components/hot.vue'
import Card from './components/card.vue'
export default {

  components: {
    Carousel,
    Hot,
    Card
  },
  data() {
    return {
      list: ['https://tse2-mm.cn.bing.net/th/id/OIP-C.DxZc4-DAVtWpdQ4mvbRmiQHaEK?pid=ImgDet&rs=1',
        'https://static.oschina.net/uploads/space/2017/0106/121547_hZbU_2308616.jpg',
        'https://ts1.cn.mm.bing.net/th/id/R-C.12ca46d0bba0742d1a9bb5cff39417fc?rik=7IENtOZLLXI%2bfw&riu=http%3a%2f%2fi3.img.969g.com%2fdown%2fimgx2015%2f02%2f06%2f289_094012_31635.jpg&ehk=E97czMkYMVZjoZirRi%2b9RdSjLM31pvWh4YZxIzD7%2fRg%3d&risl=&pid=ImgRaw&r=0',
        'https://cn.bing.com/th?id=OHR.RedSailboat_ZH-CN2386102503_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
        'https://ts1.cn.mm.bing.net/th/id/R-C.0861ae22817dd554d00356aa4adc7583?rik=VniT%2fTZUkpipig&riu=http%3a%2f%2fimage.hnol.net%2fc%2f2016-10%2f09%2f14%2f201610091430224471-2127595.jpg&ehk=hmohWUXrlKUcY6V%2fJuELJsDb%2bwK8%2bulFxpnF%2brDINPw%3d&risl=&pid=ImgRaw&r=0']
    }

  },
  mounted() {
    this.$store.dispatch('getBlog')
  },


}
</script>

<style lang="less" scoped>
.home-container {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: rgb(29, 35, 42);

}



.container-top {
  // background: red;
  height: 400px;
  display: flex;

  .left {
    margin-top: 5px;
    padding-left: 20px;
    width: 70%;
    height: 100%;

  }

  .right {
    width: 25%;
    margin-left: 30px;
    margin-top: 5px;
    height: 98%;

  }
}

.container-bottom {
  // background: blue;
  height: 100%;
  width: 100%;
}


.featured {
  margin-top: 30px;
  margin-bottom: 20px;

  .featured-title {
    font-size: 24px;
    font-weight: bolder;
    color: #fff;
    margin-left: 25px;
    margin-bottom: 10px;
  }



}
</style>