<script setup>

import ProjectPresentationTemplate from '../components/ProjectPresentationTemplate.vue';
import ReturnButton from '../components/ReturnButton.vue';
import VideoExample from '../components/VideoExample.vue';
const videoLink ="https://www.youtube.com/embed/itQLBGQyTX8";
</script>

<template>
   <ProjectPresentationTemplate>
    <template #video-and-repo>
        <VideoExample :video-clip-link= videoLink
                      repository-link="#" ></VideoExample>
    </template>
    <template #info-section>
        <section class="tech-stack">
                    <h4 class="">Tech-stack</h4>
                    <p class="stack-item">Framework:</p><p class="details">Built on Microsoft's ASP.NET Core</p>
                    <p class="stack-item">Database:</p><p class="details"> Microsoft SQL Server</p>                
                    <p class="stack-item">API Documentation:</p><p class="details"> Swagger UI</p>
                    <p class="stack-item">User Management:</p><p class="details"> ASP.NET Identity Framework</p>
                    <p class="stack-item">Object-relational mapping (ORM) :</p><p class="details"> Entity Framework</p>
                    <p class="stack-item">Authentication & Authorization:</p><p class="details"> Identity Framework with claims and principles. The project uses the Bearer Token Authentication approach for securing APIs, where users receive a token upon successful login.</p>
                    <p class="stack-item">Dependency Injection:</p><p class="details"> Enhanced code flexibility and maintainability</p>
                    <p class="stack-item">CORS:</p><p class="details"> Allows cross-origin requests</p>                  
                </section>
    </template>
    <template #return-button>
        <ReturnButton pageName="c-project-page"></ReturnButton>
    </template>
   </ProjectPresentationTemplate>
</template>

<style scoped>

.stack-item {
    line-height: 15px;
    color:rgb(11, 9, 9); 
    margin-bottom: 0.3rem;
    letter-spacing: 1px;
    font-weight: bold;    
}
.tech-stack{
    word-wrap: break-word;
    font-size: 0.8rem;
}

h4{    
    color: rgb(137, 85, 147); 
    width:fit-content;
    margin:10px auto;    
}
.details{  
    line-height: 15px;  
    color:rgba(255, 255, 255, 0.677);
    
}
@media(min-width:1000px){
   
    .tech-stack{
        width: 50%;
        font-size: 1rem;
    }      
}
</style>