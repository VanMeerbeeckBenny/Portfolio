<script setup>

import ProjectPresentationTemplate from '../../components/ProjectPresentationTemplate.vue';
import ReturnButton from '../../components/ReturnButton.vue';
const videoLink ="https://www.youtube.com/embed/itQLBGQyTX8";
const toolsUsed = ["C#","VS","Blazor","SignalR","Github","MS-SQL"]
</script>

<template>
   <ProjectPresentationTemplate :tools-used="toolsUsed"
                                header-text="Blazor Cricketdarts"
                                :video-clip-link= videoLink
                                repository-link="https://github.com/VanMeerbeeckBenny/CricketDarts" >

    
<template #info-section>
    <p class="stack-item">Framework:</p><p class="details">Built on Microsoft's ASP.NET Core 6 Blazor.</p>
    <p class="stack-item">Database:</p><p class="details">MS-SQL Server is used to load the initial data to the viewer so viewers can jump in at any time.</p>
    <p class="stack-item">SignalR:</p><p class="details">With Signal-R, it's possible for the viewer to see all active matches and statistics. Every match has a dedicated presenter page.</p>
    <p class="stack-item">Dependency Injection:</p><p class="details">Enhanced code flexibility and maintainability.</p>
</template>

    
    <template #return-button>
        <ReturnButton pageName="c-project-page"></ReturnButton>
    </template>
   </ProjectPresentationTemplate>
</template>
