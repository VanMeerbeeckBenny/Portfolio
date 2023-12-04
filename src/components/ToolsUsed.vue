<script setup>
const props =defineProps({
    tools:Array
})
</script>

<template>
    <section class="tools-container">
        <h4>Tools used :</h4>
        <div class="d-flex flex-row flex-wrap justify-content-center">      
            <span v-for="tool in props.tools" :key="tool" class="tool d-flex align-content-center justify-content-center"> {{ tool }} </span>
        </div>
    </section>
</template>
<style scoped>
h4{
    margin-bottom: 0;
}
.tool{
    padding: 5px 10px;
    margin: 10px 3px;
    background-color: rgba(0, 0, 0, 0.346);
    border-radius: 10px;
}

.tools-container{
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

@media (min-width: 700px) {
    .tools-container{
    flex-direction: row;
}
}   
</style>