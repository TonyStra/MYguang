// import Vue from 'Vue';
// import VueRouter from 'vue-router';

// Vue.use(VueRouter);
import routerConfig from '../router';
import apiConfig from './api_config.js';

Vue.prototype.axios=axios;
Vue.prototype.api=apiConfig;

import AppComponent from './component/App.vue';//导入根组件

import routerConfig from './router';
// 渲染根组件，启动项目
new Vue({
    el:'#app',
    // render:c=>c(AppComponent),
    render(createNode){
        return createNode(AppComponent);
    },
    router:new VueRouter(routerConfig)
});