import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
const router = new Router({
    routes:[{
        path: '/cutImg',
        name: '/cutImg',
        meta: {
            name: "图片剪切组件"
        },
        component: () => import('@/components/CutImg.vue')
    }
    ]
});
export default router