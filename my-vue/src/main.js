import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
//md编辑器
//导入v-md-edit 插件
import VMdEditor from '@kangc/v-md-editor';
//导入v-md-edit 插件样式
import '@kangc/v-md-editor/lib/style/base-editor.css';
//导入代码高亮模式，为github模式
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
//导入代码高亮样式
import '@kangc/v-md-editor/lib/theme/style/github.css';
//导入highlightjs
import hljs from 'highlight.js';
//预览
import VMdPreview from '@kangc/v-md-editor/lib/preview'
import '@kangc/v-md-editor/lib/style/preview.css';
Vue.use(VMdPreview);
//全局使用 v-md-edit 插件
Vue.use(VMdEditor);
//配置v-md-edit插件的代码高亮为github模式，使用highlight.js
VMdEditor.use(githubTheme, {
  Hljs: hljs,
});





//
Vue.config.productionTip = false






//饿了么组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//瀑布流组件
import waterfall from "vue-waterfall2";
Vue.use(waterfall);
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate(){
		Vue.prototype.$bus = this	//安装全局事件总线
	}
  
}).$mount('#app')
