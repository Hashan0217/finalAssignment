<template>
  <div id="app">
    <Layout>
      <template #left>
        <div class="SiteAside">
          <SiteAside />
        </div>
      </template>
      <template #default>
        <Taber />
        <RouterView />
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from './components/Layout/index.vue'
import SiteAside from './components/SiteAside/index.vue'
import Taber from '@/components/Taber'
export default {
  name: 'App',
  components: {
    Layout,
    SiteAside,
    Taber
  }
}
</script>

<style lang="less">
@import "~@/styles/mixin.less";

body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  width: 100%;
  height: 100%;

}

.SiteAside {
  height: 100%;
}

//滚动条的样式
::-webkit-scrollbar {
  //滚动条宽高
  width: 8px;
  height: 10px;
}

::-webkit-scrollbar-thumb {
  //滚动条颜色和圆角
  background-color: #00a6ff;
  border-radius: 3px;
}
</style>
