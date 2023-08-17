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
  
  
<style lang="scss" scoped>

@import "./assets/responsive.scss";

.contentBlog {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 90vh;

    @include respond(tab-land){
        justify-content: space-between;
    }
}

.contentBlog h1 {
    margin-top: 1.5rem;
    font-size: 5vw;
    color: var(--var-color4);
    font-family: "Lilita One", cursive;
    margin-bottom: -1.5rem;

    @include respond(tab-port){
        font-size: 7vw;
    }

    @include respond(phone){
        font-size: 10vw;
    }
    


}

</style>
  