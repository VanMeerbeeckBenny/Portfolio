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
        <article class="d-flex flex-column">            
            <div id="project-detail">
                <div class="custom-container">
                    <h1>{{ props.headerText }}</h1>
                    <slot name="video-and-repo" v-if="props.videoClipLink">
                        <ProjectSample :video-clip-link= props.videoClipLink
                                       :repository-link= props.repositoryLink />
                    </slot>
                    <slot name="used-tools">
                        <ToolsUsed :tools= props.toolsUsed />
                    </slot>
                </div>
                <div class="custom-container" v-if="$slots['project-main-info']">                   
                    <slot name="project-main-info" ></slot>                
                </div>

                <div class="custom-container color p-3" v-if="$slots['info-section']">
                    <section class="tech-stack">
                        <h4 class="">Project info</h4>
                        <slot name="info-section"></slot>
                    </section>
                    <div class="d-flex justify-content-center mt-5">
                        <slot name="return-button"></slot>
                    </div>
                </div>
            </div>           
        </article>    
    </main>
</template>

<style scoped>


.custom-container{
    min-height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;   
    align-items: center; 
   
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


@media(min-width:1000px){
    #project-detail{
        flex-direction: row;
        justify-content: center;
                 
    }     
}
</style>