<script setup>
import ProjectPresentationTemplate from "../../components/ProjectPresentationTemplate.vue"
import githubComponent from "../../components/githubLink.vue"
const toolsUsed = ["Python","VSCode","Github","MiniConda","Tiled"]
const githubLink = "https://github.com/VanMeerbeeckBenny/Mario-inspired-game"
</script>

<template>
   <ProjectPresentationTemplate :tools-used="toolsUsed"
                                header-text="Mario inspired Game"                     
                                return-route-name="python-project-page">

    <template #project-main-info>
        <section>          
            <p>The game experience begins with a start screen featuring a standard scene and an idle animation character.In this game, players can experience a unique swinging mechanic, allowing them to swing with a rope on specific blocks. Auto-save points are strategically positioned throughout the levels for convenience.</p>
            <p>As players progress, they encounter power-ups that not only make them larger but also grant shooting abilities. The game including the turtles and red mushrooms we all know and love.</p>

            <p>One distinctive aspect is Mario's use of cannon bullets instead of the traditional fireball. These bullets move linearly and are visibly managed in the interface at the bottom right corner. Players are limited to five bullets, which slowly regenerate. Collecting a flower while able to shoot refills the bullet count.</p>

            <p>The game has two levels, each ending with the well-known castle. I left out the flag as I did not have enough time. There is a credit screen when you finish the game with a nice remix of a Mario song.
            </p>            
        </section>
        <br >
        <section id="legal">
            <h5>Legal Considerations</h5>
            <p>
                As this project was created in school where legal issues were not a concern, I used many original assets. Due to copyright laws, all assets have been removed. Consequently, the game cannot be run, but you can explore the code.
            </p>
            <p>
                If you wish to see a working sample or a video of the game, please feel free to contact me.
            </p>
        </section>
        <githubComponent :repositoryLink = githubLink></githubComponent>

    </template>

    <template #info-section>       
        <p class="stack-item">Physics Engine:</p><p class="details">Pymunk is used for the swinging physics</p> 
        <p class="stack-item">Map design:</p><p class="details">Tiled, a user-friendly map editor, is utilized for easily creating and overseeing the map</p>
        <p class="stack-item">Map integration:</p><p class="details">Pytmx is utilized for loading the map</p> 
        <p class="stack-item">Environment Management:</p><p class="details">Miniconda is great for managing the project's environment, ensuring a secure and controlled setup.</p>        
    </template> 
   </ProjectPresentationTemplate>
</template>
<style scoped>
#legal{
    width: 90%;
}
#legal p {
    font-size: 0.6rem;        
}
#legal p,#legal h5 {     
    color:rgba(255, 255, 255, 0.558);  
}

@media (min-width: 1024px){    
    #legal p {
        font-size: 0.8rem;        
    }
}
</style>