<template>
  <el-carousel height="400px" :interval="5000" arrow="always" style=" border-radius: 10px;">
    <el-carousel-item v-for="( item, index) in list" :key="index">
      <img class="img" :src="item" alt="">
    </el-carousel-item>
  </el-carousel>
</template>


<script>

export default {
  props: {
    list: {
      type: Array,
      required: true
    }
  }
}

</script>

<style lang="less" scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;

}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;

}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;

}

.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>