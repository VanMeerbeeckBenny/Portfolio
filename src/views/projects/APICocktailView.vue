<script setup>
import ProjectPresentationTemplate from '../../components/ProjectPresentationTemplate.vue';
const videoLink ="https://www.youtube.com/embed/itQLBGQyTX8";
const githubLink = "https://github.com/VanMeerbeeckBenny/Cocktail-API-public";
const toolsUsed = ["C#","VS","CSS","MS-SQL","Swagger","Github"]

</script>

<template>
   <ProjectPresentationTemplate header-text="Cocktail API"
                                :video-clip-link= videoLink
                                :repository-link=githubLink
                                :tools-used=toolsUsed
                                return-route-name="c-project-page"> 
 
    <template #info-section>                 
        <p class="stack-item">Framework:</p><p class="details">Built on Microsoft's ASP.NET Core 5</p>
        <p class="stack-item">Database:</p><p class="details"> Microsoft SQL Server</p>                
        <p class="stack-item">API Documentation:</p><p class="details"> Swagger UI</p>
        <p class="stack-item">User Management:</p><p class="details"> ASP.NET Identity Framework</p>
        <p class="stack-item">Object-relational mapping (ORM) :</p><p class="details"> Entity Framework</p>
        <p class="stack-item">Authentication & Authorization:</p><p class="details"> Identity Framework with claims and principles. The project uses the Bearer Token Authentication approach for securing APIs, where users receive a token upon successful login.</p>
        <p class="stack-item">Dependency Injection:</p><p class="details"> Enhanced code flexibility and maintainability</p>
        <p class="stack-item">CORS:</p><p class="details"> Allows cross-origin requests</p>                
    </template>   
   </ProjectPresentationTemplate>
</template>