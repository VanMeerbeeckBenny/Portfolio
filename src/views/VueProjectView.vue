<script setup>
import ProjectCard from '../components/ProjectCard.vue'

const convertingNumeral = '/assets/Images/talstelsels-converteren-screenshot.PNG';

const colorClass = "vue-overlay-color"
</script>

<template>
    <ProjectCard project-name="Cocktails"
                 :picture-path= convertingNumeral 
                 title-and-alt="Cocktails"
                 :style-class= colorClass />
    
</template>