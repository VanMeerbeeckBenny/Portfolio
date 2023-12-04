<script setup>
import ProjectPresentationTemplate from "../../components/ProjectPresentationTemplate.vue"

const toolsUsed = ["Python","VSCode","Pygame","Pymonk","Github","MiniConda"]
const githubLink = "https://github.com/VanMeerbeeckBenny/Mario-inspired-game"
</script>

<template>
   <ProjectPresentationTemplate :tools-used="toolsUsed"
                                header-text="Mario inspired Game"                                
                                :repository-link=githubLink
                                return-route-name="python-project-page">

    <template #project-main-info>
        <article>          
            <p>In this game, players can experience a unique swinging mechanic, allowing them to swing with a rope on specific blocks. Auto-save points are strategically positioned throughout the levels for convenience.</p>

            <p>As players progress, they encounter power-ups that not only make them larger but also grant shooting abilities. The game introduces a diverse set of enemies, including turtles and red mushrooms, adding variety and challenge to the gameplay.</p>

            <p>One distinctive aspect is Mario's use of cannon bullets instead of the traditional fireball. These bullets move linearly and are visibly managed in the interface at the bottom right corner. Players are limited to five bullets, which slowly regenerate. Collecting a flower while able to shoot refills the bullet count.</p>

            <p>The game experience begins with a start screen featuring a standard background and an idle animation character. Moreover, physics integration enhances realism, influencing actions like jumping and swinging. This combination of features creates an engaging and dynamic gameplay experience.</p>            
        </article>
    </template>

    <template #info-section>       
        <p class="stack-item">Physics Engine:</p><p class="details">Pymunk is used for the swinging physics</p> 
        <p class="stack-item">Map design:</p><p class="details">Tiled, a user-friendly map editor, is utilized for easily creating and overseeing the map</p>
        <p class="stack-item">Map integration:</p><p class="details">Pytmx is utilized for loading the map</p> 
        <p class="stack-item">Environment Management:</p><p class="details">Miniconda is employed for managing the project's environment, ensuring a secure and controlled setup.</p>
    </template> 
   </ProjectPresentationTemplate>
</template>
<style scoped>
</style>