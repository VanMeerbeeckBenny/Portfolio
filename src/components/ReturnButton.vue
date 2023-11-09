<script setup>
import {useRouter} from 'vue-router'
const props = defineProps({
    pageName:String
})
const router = useRouter();
const returnToProjects = () => {
    router.push({name:props.pageName})
}
</script>

<template>
<button class="btn btn-primary mt-3 mb-3"
                    @click="returnToProjects">Back</button>
</template>


<style scoped>
button{
    width:200px;
}
</style>