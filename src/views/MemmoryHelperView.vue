<script setup>

import ProjectPresentationTemplate from '../components/ProjectPresentationTemplate.vue';
import ReturnButton from '../components/ReturnButton.vue';
import ProjectSample from '../components/ProjectSample.vue';
import ToolsUsed from '../components/ToolsUsed.vue';
const videoLink ="https://www.youtube.com/embed/itQLBGQyTX8";
const toolsUsed = ["C#","VS","FreshMvvm","Firebase","Github"]
</script>

<template>
   <ProjectPresentationTemplate header-text="Xamarin Memmory Helper">
    <template #video-and-repo>
        <ProjectSample :video-clip-link= videoLink
                      repository-link="#" ></ProjectSample>
    </template>
    <template #used-tools>
        <ToolsUsed :tools= toolsUsed></ToolsUsed>
    </template>
    <template #info-section>
        <section class="tech-stack">
                    <h4 class="">Tech-stack</h4>
                    <p class="stack-item">Framework:</p><p class="details">Xamarin (.net Core) with FreshMvvm</p>                    
                    <p class="stack-item">Database:</p><p class="details"> Firebase Realtime Database</p>                     
                    <p class="stack-item">User Management:</p><p class="details">A custom table within the Realtime Database features a userId column, aligning with the User ID (UID) found in the corresponding row from Firebase Authentication.</p>
                    <p class="stack-item">Authentication & Authorization:</p><p class="details"> Firebase Authentication</p>
                    <p class="stack-item">Dependency Injection:</p><p class="details"> Enhanced code flexibility and maintainability</p>                                    
                </section>
    </template>
    <template #return-button>
        <ReturnButton pageName="c-project-page"></ReturnButton>
    </template>
   </ProjectPresentationTemplate>
</template>

<style scoped>

h4{    
 
    width:fit-content;
    margin:0 0 20px 0;  
    text-decoration: underline;
    color: rgba(255, 255, 255, 0.81);
}

</style>