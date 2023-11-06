<template>
    <div class="container">
        <div class="overlay">
            <div class="text-container">
                <p>Web</p>
                <p>API</p>
            </div>
        </div>
        <div class="content">
            <img src="../assets/Images/ik.gif">
        </div>
    </div>
    <div class="container">
        <div class="overlay">
            <div class="text-container">
                <p>Blazor</p>                
            </div>
        </div>
        <div class="content">
            <img src="../assets/Images/ik.gif">
        </div>
    </div>
    <div class="container">
        <div class="overlay">
            <div class="text-container">
                <p>Xamarin</p>                
            </div>
        </div>
        <div class="content">
            <img src="../assets/Images/ik.gif">
        </div>
    </div>
    <div class="container">
        <div class="overlay">
            <div class="text-container">
                <p>Active</p>
                <p>Directory</p>
            </div>
        </div>
        <div class="content">
            <img src="../assets/Images/ik.gif">
        </div>
    </div>
</template>
<style scoped>
.container{
    margin:0 50px 50px 0;
    padding: 0;
    overflow: hidden;
    border-top-right-radius:20% ;
    border-bottom-left-radius:20%;   
    width:250px;
    height:250px;
    position: relative;
    box-shadow: 10px 10px 15px black;    
}
.text-container{
    text-align: center;
}
.overlay{
    width: inherit;
    height: inherit;
    z-index: 1;
    position: absolute;
    content:" ";
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(100, 65, 134);
    transition:opacity 1s ease-in-out;
    
}

.overlay:hover{
    opacity: 0;    
}

.overlay p {    
    opacity: 0.5;
    font-weight:bold;
    font-style:italic;
    font-size: 4rem;
    margin: 0;
    line-height: 60px;
}
.content img{
    height:250px;
    width: 250px;
}
</style>