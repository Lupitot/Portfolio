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

<style lang="css">
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