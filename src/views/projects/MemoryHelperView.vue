<script setup>

import ProjectPresentationTemplate from '../../components/ProjectPresentationTemplate.vue'
const videoLink ="https://www.youtube.com/embed/MeC8VHL9eNE"
const toolsUsed = ["C#","VS","FreshMvvm","Firebase","Github"]
</script>

<template>
   <ProjectPresentationTemplate :tools-used="toolsUsed"
                                header-text="Xamarin Memory Helper"
                                :video-clip-link= videoLink
                                repository-link="https://github.com/VanMeerbeeckBenny/mobile-memory-helper-public"
                                return-route-name="c-project-page">

    
    <template #info-section>                       
        <p class="stack-item">Framework:</p><p class="details">Xamarin (.NET Core) with FreshMvvm</p>       
        <p class="stack-item">Database:</p><p class="details"> Firebase Realtime Database</p>    
        <p class="stack-item">Image storage:</p><p class="details"> Firebase Storage</p>                    
        <p class="stack-item">User Management:</p><p class="details">A custom table within the Realtime Database features a userId column, aligning with the User ID (UID) found in the corresponding row from Firebase Authentication.</p>
        <p class="stack-item">Authentication & Authorization:</p><p class="details"> Firebase Authentication</p>
        <p class="stack-item">Dependency Injection:</p><p class="details"> Enhanced code flexibility and maintainability</p>  
    </template> 
   </ProjectPresentationTemplate>
</template>
