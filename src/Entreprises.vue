<template>
    <FollowMouse></FollowMouse>
    <BurgerMenu></BurgerMenu>
    <section class="contentEntreprises">
        <h1>Entreprises</h1>
        <ListEntreprises></ListEntreprises>

    </section>
    <Footer></Footer>
</template>

<script setup>
import BurgerMenu from "@/components/BurgerMenu.vue";
import FollowMouse from "./components/FollowMouse.vue";
import Footer from "./components/Footer.vue";
import ListEntreprises from "./components/ListEntreprises.vue";

</script>

<style lang="css" scoped>
.contentEntreprises {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
}

.contentEntreprises h1 {
    margin-top: 1.5rem;
    font-size: 5vw;
    color: var(--var-color4);
    font-family: "Lilita One", cursive;
}

</style>