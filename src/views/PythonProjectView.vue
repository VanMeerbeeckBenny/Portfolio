<script setup>
import ProjectCard from '../components/ProjectCard.vue'

const convertingNumeral = '/assets/Images/talstelsels-converteren-screenshot.PNG';

const colorClass = "python-overlay-color"
</script>

<template>
    <ProjectCard project-name="Converting numeral systems"
                 :picture-path= convertingNumeral 
                 title-and-alt="Converting numeral systems"
                 :style-class= colorClass />
    
</template>