<template>
    <main >
        <div id="project-menu">
            <ul>
                <li><router-link class="csharp"  :to="{name:'c-project-page'}"><img src="/assets/Images/c-logo.png"> - C#</router-link></li>
                <li><router-link class="javascript" :to="{name:'javascript-project-page'}"><img src="/assets/Images/js-logo.png"> - Javascript</router-link></li>
                <li><router-link class="python" :to="{name:'python-project-page'}"><img src="/assets/Images/python-logo.png"> - Python</router-link></li>
                <li><router-link class="vue" :to="{name:'vue-project-page'}"><img src="/assets/Images/vue-logo.png"> - Vue3</router-link></li>
            </ul>
        </div>
        <div class="d-flex flex-wrap justify-content-center w-100" id="router-view">
            <RouterView></RouterView>
        </div>
       
    </main>
</template>

<style scoped>
@import '../assets/base.css';
.csharp.router-link-active{
    background-color: rgba(99, 65, 134, 0.463);
}

.javascript.router-link-active{
    background-color: #c2b66469;;
}

.python.router-link-active{
    background-color: rgba(100, 152, 194, 0.435);
}

.vue.router-link-active{
    background-color: rgba(71, 137, 101, 0.466);
}

#router-view{
    font-family:'Times New Roman', Times, serif;    
}
#project-menu li{
    list-style: none;    
}

#project-menu li a{
    font-size: 0.7rem;
    height: 100%;
    display: block;
    padding:5px 10px;
    color:rgba(255, 255, 255, 0.697);
}
#project-menu li a:hover:not(.router-link-active){
    background-color: rgba(252, 252, 252, 0.47);
    color:rgba(0, 0, 0, 0.6);    
}

#project-menu img{
    max-width:20px;
    max-height:20px;
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
    position:fixed;
    top: 45px; 
    z-index: 10;
    overflow: hidden;  
    min-width: 100%;
    height: fit-content;
    background-color:var(--sub-menu);    
}
#router-view{
    padding-top: 80px;
}
main{  
    display: flex;  
    flex-direction: column;  
}
@media (min-width:575px) {
    #project-menu{
    top: 70px; 
    }
    #router-view{
        padding-top: 150px;
    }
}
@media (min-width:700px) {
    #project-menu li a{
    font-size: 1rem;  
    }
    #project-menu{
        margin-top: 0px; 
    }    
}

@media (min-width:1024px) {
    #router-view{
        padding-left: 150px;
        padding-top: 0px;
    }
    #project-menu{      
        top: 120px;
        min-width: 150px;
        border-top-right-radius: 25px;
        border-bottom-right-radius: 25px;
    }

    main{
        flex-direction: row;
        padding-top: 100px;        
    }

    #project-menu ul {
        display: block;
    }
    #project-menu img{
    max-width:35px;
    max-height:35px;
}
    #project-menu li a{
    font-size: 0.9rem;  
}
}
</style>