<script setup>

import ProjectPresentationTemplate from '../../components/ProjectPresentationTemplate.vue';
const videoLink ="https://www.youtube.com/embed/itQLBGQyTX8";
const toolsUsed = ["C#","VS","Blazor","Github","MS-SQL"]
</script>

<template>
   <ProjectPresentationTemplate :tools-used="toolsUsed"
                                header-text="Blazor Spoticlone"
                                :video-clip-link= videoLink
                                repository-link="#"
                                return-route-name="c-project-page">

    
    <template #info-section>                       
        <p class="stack-item">Framework:</p><p class="details">base on microsoft's ASP.NET Core</p>       
        <p class="stack-item">Database:</p><p class="details"> MS-SQL server</p>  
        <p class="stack-item">Dependency Injection:</p><p class="details"> Enhanced code flexibility and maintainability</p> 
        <div id="note">
          <p class="stack-item">Note:</p><p class="details"> My focus was the web Blazor project.The other parts were given by the lector.</p> 
        </div>
       
    </template> 
   </ProjectPresentationTemplate>
</template>
<style scoped>
#note p{
   font-size: 0.5rem;
   font-weight: bold;
}
@media (min-width:1024px) {
#note p{
   font-size: 0.7rem;
   
}
}
</style>