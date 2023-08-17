<template>
    <div class="ContentFooter">
        <span class="LinkRedirection">
            <div class="buttonWithLink">
                <a href="/portfolio/src/page/contact.html">Contact</a>
            </div>
            <div class="buttonWithLink">
                <a href="/portfolio/index.html">Home</a>
            </div>
        </span>
        <span class="Droit">
            <p>Droits d'auteur © 2023 Tous droits réservés - Piauger Paul</p>
        </span>
    </div>
</template>


<script setup>
</script>

<style lang="scss">

@import "../assets/responsive.scss";


.ContentFooter {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1vw;
    height: 10vh;
    width: 100%;
    background-color: var(--var-color3);
    color: var(--var-color1);
    font-family: 'Poppins', cursive;


    @include respond(tab-land){
        height: 13vh;
    }

    @include respond(tab-700) {
        height: 15vh;
    }


    @include respond(phone-big) {
        height: 15vh;
        text-align: center;
    }

    @include respond(phone) {
        height: 20vh;
        
        gap: 7vw;
    }
}


.buttonWithLink {
    position: relative;
    width: 10vw;
    height: 2vw;
    border: none;
    background-color: var(--var-color4);
    border-radius: 15px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 1;
    overflow: hidden;

    @include respond(tab-land){
        width: 12vw;
        height: 3vw;
    }

    @include respond(tab-700) {
        width: 15vw;
        height: 4vw;
    }

    @include respond(phone-big) {
        width: 20vw;
        height: 5vw;
    }

    @include respond(phone-moyen) {
        width: 23vw;
        height: 7vw;
    }

    @include respond(phone) {
        width: 25vw;
        height: 8vw;
    }
}

  
.buttonWithLink::before {
    content: "";
    position: absolute;
    width: 0;
    height: 100%;
    background-color: var(--var-color1);
    z-index: -1;
    border-radius: 15px;
    transition: 0.5s;
    right: 100%;
}

.buttonWithLink:hover::before {
    width: 100%; 
    right: 0; 
    animation: animbtn 0.5s linear;
  }
  
.LinkRedirection {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2vw;
    position: relative;
    z-index: 1;
}


.LinkRedirection a {
    text-decoration: none;
    color: var(--var-color1);
    font-size: 1.5vw;
    margin: 0 1vw;
    z-index: 1;
    position: relative;
    transition: 0.5s;

    @include respond(tab-700) {
        font-size: 2vw;
    }


    @include respond(phone-big) {
        font-size: 3vw;
    }

    @include respond(phone) {
        font-size: 4vw;
    }

}

.LinkRedirection .buttonWithLink:hover a{
    color: var(--var-color4);
    transition: 0.5s;
}

@keyframes animbtn {
    0% {
        width: 0;
    }

    100% {
        width: 12vw;
    }
}
</style>