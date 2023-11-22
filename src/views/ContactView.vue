<script setup>
import { reactive} from 'vue'
import {validateOnSubmit,realTimeValidation} from '../assets/js/validation'

const formData = reactive({
  name: { value:"",id:"name"},
  email: { value:"",id:"email"},
  message: { value:"",id:"message"},
});


const submitForm = () => {      
    let isValid = validateOnSubmit(formData) 
    if(isValid) submitToFormspree() 
};

const submitToFormspree = () => {
  // Manually submit the form to Formspree
  const form = document.querySelector('form');
  form.action = import.meta.env.VITE_APP_FORMSPREE;
  form.method = 'POST';
  form.submit();
};
</script>

<template>
    <main class="d-flex justify-content-center flex-column align-items-center h-100">
        <h1>Contact me</h1>
        <div class="contact-container p-4">            
            <form @submit.prevent="submitForm">
                <div class="mb-3">
                    <label for="name" class="form-label">Name:</label>
                    <input type="text" name="name"  class="form-control" autocomplete="off" @input="realTimeValidation" @focusout="realTimeValidation" :id="formData.name.id" v-model="formData.name.value"/>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email:</label>
                    <input type="email" name="email" class="form-control" autocomplete="off" @input="realTimeValidation" @focusout="realTimeValidation" :id="formData.email.id" placeholder="jhon@outlook.com" v-model="formData.email.value"/>
                </div>
                <div class="mb-3">
                    <label for="message" class="form-label">Message:</label>
                    <textarea class="form-control" name="message" @input="realTimeValidation" @focusout="realTimeValidation" :id="formData.message.id" v-model="formData.message.value" rows="5"></textarea>
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


input.placeholder-error::placeholder,textarea.placeholder-error::placeholder{
    color:red;
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