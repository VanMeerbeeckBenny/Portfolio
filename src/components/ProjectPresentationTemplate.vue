
<template>
    <main>    
        <article class="d-flex flex-column">
            <h1>Cocktail API</h1>
            <div id="project-detail">
                <slot name="video-and-repo"></slot>
                <slot name="info-section"></slot>
            </div>           
        </article>
        <div class="d-flex justify-content-center">
            <slot name="return-button"></slot>
        </div>
       
    </main>
</template>

<style scoped>
a:hover{
    background-color: transparent;
}


main{
    padding: 0 20px;
}
h1 {
    letter-spacing: 2px;
    width:fit-content;
    margin:0 auto;
    color: rgb(137, 85, 147);
}

#project-detail{
    margin-top:20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.stack-item {
    line-height: 15px;
    color:rgb(11, 9, 9); 
    margin-bottom: 0.3rem;
    letter-spacing: 1px;
    font-weight: bold;    
}
.tech-stack{
    word-wrap: break-word;
}
.details{  
    line-height: 15px;  
    color:rgba(255, 255, 255, 0.677);
    
}
button{
    width:200px;
}
@media(min-width:1000px){
    iframe{
        margin-top:50px;
        margin-right: 50px;
    }
    #project-detail{
        flex-direction: row;
        justify-content: center;
        padding-top: 0px;          
    }
    .tech-stack{
        width: 50%;
    }      
}
</style>