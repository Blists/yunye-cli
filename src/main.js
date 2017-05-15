// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
//js工具库 _
import _ from "lodash";
// css初始化
import "normalize.css";
//css动画库
import "animate.css";
import "./styles/style.less";
import router from './routers/router';
import store from './store/store';
import "./directive/directive";
import "./mixin/mixin";
import "./filtres/filter";
import App from "./App";

//手势操作
import VueTouch = 'vue-touch';
Vue.use(VueTouch, { name: 'v-touch' });

import FastClick from "fastclick";

// 去掉ios上300毫秒延迟
FastClick.attach(document.body);

Vue.config.devtools = true;
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
