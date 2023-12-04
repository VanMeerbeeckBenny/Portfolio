<script setup>
import ProjectCard from '../components/ProjectCard.vue'
const marioInspiredGameImage = '/assets/Images/pygame-logo.png'
const colorClass = "python-overlay-color"
</script>

<template>
    <ProjectCard project-name="Mario Clone"
                 :picture-path= marioInspiredGameImage 
                 title-and-alt="Mario Clone"
                 :style-class= colorClass
                 route-name="project-Mario-inspired-Game" />
    
</template>