import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Follow from '@/components/Follow'
import Column from '@/components/Column'
import UserInfo from '@/components/UserInfo'
import Article from '@/components/Article'

Vue.use(Router)

export default new Router({
  mode:'history',
  scrollBahavior:()=>({
    y:0
  }),
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/follow',
      name: 'Follow',
      component: Follow
    },
    {
      path: '/column',
      name: 'Column',
      component: Column
    },
    {
      path: '/user-info',
      name: 'UserInfo',
      component: UserInfo
    },
    {
      path: '/article/:id',
      component: Article
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
