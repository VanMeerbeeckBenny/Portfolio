<script setup>
import ProjectCard from '../components/ProjectCard.vue'
const convertingNumeral = '/assets/Images/talstelsels-converteren-screenshot.PNG'
const GameOfThronePath = '/assets/Images/game-of-thrones-screenshot.PNG'
const colorClass = "javascript-overlay-color"

</script>

<template>
    <ProjectCard project-name="Converting numeral systems"
                 :picture-path= convertingNumeral 
                 title-and-alt="Converting numeral systems"
                 :style-class=colorClass
                 route-name="project-numeral-converter" />

    <ProjectCard project-name="Wiki game of thrones"
                 :picture-path= GameOfThronePath 
                 title-and-alt="Wiki game of thrones"
                 :style-class= colorClass 
                 route-name="project-wiki-game-of-thrones" />

    
</template>