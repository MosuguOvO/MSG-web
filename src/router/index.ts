import { getItem } from '@/utils/storage';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { ElMessageBox } from 'element-plus';
import NProgress from 'nprogress';

//RouteRecordRaw[] 是一个数组，其中的每个元素都是 RouteRecordRaw 类型的对象，它们代表着路由记录。RouteRecordRaw 包含了路由的路径、组件、名称和其他路由配置选项。
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/index'
  },
  //index
  {
    path: '/index',
    name: 'Layout',
    component: () => import('@/views/Layout.vue'),
    children: [
      {
        path: 'anime',
        name: 'Anime',
        meta: {
          title: '漫画',
          requireAuth: false,
          keepAlive: false
        },
        component: () => import('@/views/Anime/index.vue')
      },
     
      {
        path: 'movie',
        name: 'Movie',
        meta: {
          title: '电影',
          keepAlive: true,
          requireAuth: true
        },
        component: () => import('@/views/Movie/index.vue')
      },

      {
        path: 'blog',
        name: 'Blog',
        meta: {
          title: '博客',
          keepAlive: true
        },
        component: () => import('@/views/Blog/index.vue')
      }
    ]
  },
  //article
  {
    path: '/article/:id',
    name: 'Article',
    meta: {
      keepAlive: false
    },
    component: () => import('@/views/Article/index.vue')
  },
  //anime
  {
    path: '/animewatch',
    name: 'AnimeWatch',
    meta: {
      title: '漫画详情',
      keepAlive: true,
      requireAuth: true
    },
    component: () => import('@/views/AnimeWatch/index.vue')
  },

  //login
  {
    path: '/login',
    name: 'Login',
    meta: {
      requireAuth: false
    },
    component: () => import('@/views/Login/index.vue')
  },
  {
    path: '/three',
    name: 'Three',
    meta: {
      requireAuth: false
    },
    component: () => import('@/views/Three/index.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    meta: {
      title: '页面去哪了QAQ',
      requireAuth: false,
      keepAlive: false
    },
    component: () => import('@/views/404.vue')
  },
  {
    path: '/weather',
    name: 'Weather',
    meta: {
      requireAuth: false
    },
    component: () => import('@/views/Weather/index.vue')
  }
];

const router = createRouter({
  linkExactActiveClass: 'router-active',
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const token = getItem('user');
  if (to.meta.title) {
    document.title = `${to.meta.title}--Mosugu`;
  }
  if (to.meta.requireAuth) {
    if (token) {
      NProgress.start();
      next();
    } else {
      ElMessageBox.confirm('请登录后再使用哦~', '登陆提示', {
        confirmButtonText: '确认',
        cancelButtonText: '走了走了',
        type: 'warning'
      })
        .then(() => {
          NProgress.start();
          next({ path: '/login' });
        })
        .catch(() => {
          return;
        });
    }
  } else {
    NProgress.start();
    next();
  }
});
router.afterEach(() => {
  NProgress.done();
});
export default router;
