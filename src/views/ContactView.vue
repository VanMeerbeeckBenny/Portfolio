<script setup>
import { reactive} from 'vue';

const formData = reactive({
  name: { value:"",id:"name"},
  email: { value:"",id:"email"},
  message: { value:"",id:"message"},
});

const submitForm = () => {
  // Handle form submission logic here
  console.log('Form submitted:', formData);
 
};

const validate = (e) => {      
    checkIfEmpty(e) 
    if(e.target.id === formData.email.id){
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(!emailPattern.test(formData.email.value))setInvalidClass(e)
            else setValidClass(e)
    }     
}

const checkIfEmpty = (e) => {    
    if(e.target.value === '')setInvalidClass(e)
    else setValidClass(e)
}

const setValidClass = (e) => {
    e.target.classList.remove('is-invalid')
    e.target.classList.add('is-valid')
}

const setInvalidClass = (e) => {
    e.target.classList.remove('is-valid')
    e.target.classList.add('is-invalid')
}
</script>

<template>
    <main class="d-flex justify-content-center flex-column align-items-center h-100">
        <h1>Contact me</h1>
        <div class="contact-container p-4">            
            <form @submit.prevent="submitForm">
                <div class="mb-3">
                    <label for="name" class="form-label">Name:</label>
                    <input type="text"  class="form-control" @input="validate" @focusout="validate" :id="formData.name.id" v-model="formData.name.value" required />
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email:</label>
                    <input type="email" class="form-control" @input="validate" @focusout="validate" :id="formData.email.id" placeholder="jhon@outlook.com" v-model="formData.email.value" required />
                </div>
                <div class="mb-3">
                    <label for="message" class="form-label">Message:</label>
                    <textarea class="form-control" @input="validate" @focusout="validate" :id="formData.message.id" v-model="formData.message.value" required rows="5"></textarea>
                </div>
                <button type="submit" class="btn btn-primary w-100" >Submit</button>
            </form>
        </div>
    </main>
</template>

<style scoped>
label{
    font-size: 1rem;
}
.contact-container,input{
    font-size: 0.8rem;
}
.contact-container{    
    min-width: 85%;
    margin-top: 20px;
    border-radius: 25px;   
}

@media (min-width:1024px){
    .contact-container{    
    min-width: 50%;
}
}
</style>