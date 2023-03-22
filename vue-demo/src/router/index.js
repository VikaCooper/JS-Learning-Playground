/**
 * Created by cooper on 2023/2/10.
 */
import Router from 'vue-router'
import page from '@/views/page'
import page1 from '@/views/page1'
import navigator from '@/views/navigator'
const routes = [
  {
    path: '/',
    redirect: '/navigator'
  },
  {
    component: page1,
    path: '/page1',
    name: 'page1',
  },
  {
    component: page,
    path: '/page',
    name: 'page',
  },
  {
    component: navigator,
    path: '/navigator',
    name: 'navigator'
  }
]

const router = new Router({
  routes,
})

export default router
