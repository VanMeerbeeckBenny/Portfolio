<script setup>

import ProjectPresentationTemplate from '../../components/ProjectPresentationTemplate.vue';
const videoLink ="https://www.youtube.com/embed/itQLBGQyTX8";
const toolsUsed = ["C#","VS","FreshMvvm","Firebase","Github"]
</script>

<template>
   <ProjectPresentationTemplate :tools-used="toolsUsed"
                                header-text="Xamarin Memmory Helper"
                                :video-clip-link= videoLink
                                repository-link="#"
                                return-route-name="c-project-page">

    
    <template #info-section>                       
        <p class="stack-item">Framework:</p><p class="details">Xamarin (.NET Core) with FreshMvvm</p>       
        <p class="stack-item">Database:</p><p class="details"> Firebase Realtime Database</p>                     
        <p class="stack-item">User Management:</p><p class="details">A custom table within the Realtime Database features a userId column, aligning with the User ID (UID) found in the corresponding row from Firebase Authentication.</p>
        <p class="stack-item">Authentication & Authorization:</p><p class="details"> Firebase Authentication</p>
        <p class="stack-item">Dependency Injection:</p><p class="details"> Enhanced code flexibility and maintainability</p>  
    </template> 
   </ProjectPresentationTemplate>
</template>
