<script setup>
import ProjectCard from '../components/ProjectCard.vue'
const Portfolio = '/assets/Images/portfolio-screenshot.PNG'
const CocktalVue = '/assets/Images/cocktail-vue-screenshot.PNG'
const colorClass = "vue-overlay-color"
</script>

<template>
    <ProjectCard project-name="Cocktails"
                 :picture-path= CocktalVue 
                 title-and-alt="Cocktails"
                 :style-class= colorClass />
    
    <ProjectCard project-name="Portfolio"
                 :picture-path= Portfolio 
                 title-and-alt="Portfolio"
                 :style-class= colorClass />
    
</template>