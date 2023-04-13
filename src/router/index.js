import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//     return originalPush.call(this, location).catch(err => err)
// }

import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Search from '@/pages/Search';

let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

VueRouter.prototype.push = function (location, resolve, reject) {
    //第一个形参：路由跳转的配置对象（query|params）
    //第二个参数：undefined|箭头函数（成功的回调）
    //第三个参数:undefined|箭头函数（失败的回调）
    if (resolve && reject) {
        //push方法传递第二个参数|第三个参数（箭头函数）
        //originPush：利用call修改上下文，变为(路由组件.$router)这个对象，第二参数：配置对象、第三、第四个参数：成功和失败回调函数
        originPush.call(this, location, resolve, reject);
    } else {
        //push方法没有产地第二个参数|第三个参数
        originPush.call(this, location, () => { }, () => { });
    }
};

//重写VueRouter.prototype身上的replace方法了
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject);
    } else {
        originReplace.call(this, location, () => { }, () => { });
    }
};

export default new VueRouter({
    routes: [
        {
            name: "home",
            path: "/home",
            component: Home,
            meta: { show: true }
        },
        {
            name: "login",
            path: "/login",
            component: Login,
            meta: { show: false }
        },
        {
            name: "register",
            path: "/register",
            component: Register,
            meta: { show: false }
        },
        {
            name: "search",
            path: "/search/:keyword",
            component: Search,
            meta: { show: true }
        },
        {
            path: '*',
            redirect: '/home',

        }
    ]
})