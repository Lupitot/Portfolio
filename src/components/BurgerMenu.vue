<template>
    <div class="menu" :class="{ active: menuOpen }">
        <section id="content" class="content">
            <ul class="ulmenu">
                <li><a href="/portfolio/index.html">Home</a></li>
                <li><a href="/portfolio/src/page/blog.html">Blog</a></li>
                <li><a href="/portfolio/src/page/projet.html">Projets</a></li>
                <li><a href="/portfolio/src/page/entreprises.html">Entreprises</a></li>
                <li><a href="/portfolio/src/page/contact.html">Contact</a></li>
            </ul>
        </section>
    </div>
    <span class="contentBurger">
        <input type="checkbox" class="checkbox" v-model="menuOpen" />
        <div class="burger" :class="{ burgerActive: menuOpen }">
            <span></span>
        </div>
    </span>
</template>

<script setup>
import { ref } from 'vue';

const menuOpen = ref(false);
</script>

<style lang="scss">

@import  "../assets/responsive.scss";

.menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 3;
    pointer-events: none;
}

.menu.active {
    pointer-events: auto;
}


.ulmenu {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    list-style-type: none;
    gap: 3vw;
}

.ulmenu li {
    color: #EFEFEF;
    font-size: 2vw;
    width: 12vw;
    z-index: 1;
    font-family: "Poppins", sans-serif;
    position: relative;
    height: 3vw;
    cursor: pointer;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: color 1s ease-in-out;


    @include respond(tab-port) {
        font-size: 3vw;
        width: 20vw;
        height: 5vw;
    }


    @include respond(phone-big) {
        font-size: 5vw;
        width: 33vw;
        height: 7vw;
        font-weight: 600;
    }

    @include respond(phone) {
        font-size: 6vw;
        font-weight: 600;
        width: 40vw;
        height: 8vw;
    }

}

.ulmenu li::before {
    content: "";
    position: absolute;
    width: 0;
    height: 3vw;
    background-color: #FFC947;
    z-index: -1;
    border-radius: 30px;
    transition: 0.5s;
    right: 100%;


    @include respond(tab-port) {
        height: 5vw;
    }


    @include respond(phone-big) {
        height: 7vw;
    }

    @include respond(phone) {
        height: 8vw;
    }
}

.ulmenu li:hover::before {
    width: 100%;
    right: 0;
    animation: linkanim 0.5s linear;

}

.ulmenu li a {
    text-decoration: none;
    color: #EFEFEF;
    transition: color 0.5s ease-in-out;
}

.ulmenu li:hover a {
    color: #0A1931;
    transition: color 1s ease-in-out;
}

@keyframes linkanim {
    0% {
        width: 0;
    }

    100% {
        width: 12vw;
    }
}

.content {
    position: fixed;
    background-color: #0A1931;
    height: 100vh;
    width: 100%;
    transform: translateX(-150%);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    z-index: 2;
}

.menu.active .content {
    transform: translateX(0);
}



input[type="checkbox"]:checked~.content {
    transform: translateX(0);
}


.contentBurger {
    background-color: #0A1931;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    position: fixed;
    right: 2vw;
    top: 2vw;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 30;
}

.checkbox {
    position: fixed;
    display: block;
    height: 55px;
    width: 55px;
    right: 35px;
    top: 35px;
    z-index: 31;
    opacity: 0;
    cursor: pointer;


    @include respond(tab-port) {
        right: 25px;
        top: 25px;
        height: 35px;
        width: 35px;
    }

    @include respond(phone-big) {
        right: 20px;
        top: 20px;
        height: 40px;
        width: 40px;
    }

    @include respond(phone-moyen) {
        right: 15px;
        top: 15px;
    }

    @include respond(phone) {
        right: 15px;
        top: 15px;
        height: 45px;
        width: 45px;
    }

}

.burger {
    width: 32px;
    height: 24px;
    z-index: 20;
    margin-top: 20px;
}

.burger span {
    width: 100%;
    height: 4px;
    background-color: #EFEFEF;
    border-radius: 12px;
    display: block;
    transition: background-color 0.5s ease-in-out;
}

.burger span::before,
.burger span::after {
    content: "";
    width: 100%;
    background-color: #EFEFEF;
    display: block;
    transition: all 0.5s ease-in-out;
    border-radius: 12px;
    height: 4px;
}

.burger span::before {
    transform: translateY(-10px);

}

.burger span::after {
    transform: translateY(10px);
    margin-top: -4px;
}


.burgerActive span {
    background-color: transparent;
}

.burgerActive span::before {
    transform: rotateZ(45deg) translateY(0);
}

.burgerActive span::after {
    transform: rotateZ(-45deg) translateY(0);
}
</style>