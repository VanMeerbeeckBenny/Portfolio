<script setup>

const props = defineProps({
    videoClipLink:String,
    repositoryLink:String
})
</script>

<template>
    <div class="video-container">
        <iframe 
                :src= props.videoClipLink               
                allowfullscreen>
        </iframe>        
    </div>
</template>

<style scoped>



iframe{
    margin-top:30px;
    border-radius: 15px;
    width:356px;
    height:200px;
    transition: 0.5s ease-in-out;
}

.video-container{
    flex-direction: column;
    display: flex;
    align-items: center;        
}
@media(min-width:700px){
    iframe{       
       
        width:560px;
        height:315px;        
    }  
    


   
}
</style>