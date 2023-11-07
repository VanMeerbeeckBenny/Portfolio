import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import CProjectView from '../views/CProjectView.vue'
import javascriptView from '../views/JavaScriptView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home-page',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about-page',
      component: AboutView
    },
    {
      path: '/project',
      name: 'project-page',
      component: ProjectsView,      
      children:[{
        path:'c',
        name:'c-project-page',
        component:CProjectView
      },
      {
        path:'javascript',
        name:'javascript-project-page',
        component:javascriptView,        
      }]    
    },
    {
      path: '/contact',
      name: 'contact-page'
    }
    //{
    //path: '/about',
    //name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import('../views/AboutView.vue')
    //}
  ],

})

export default router
