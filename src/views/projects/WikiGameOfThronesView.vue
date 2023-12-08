<script setup>
import ProjectPresentationTemplate from '../../components/ProjectPresentationTemplate.vue';
const videoLink ="https://www.youtube.com/embed/itQLBGQyTX8";
const githubLink = "https://github.com/VanMeerbeeckBenny/Number-system-converter";
const toolsUsed = ["JS","HTML","CSS","VS","Github"]
const returnRoute = "javascript-project-page"
</script>

<template>
   <ProjectPresentationTemplate header-text="Wiki game of thrones"
                                :video-clip-link= videoLink
                                :repository-link=githubLink
                                :tools-used=toolsUsed
                                :return-route-name=returnRoute> 
    
   </ProjectPresentationTemplate>
</template>