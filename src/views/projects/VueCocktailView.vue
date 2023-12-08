<script setup>

import ProjectPresentationTemplate from "../../components/ProjectPresentationTemplate.vue"
const videoLink ="https://www.youtube.com/embed/itQLBGQyTX8"
const toolsUsed = ["C#","Bootstrap","Vue","VS","Github"]
const githubLink = "https://github.com/VanMeerbeeckBenny/Cocktail-Vue-public"
</script>

<template>
   <ProjectPresentationTemplate :tools-used="toolsUsed"
                                header-text="Vue Cocktail"
                                :video-clip-link= videoLink
                                :repository-link=githubLink
                                return-route-name="vue-project-page">

    
    <template #info-section>                       
        <p class="stack-item">Back-end-Framework:</p><p class="details">based on microsoft's ASP.NET Core</p>       
        <p class="stack-item">Front-end-Framework:</p><p class="details">Vue</p> 
        <p class="stack-item">Backend Communication:</p><p class="details">Utilizes <strong>Axios</strong> for seamless communication with an API.</p>
        <p class="stack-item">API:</p><p class="details">This project depends on the Cocktail API</p>         
    </template> 
   </ProjectPresentationTemplate>
</template>
<style scoped>
</style>