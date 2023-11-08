<script setup>
import {useRouter} from 'vue-router'
const router = useRouter();
const returnToProjects = () => {
    router.push({name:'c-project-page'})
}
</script>

<template>
    <main>    
        <article class="d-flex flex-column">
            <h1>Cocktail API</h1>
            <div id="project-detail">
                <div>
                    <iframe width="560"
                            height="315"
                            src="https://www.youtube.com/embed/itQLBGQyTX8"                 
                            allowfullscreen>
                    </iframe>
                    <p>Take a look at the source code <a href>here</a></p>
                </div>
                <section class="tech-stack">
                    <h4 class="">Tech-stack</h4>
                    <p class="stack-item">Framework:</p><p class="details">Built on Microsoft's ASP.NET Core</p>
                    <p class="stack-item">Database:</p><p class="details"> Microsoft SQL Server</p>                
                    <p class="stack-item">API Documentation:</p><p class="details"> Swagger UI</p>
                    <p class="stack-item">User Management:</p><p class="details"> ASP.NET Identity Framework</p>
                    <p class="stack-item">Object-relational mapping (ORM) :</p><p class="details"> Entity Framework</p>
                    <p class="stack-item">Authentication & Authorization:</p><p class="details"> Identity Framework with claims and principles. The project uses the Bearer Token Authentication approach for securing APIs, where users receive a token upon successful login.</p>
                    <p class="stack-item">Dependency Injection:</p><p class="details"> Enhanced code flexibility and maintainability</p>
                    <p class="stack-item">CORS:</p><p class="details"> Allows cross-origin requests</p>                  
                </section>
            </div>           
        </article>
        <div class="d-flex justify-content-center">
            <button class="btn btn-primary mt-3 mb-3"
                    @click="returnToProjects">back</button>
        </div>
       
    </main>
</template>

<style scoped>
a:hover{
    background-color: transparent;
}

a{
    color:rgba(235, 64, 64, 0.651);    
    text-decoration: underline;
    
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
h4{    
    color: rgb(137, 85, 147); 
    width:fit-content;
    margin:10px auto;    
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