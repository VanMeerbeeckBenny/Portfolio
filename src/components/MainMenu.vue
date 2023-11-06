<template>
  <header>
    <div class="d-flex">
      <div class="left-header"></div>
      <div class="right-header">
        <nav class="main-menu">
          <ul class="nav pb-3">
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'home-page' }">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'c-project-page' }">Projects</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'about-page' }">About Me</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'contact-page' }">Contact</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
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

.main-menu a{
  font-family:'Times New Roman', Times, serif;
  letter-spacing: 2px;
 
  font-size: 1.1rem;
  font-weight: bold;
}
header {
  line-height: 60px;
}

.left-header,.right-header{
  width: 50%;  
}
.right-header{
  display: flex;
  justify-content: end;
  padding-right: 50px;
}
</style>
