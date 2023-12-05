<script setup>

import ProjectPresentationTemplate from "../../components/ProjectPresentationTemplate.vue"
const videoLink ="https://www.youtube.com/embed/itQLBGQyTX8"
const toolsUsed = ["C#","Bootstrap","VS","Blazor","Github","MS-SQL"]
const githubLink = "https://github.com/VanMeerbeeckBenny/Spoticlone"
</script>

<template>
   <ProjectPresentationTemplate :tools-used="toolsUsed"
                                header-text="Blazor Spoticlone"
                                :video-clip-link= videoLink
                                :repository-link=githubLink
                                return-route-name="c-project-page">

    
    <template #info-section>                       
        <p class="stack-item">Framework:</p><p class="details">based on microsoft's ASP.NET Core Blazor</p>       
        <p class="stack-item">Database:</p><p class="details"> MS-SQL server</p>  
        <p class="stack-item">Dependency Injection:</p><p class="details"> Enhanced code flexibility and maintainability</p>
        <p class="stack-item">Backend Communication:</p><p class="details">Utilizes <strong>HttpClient</strong> for seamless communication with a local API.</p>
   
    </template> 
   </ProjectPresentationTemplate>
</template>
<style scoped>
</style>