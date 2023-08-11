<template>
    <BurgerMenu></BurgerMenu>
    <FollowMouse></FollowMouse>
    <section class="contentBlog">
        <h1>Blog</h1>
        <ListPostBlog></ListPostBlog>
    </section>
    <Footer></Footer>
    
</template>
  
<script setup>
import BurgerMenu from "@/components/BurgerMenu.vue";
import Footer from "./components/Footer.vue";
import FollowMouse from "./components/FollowMouse.vue";
import ListPostBlog from "./components/ListPostBlog.vue";

</script>
  
  
<style lang="css" scoped>

.contentBlog {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 90vh;
}

.contentBlog h1 {
    font-size: 5vw;
    color: var(--var-color4);
    font-family: "Lilita One", cursive;

}

</style>
  