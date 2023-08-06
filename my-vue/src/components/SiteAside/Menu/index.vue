<template>
  <nav class="menu-container">
    <router-link :exact="item.exact" v-for="item in items" :key="item.link" :to="{
      name: item.name,
      params: {
        id: 0
      }
    }" active-class="selected" exact-active-class="">
      <div class="icon">
        <Icon :type="item.icon" />
      </div>
      <span>{{ item.title }}</span>
    </router-link>
  </nav>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      items: [
        {
          name: "Home",
          title: "首页",
          icon: "home",
          exact: true,
        },
        {
          name: "Blog",
          title: "文章",
          icon: "blog",
          exact: false, // 激活状态是否要精确匹配
        },
        {
          name: "Release",
          title: "发布",
          icon: "about",
          exact: true,
        },
        {
          name: "My",
          title: "我的",
          icon: "code",
          exact: true,
        },
        {
          name: "Message",
          title: "联系",
          icon: "chat",
          exact: true,
        },
      ],
    };
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";

.menu-container {

  color: rgb(21, 25, 28);
  margin: 24px 0;
  min-width: 230px;

  a {
    &.selected {
      background: darken(@words, 3%);

    }

    text-decoration: none;
    /* 去除默认的下划线 */
    outline: none;
    /* 去除旧版浏览器的点击后的外虚线框 */
    color: rgb(149, 153, 156);
    padding: 0 50px;
    display: block;
    display: flex;
    align-items: center;
    height: 60px;

    .icon {
      width: 24px;
    }

    &:hover {
      border-left: solid 4px #fff;
      color: #fff;
    }
  }
}
</style>
