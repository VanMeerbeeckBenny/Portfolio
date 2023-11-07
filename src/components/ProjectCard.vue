<script setup>
defineProps(['projectType', 'projectName', 'picturePath', 'titleAndAlt','styleClass']);
</script>

<template>
    <div class="container" >
        <div class="overlay" :class="styleClass">
            <div class="text-container">
                <p>{{projectType}}</p>
                <p>{{projectName}}</p>
            </div>
        </div>
        <div class="content">
            <img :src='picturePath' :title='titleAndAlt' :alt="titleAndAlt" >
        </div>
    </div>
</template>

<style scoped>
.container{    
    margin: 10px 10px;
    padding: 0;
    overflow: hidden;
    border-radius: 25px; 
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
    background-color: rgb(100, 65, 134);
}

.c-sharp-overlay-color{
    background-color: rgb(100, 65, 134);
}

.c-sharp-overlay-color{
    background-color: rgb(100, 65, 134);
}

.overlay:hover{
    opacity: 0;  
}

.overlay p {    
    opacity: 0.5;
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