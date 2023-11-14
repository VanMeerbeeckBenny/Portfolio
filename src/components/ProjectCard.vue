<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
const props = defineProps({
    projectType:String, 
    projectName:String,
    picturePath:String,
    titleAndAlt:String,
    styleClass:String,
    routeName:String
});

  const navigateToLocation = () => {
    router.push({name:props.routeName})        
        }
</script>

<template>
    <div class="container" 
        @click="navigateToLocation">
        <div class="overlay" :class="props.styleClass">
            <div class="text-container">
                <p>{{props.projectType}}</p>
                <p>{{props.projectName}}</p>
            </div>
        </div>
        <div class="content">
            <img :src='props.picturePath' :title='props.titleAndAlt' :alt="props.titleAndAlt" >
        </div>
    </div>
</template>
<style scoped>
.container{    
    cursor: pointer;
    margin: 10px 10px;
    padding: 0;
    overflow: hidden;
    border-top-right-radius: 25px;
    border-bottom-left-radius: 25px; 
    position: relative;
    box-shadow: 10px 10px 15px black;    
}
.text-container{ 
    text-align: center;
}

.overlay{
    width: inherit;
    height: inherit;
    z-index: 1;
    position: absolute;
    content:" ";
    display: flex;
    justify-content: center;
    align-items: center;    
    transition:opacity 1s ease-in-out;    
}

.c-sharp-overlay-color{
    background-color: rgb(100, 65, 134);
}

.javascript-overlay-color{
    background-color: #9a925f;
    
}

.python-overlay-color{
    background-color: rgb(65, 105, 134);
}

.vue-overlay-color{
    background-color:  rgb(71, 137, 101);
}

.overlay:hover{
    opacity: 0;  
}

.overlay p {    
    opacity: 0.7;
    font-weight:bold;
    font-style:italic;
    font-size: 1rem;
    margin: 0;  
}
.content img,.container{
    height:150px;
    width: 300px;
}

@media (min-width: 1024px){
    .content img,.container{
    height:250px;
    width: 500px;
  
}
    .container{
        margin: 20px 20px;
    }
    .overlay p{
        font-size: 3.5rem;
        line-height: 60px;
    }
};
</style>