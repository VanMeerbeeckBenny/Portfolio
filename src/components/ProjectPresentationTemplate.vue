<script setup>
import Githublink from './githubLink.vue'
import ToolsUsed from './toolsUsed.vue'
import ProjectSample from './ProjectSample.vue';
import ReturnButton from './ReturnButton.vue';
const props = defineProps({
    headerText:String,
    toolsUsed:Array,
    videoClipLink:String,
    repositoryLink:String,
    returnRouteName:String
})

</script>
<template>
    <main>    
        <article class="d-flex flex-column" id="project-detail">            
       
                <div class="info-container">
                    <h1>{{ props.headerText }}</h1>
                    <section v-if="props.videoClipLink">
                        <ProjectSample :video-clip-link= props.videoClipLink />
                        <Githublink :repository-link=props.repositoryLink /> 
                    </section> 
                    
                    <section class="main-info-container" v-else>                   
                        <slot name="project-main-info"></slot>                
                    </section>                  
                    <ToolsUsed :tools= props.toolsUsed />   
                    <div class="d-flex justify-content-center mt-2" v-if="!$slots['info-section']">
                        <ReturnButton :pageName=returnRouteName></ReturnButton>
                    </div>              
                </div>   

                <div class="info-container color" v-if="$slots['info-section']">
                    <section class="tech-stack">
                        <h4 class="">Project info</h4>
                        <slot name="info-section"></slot>
                    </section>
                    <div class="d-flex justify-content-center mt-2">
                        <ReturnButton :pageName=returnRouteName></ReturnButton>
                    </div>
                </div>
                
        </article>    
    </main>
</template>
<script>
export default {
  mounted(){
    // Scroll to the top when entering the route
    window.scrollTo(0, 0);
   
  },
};
</script>
<style scoped>


.info-container{
    padding-top: 70px;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;   
    align-items: center; 
   
}
.main-info-container{
    margin-top: 20px;
    max-width: 70%;
}

.tech-stack{
  word-wrap: break-word;
  font-size: 0.8rem;
  max-width: 50%;
}
.color{
    background-color: rgba(200, 199, 199, 0.261);
}

h1 {
    letter-spacing: 2px;
    width:fit-content;
    margin:0 auto;
    color: rgb(137, 85, 147);
}

h4{ 
 margin:0 0 20px 0;  
 text-decoration: underline;
 color: rgba(255, 255, 255, 0.81);
}
@media (min-width: 1024px) {
.info-container{
    padding-top: 10px;
}
.tech-stack{
max-width: 30%;
font-size: 1.5rem !important;
} 

.main-info-container{
    margin-top: 20px;
    max-width: 70%;
}
}
</style>