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
  <header>
    <nav class="navbar navbar-expand-lg">
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
      </div>
    </nav>    
  </header>
</template>

<style scoped>
@import '../assets/base.css'; 

a:hover:not(.router-link-active) {
  background-color: transparent !important;
  color: var(--vt-c-text-light-2)
}

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
}

.custom-toggler {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgb(137, 85, 147)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
}
button.navbar-toggler{
  border:1px solid rgb(137, 85, 147);
  outline: none;
}

@media (min-width:1000px){
  a.nav-link{  
  font-size: 1.1rem;
  font-weight: bold;
  }
header {
  line-height: 60px;
  }
}

</style>
