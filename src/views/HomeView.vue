<script setup></script>

<template>
  <main >
    <section class="intro">        
        <div class="d-flex align-items-center justify-content-center">
          <div class="into-text">
            <h1 class="about-header">Hi, my name is</h1>
            <h2 class="about-header">Benny Van Meerbeeck.</h2>
            <p><i> &#60; I love creating things &#62;</i></p>
          </div>
        </div>
        <div class="outer-circle">
          <img src="/assets/Images/ik.gif" width="300" height="300" />
        </div>
      </section>
  </main>
</template>

<style scoped>
.intro{
    display: flex;  
    justify-content: center;  
  }

@media (max-width: 1024px) {
  .intro{
    flex-direction: column-reverse; 
    text-align: center;   
  }

  .outer-circle{
    margin-bottom: 20px;
  }
}
main{
  display: flex;
  justify-content: center;
  align-items: center;
  height:calc(100vh - 80px);
}

.about-header {
  font-size: 2rem;
}

.outer-circle {
 
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center; 
  border-radius: 50%;
  content: ' '; 
  width: 320px;
  height: 320px;
  background-color: rgb(93, 59, 98);
  box-shadow: 0px 0px 20px 10px rgb(93, 59, 98);
}


p {
  line-height: 20px;
}

</style>