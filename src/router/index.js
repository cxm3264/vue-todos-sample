import Vue from 'vue'
import Router from 'vue-router'
import Layouts from '@/components/layouts'
import Todo from '@/components/todo'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Layouts',
      component: Layouts,
      children: [{
        path: 'todo/:id',
        name: 'todo',
        component: Todo
      }]
    }
  ]
})
