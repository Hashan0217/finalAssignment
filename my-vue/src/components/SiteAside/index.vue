<template>
  <div class="site-aside-container">
    <Menu class="Menu" />
    <p class="footer">
      黑ICP备17001719号
    </p>
  </div>
</template>

<script>
import Menu from "./Menu";
export default {
  components: {
    Menu,
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";

.site-aside-container {
  width: 100%;
  height: 100%;
  // min-height: 100%;
  background: @dark;
  padding: 45px 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
}

.avatar-container {
  margin: 0 auto;
}

.footer {
  position: absolute;
  bottom: 0px;
  left: 20%;
  font-size: 14px;
  color: #fff;
}

.title {
  font-size: 1.2em;
  color: #fff;
  text-align: center;
}
</style>
