import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: "/login"
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/user/login.vue")
  },
  // 首页
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/home/index.vue"),
    redirect: "/home/backstage",
    children: [
      {
        path: "backstage",
        name: "backstage",
        component: () => import("@/views/home/backstage.vue"),
        meta:{title:"后台管理",route:"backstage"}
      },
      {
        path: "album",
        name: "album",
        component: () => import("@/views/home/album.vue"),
        meta:{title:"相册管理"}
      },
      {
        path: "commodity",
        name: "commodity",
        component: () => import("@/views/home/commodity.vue"),
        meta:{title:"商品列表"}
      }
    ]
  },
  // 商品
  {
    path: "/commodity",
    name: "commodity",
    component: () => import("@/views/commodity/index.vue"),
    redirect: "/commodity/list",
    children: [
      {
        path: "list",
        name: "list",
        component: () => import("@/views/commodity/list.vue")
      },
      {
        path: "classification",
        name: "classification",
        component: () => import("@/views/commodity/classification.vue")
      },
      {
        path: "Specifications",
        name: "Specifications",
        component: () => import("@/views/commodity/Specifications.vue")
      },
      {
        path: "type",
        name: "type",
        component: () => import("@/views/commodity/type.vue")
      },
      {
        path: "evaluate",
        name: "evaluate",
        component: () => import("@/views/commodity/evaluate.vue")
      },
    ]
  },
  // 订单
  {
    path: "/order",
    name: "order",
    component: () => import("@/views/order/index.vue"),
    redirect: "/order/orderAdministration",
    children: [
      {
        path: "orderAdministration",
        name: "orderAdministration",
        component: () => import("@/views/order/orderAdministration.vue")
      },
      {
        path: "invoice",
        name: "invoice",
        component: () => import("@/views/order/invoice.vue")
      },
      {
        path: "Aftersale",
        name: "Aftersale",
        component: () => import("@/views/order/Aftersale.vue")
      },
    ]
  },
  // 会员
  {
    path: "/member",
    name: "member",
    component: () => import("@/views/member/index.vue"),
    redirect: "/member/list",
    children: [
      {
        path: "list",
        name: "list",
        component: () => import("@/views/member/list.vue")
      },
      {
        path: "Grade",
        name: "Grade",
        component: () => import("@/views/member/Grade.vue")
      }
    ]
  },
  // 设置
  {
    path: "/setup",
    name: "setup",
    component: () => import("@/views/setup/index.vue"),
    redirect:"/setup/Foundation",
    children: [
      {
        path: "Foundation",
        name: "Foundation",
        component: () => import("@/views/setup/Foundation.vue"),
      },
      {
        path: "logistics",
        name: "logistics",
        component: () => import("@/views/setup/logistics.vue"),
      },
      {
        path: "management",
        name: "management",
        component: () => import("@/views/setup/management.vue"),
      },
      {
        path: "trading",
        name: "trading",
        component: () => import("@/views/setup/trading.vue"),
      },
      {
        path: "ceshi",
        name: "ceshi",
        component: () => import("@/views/setup/ceshi.vue"),
      },
    ]
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  if (localStorage.getItem("token")) {
    next();
  } else {
    if (to.path == "/login") {
      next();
    } else {
      next("/login")
    }
  }
})
export default router
