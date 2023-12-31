import { createRouter, createWebHistory } from 'vue-router'
//Importing for direct import
//import HomeView from '../views/HomeView'   

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home-page',
      // This is a lazy loading approach that will only load when needed.
      component: () => import('../views/HomeView.vue')
      // Alternatively, you can use: component: HomeView
      // This will load the component regardless of whether it's needed or not.
      // Ensure that you have imported the Vue component as shown above.    
    },
    {
      path: '/about',
      name: 'about-page',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/projects',
      name: 'projects-page',
      component: () => import('../views/ProjectsView.vue'),    
      children:[{
        path:'c',
        name:'c-project-page',
        component: () => import('../views/CProjectView.vue')
      },
      {
        path:'javascript',
        name:'javascript-project-page',
        component: () => import('../views/JavaScriptProjectView.vue')        
      },
      {
        path:'python',
        name:'python-project-page',
        component: () => import('../views/PythonProjectView.vue')        
      },
      {
        path:'vue',
        name:'vue-project-page',
        component: () => import('../views/VueProjectView.vue')
      }]    
    },
    {
      path: '/contact',
      name: 'contact-page',
      component:() => import('../views/ContactView.vue')
    },
    {
      path:'/projects/c/API',
      name:'project-API',
      component: () => import('../views/projects/APICocktailView.vue')
    },
    {
      path:'/projects/c/memmoryHelper',
      name:'project-memmoryHelper',
      component: () => import('../views/projects/MemoryHelperView.vue')
    },
    {
      path:'/projects/c/cricketDarts',
      name:'project-cricketDarts',
      component:() => import('../views/projects/BlazorCricketdartVue.vue')
    },
    {
      path:'/projects/c/spoticlone',
      name:'project-spoticlone',
      component:()=> import('../views/projects/BlazorSpoticloneVue.vue')
    },
    {
      path:'/projects/python/MarioInspiredGame',
      name:'project-Mario-inspired-Game',
      component: () => import('../views/projects/PygameView.vue')
    },
    {
      path:'/projects/javascript/numeral-converter',
      name:'project-numeral-converter',
      component:()=>import('../views/projects/NumeralConverterView.vue')
    },
    {
      path:'/projects/javascript/wiki-game-of-thrones',
      name:'project-wiki-game-of-thrones',
      component:()=>import('../views/projects/WikiGameOfThronesView.vue')
    },
    {
      path:'/projects/vue/cocktail',
      name:'project-vue-cocktail',
      component:()=>import('../views/projects/VueCocktailView.vue')
    }
  ], 
})

export default router
