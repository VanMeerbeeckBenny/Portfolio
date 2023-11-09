
<template>
    <main>    
        <article class="d-flex flex-column">
            <h1>Cocktail API</h1>
            <div id="project-detail">
                <slot name="video-and-repo" v-if="$slots['video-and-repo']"></slot>
                <slot name="project-main-info" v-if="$slots['project-main-info']"></slot>
                <slot name="info-section" ></slot>
            </div>           
        </article>
        <div class="d-flex justify-content-center">
            <slot name="return-button"></slot>
        </div>
       
    </main>
</template>

<style scoped>
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
      
}
</style>