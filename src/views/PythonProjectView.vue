<script setup>
import ProjectCard from '../components/ProjectCard.vue'
const convertingNumeral = '/assets/Images/talstelsels-converteren-screenshot.PNG'
const colorClass = "python-overlay-color"
</script>

<template>
    <ProjectCard project-name="Mario Clone"
                 :picture-path= convertingNumeral 
                 title-and-alt="Mario Clone"
                 :style-class= colorClass />
    
</template>