<script setup>
import ToolsUsed from './ToolsUsed.vue';
import ProjectSample from './ProjectSample.vue';
const props = defineProps({
    headerText:String,
    toolsUsed:Array,
    videoClipLink:String,
    repositoryLink:String
})

</script>
<template>
    <main>    
        <article class="d-flex flex-column" id="project-detail">            
       
                <div class="custom-container">
                    <h1>{{ props.headerText }}</h1>
                    <div v-if="props.videoClipLink">
                        <ProjectSample :video-clip-link= props.videoClipLink
                                       :repository-link= props.repositoryLink />
                    </div>  
                    <div v-else>                   
                        <slot name="project-main-info"></slot>                
                    </div>                  
                    <ToolsUsed :tools= props.toolsUsed />                    
                </div>
                

                <div class="custom-container color" v-if="$slots['info-section']">
                    <section class="tech-stack">
                        <h4 class="">Project info</h4>
                        <slot name="info-section"></slot>
                    </section>
                    <div class="d-flex justify-content-center mt-2">
                        <slot name="return-button"></slot>
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


.custom-container{
    min-height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;   
    align-items: center; 
   
}
.tech-stack{
  word-wrap: break-word;
  font-size: 0.8rem;
  max-width: 80%;
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

</style>