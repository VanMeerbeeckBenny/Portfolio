<script setup>

import ProjectPresentationTemplate from '../../components/ProjectPresentationTemplate.vue'
const videoLink ="https://www.youtube.com/embed/itQLBGQyTX8"
const githubLink = "https://github.com/VanMeerbeeckBenny/CricketDarts"
const toolsUsed = ["C#","VS","Blazor","Signal-R","Github","MS-SQL"]
</script>

<template>
   <ProjectPresentationTemplate :tools-used="toolsUsed"
                                header-text="Blazor Cricketdarts"
                                :video-clip-link= videoLink
                                :repository-link=githubLink
                                return-route-name="c-project-page">

    
<template #info-section>
    <p class="stack-item">Framework:</p><p class="details">Built on Microsoft's ASP.NET Core Blazor.</p>
    <p class="stack-item">Database:</p><p class="details">MS-SQL Server is used to load the initial data to the viewer so viewers can jump in at any time.</p>
    <p class="stack-item">Signal-R:</p><p class="details">With Signal-R, it's possible for the viewer to see all active matches and statistics. Every match has a dedicated presentator page.</p>
    <p class="stack-item">Dependency Injection:</p><p class="details">Enhanced code flexibility and maintainability.</p>
</template>  
    </ProjectPresentationTemplate>
</template>
