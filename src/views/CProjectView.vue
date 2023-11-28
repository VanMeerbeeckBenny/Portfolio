<script setup>
import ProjectCard from '../components/ProjectCard.vue'


const ApiPath = '/assets/Images/api-screenshot.PNG'
const XamarinPath = '/assets/Images/xamarin-screenshot.PNG'
const CricketPath = '/assets/Images/cricketdarts-screenshot.PNG'
const SpoticlonePath = '/assets/Images/spoticlone-screenshot.PNG'
const colorClass = "c-sharp-overlay-color"

const APIRouteName = 'project-API'
const memmoryHelperRouteName = 'project-memmoryHelper'
const cricketDartsRouteName = 'project-cricketDarts'
const spotiCloneRouteName = 'project-spoticlone'
</script>

<template>
    <ProjectCard project-type="API"
                 project-name="Cocktail"
                 :picture-path= ApiPath 
                 title-and-alt="API"
                 :style-class= colorClass
                 :route-name=APIRouteName />

    <ProjectCard project-type="Xamarin"
                 project-name="MemmoryHelper"
                 :picture-path= XamarinPath 
                 title-and-alt="Xamarin MemmoryHelper"
                 :style-class= colorClass
                 :route-name=memmoryHelperRouteName />

    <ProjectCard project-type="Blazor"
                 project-name="Cricketdarts"
                 :picture-path= CricketPath 
                 title-and-alt="Blazor Crickerdarts"
                 :style-class= colorClass 
                 :route-name= cricketDartsRouteName />

    <ProjectCard project-type="Blazor"
                 project-name="Spoticlone"
                 :picture-path= SpoticlonePath 
                 title-and-alt="Blazor Spoticlone"
                 :style-class= colorClass 
                 :route-name= spotiCloneRouteName />
</template>
