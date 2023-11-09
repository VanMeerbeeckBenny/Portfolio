<script setup>
const props = defineProps({
    videoClipLink:String,
    repositoryLink:String
})
</script>

<template>
    <div>
        <iframe 
                :src= props.videoClipLink               
                allowfullscreen>
        </iframe>
        <p>Take a look at the source code <a :href=props.repositoryLink>here</a></p>
    </div>
</template>

<style scoped>

a{    
    color:rgba(235, 64, 64, 0.651);    
    text-decoration: underline;      
}

p{
    font-size: 0.8rem; 
}

a:hover{
    background-color: transparent;
}
iframe{
    width:100%;
    height:200px;
}
@media(min-width:1000px){
    iframe{
        margin-top:50px;
        margin-right: 50px;
        width:560px;
        height:315px;
    }  
    
    p{
    font-size: 1rem; 
    }
}
</style>