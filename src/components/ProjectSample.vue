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
        <p class="github-ref">Take a look at the source code <a target="_blank" :href=props.repositoryLink>here</a></p>
    </div>
</template>

<style scoped>

a{    
    color:rgba(240, 75, 75, 0.651);    
    text-decoration: underline;  
    font-size: 1.1rem;    
}

p.github-ref{
    color:rgb(150, 149, 149);
}

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