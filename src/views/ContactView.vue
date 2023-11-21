<script setup>
import { reactive } from 'vue';

const formData = reactive({
  name: '',
  email: '',
  message: '',
});

const submitForm = () => {
  // Handle form submission logic here
  console.log('Form submitted:', formData);
};
</script>

<template>
    <main class="d-flex justify-content-center flex-column align-items-center h-100">
        <h1>Contact me</h1>
        <div class="contact-container p-5">            
            <form @submit.prevent="submitForm">
                <div class="mb-3">
                <label for="name" class="form-label">Name:</label>
                <input type="text" class="form-control" id="name" v-model="formData.name" required />
                </div>
                <div class="mb-3">
                <label for="email" class="form-label">Email:</label>
                <input type="email" class="form-control" id="email" placeholder="jhon@outlook.com" v-model="formData.email" required />
                </div>
                <div class="mb-3">
                <label for="message" class="form-label">Message:</label>
                <textarea class="form-control" id="message" v-model="formData.message" required rows="5"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </main>
</template>

<style scoped>
.contact-container{
    min-width: 80%;
    margin-top: 20px;
    border-radius: 25px;
    background-color: rgba(0, 0, 0, 0.652);
}
/* Add your styles for the contact form here */
</style>