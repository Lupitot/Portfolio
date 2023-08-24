<template>
    <h1 class="bienvenue">Bienvenue</h1>
</template>

<script setup></script>

<style lang="scss">

    @import "../assets/responsive.scss";
    .bienvenue {
    
        color: var(--var-color4);
        font-size: 15vw;
        font-family: "Lilita One", cursive;
        position: absolute;
        text-shadow: 0 0 9px var(--var-color4);
        animation: ApparitionTitleBienvenue 1s ease-in-out, disparitionTitleBienvenue 1s ease-in-out 2s forwards;

        @include respond(tab-1000){
            font-size: 12vw;
        }

        @include respond(phone-moyen) {
            font-size: 10vw;
        }

        @include respond(phone) {
            font-size: 11vw;
        }

    }

     @keyframes ApparitionTitleBienvenue {
        0% {
            scale: 0;
        }
        50% {
            scale: 1.6;
        }
        100% {
            scale: 1;
        }
     }
     @keyframes disparitionTitleBienvenue {
        0% {
            scale: 1;
        }
        50% {
            scale: 1.4;
        }
        100% {
            scale: 0;
        }
        
     }
</style>