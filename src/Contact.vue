<template>
    <BurgerMenu></BurgerMenu>
    <FollowMouse></FollowMouse>
    <section class="ContentContact">
        <h1>Me contacter</h1>
        <ContactLink></ContactLink>
    </section>
    <Footer></Footer>
    
</template>
  
<script setup>
import BurgerMenu from "@/components/BurgerMenu.vue";
import ContactLink from "./components/ContactLink.vue";
import Footer from "./components/Footer.vue";
import FollowMouse from "./components/FollowMouse.vue";

</script>
  
  
<style lang="scss" scoped>

@import "./assets/responsive.scss";

.ContentContact{
    height: 90vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    
}

.ContentContact h1{
    font-size: 5vw;
    color: var(--var-color4);
    font-family: 'Lilita One', cursive;
    animation: apparitionTitle 1s ease-in-out;
}

</style>
  