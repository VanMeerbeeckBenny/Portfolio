<template>
    <main >
        <div id="project-menu">
            <ul>
                <li><router-link  :to="{name:'c-project-page'}"><img src="../assets/Images/c-logo.png"> - C#</router-link></li>
                <li><router-link  :to="{name:'c-project-page'}"><img src="../assets/Images/js-logo.png"> - Javascript</router-link></li>
                <li><router-link  :to="{name:'c-project-page'}"><img src="../assets/Images/python-logo.png"> - Python</router-link></li>
                <li><router-link  :to="{name:'c-project-page'}"><img src="../assets/Images/vue-logo.png"> - Vue3</router-link></li>
            </ul>
        </div>
        <div class="d-flex flex-wrap justify-content-center align-i" id="router-view">
            <RouterView></RouterView>
        </div>
       
    </main>
</template>

<style scoped>

#router-view{
    font-family:'Times New Roman', Times, serif;
}
#project-menu li{
    list-style: none;    
}

#project-menu li a{
    display: block;
    padding:5px 10px;
    color:rgba(255, 255, 255, 0.697);
}
#project-menu li a:hover{
    background-color: rgba(252, 252, 252, 0.47);
    color:rgba(0, 0, 0, 0.6);
    font-weight: bold;
}

#project-menu img{
    max-width:35px;
    max-height:35px;
}
#project-menu ul {
    padding:0;
    margin:0;
    letter-spacing: 1px;
    display:flex;
    justify-content: center;
    width: 100%;   
}
#project-menu{  
    overflow: hidden;  
    min-width: 100%;
    height: fit-content;
    background-color: rgba(0, 0, 0, 0.3); 
    margin-right: 100px;
    margin-bottom: 50px;
}
main{
    display: flex;  
    flex-direction: column;  
}

@media (min-width:1024px) {
    #project-menu{
        min-width: 150px;
        border-top-right-radius: 25px;
        border-bottom-right-radius: 25px;
    }

    main{
        flex-direction: row;
    }

    #project-menu ul {
        display: block;
    }
}
</style>