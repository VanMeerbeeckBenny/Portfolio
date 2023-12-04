<script setup>
const props = defineProps({
    repositoryLink: String
})
</script>
<template>
    <div>
        <p class="github-ref">Take a look at the source code <a target="_blank" :href=props.repositoryLink>here</a></p>
    </div>
</template>

<style scoped>
a{    
    color:rgba(240, 75, 75, 0.651);    
    text-decoration: underline;  
    font-size: 1.1rem;    
}

p.github-ref{
    color:rgb(150, 149, 149);
}
</style>