<template>
    <div class="container">
        <div class="overlay">
            <div class="text-container">
                <p>Web</p>
                <p>API</p>
            </div>
        </div>
        <div class="content">
            <img src="../assets/Images/api-screenshot.PNG" title="API" alt="API" >
        </div>
    </div>
    <div class="container">
        <div class="overlay">
            <div class="text-container">
                <p>Xamarin</p>                
            </div>
        </div>
        <div class="content">
            <img src="../assets/Images/xamarin-screenshot.PNG" title="Memmory helper" alt="Memmory helper">
        </div>
    </div>
    <div class="container">
        <div class="overlay">
            <div class="text-container">
                <p>Blazor</p> 
                <p>Cricketdarts</p>               
            </div>
        </div>
        <div class="content">
            <img src="../assets/Images/cricketdarts-screenshot.PNG" title="Cricketdarts" alt="Cricketdarts">
        </div>
    </div>    
    <div class="container">
        <div class="overlay">
            <div class="text-container">
                <p>Blazor</p>
                <p>Spoticlone</p>
            </div>
        </div>
        <div class="content">
            <img src="../assets/Images/spoticlone-screenshot.PNG" title="Spoti clone" alt="Spoti clone">
        </div>
    </div>
</template>
<style scoped>
.container{    
    margin: 10px 10px;
    padding: 0;
    overflow: hidden;
    border-radius: 25px; 
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
    font-size: 1rem;
    margin: 0;  
}
.content img,.container{
    height:150px;
    width: 300px;
}

@media (min-width: 1024px){
    .content img,.container{
    height:250px;
    width: 500px;
  
}
    .container{
        margin: 20px 20px;
    }
    .overlay p{
        font-size: 3.5rem;
        line-height: 60px;
    }
};
</style>