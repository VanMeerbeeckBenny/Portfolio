<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const isProjectActive = computed(() => {
  const currentRouteName = route.name;
  if(typeof(currentRouteName) !== 'undefined')
  {
    return currentRouteName === 'project-page' || currentRouteName.includes('project-');
  }else return null;
});

const closeMenu = () => {
  let menu = document.getElementById("navbarSupportedContent");
  menu.classList.toggle("show")
}
</script>
<template>
  <header class="position-sticky top-0 bg-dark">
    <nav class="navbar navbar-expand-sm mt">
      <div class="container-fluid">        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon custom-toggler"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'home-page' }" @click="closeMenu">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'c-project-page' }" :class="{ 'router-link-active': isProjectActive }" @click="closeMenu">Projects</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'about-page' }" @click="closeMenu">About Me</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'contact-page' }" @click="closeMenu">Contact</router-link>
            </li>            
          </ul>          
        </div>   
        <!-- <div>          
            <a href="https://github.com/VanMeerbeeckBenny">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
        
        </div>
        -->
      </div>
    </nav>    
  </header>
</template>

<style scoped>

a.nav-link:not(.router-link-active) {
  color: var(--vt-c-text-light-2)
}

.router-link-active {
  border-bottom: 2px solid rgba(144, 41, 165, 0.995);
  background-color: transparent;
  color: rgb(137, 85, 147);
}

a.nav-link{  
  letter-spacing: 2px; 
  font-size: 0.8rem;
  font-weight: bold;
}

.navbar{
  background-color: rgba(0, 0, 0, 0.18);
}

.custom-toggler {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgb(137, 85, 147)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
}
button.navbar-toggler{
  border:1px solid rgb(137, 85, 147);
  outline: none;
}

header{
  z-index: 10;
}

@media (min-width:575px){
  
  a.nav-link{  
  font-size: 1.1rem;  
  }
header {
  line-height: 60px;
  }

  .navbar{
  background-color: transparent;
}
}

</style>
