<template>
    <div class="contentLinkContact">
        <div class="Mail boxContact">
            <a href="mailto:paul.piauger@ynov.com">
                <p>Mail</p>
            </a>
        </div>
        <div class="Linkdin boxContact">
            <a href="https://www.linkedin.com/in/paul-piauger/">
                <p>Linkdin</p>
            </a>
        </div>
        <div class="CodePen boxContact">
            <a href="https://codepen.io/lupitot">
                <p>CodePen</p>
            </a>
        </div>
        <div class="CV boxContact">
            <a href="/portfolio/download/CV_Paul_Piauger.pdf" download="CV_Paul_Piauger.pdf">
                <p>Mon  CV</p>
            </a>
        </div>
    </div>
</template>

<script setup>
</script>

<style lang="css">
.contentLinkContact {
    width: 65%;
    height: 50%;
    display: flex;
    gap: 1vw;
}

.boxContact {
    position: relative;
    height: 100%;
    width: 23vw;
    min-width: 10vw;
    max-width: 23vw;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: ease-in 0.8s;
    overflow: hidden;
    background-color: var(--var-color1);
    border-radius: 10px;
    border: 2px solid var(--var-color3);
    color: var(--var-color4);
}

.boxContact:nth-child(1) {
    animation: apparitionBoxContact 1.5s ease-in-out;
}

.boxContact:nth-child(2) {
    animation: apparitionBoxContact 2s ease-in-out;
}

.boxContact:nth-child(3) {
    animation: apparitionBoxContact 2.5s ease-in-out;
}

.boxContact:nth-child(4) {
    animation: apparitionBoxContact 3s ease-in-out;
}

.boxContact a {
    text-decoration: none;
    color: var(--var-color4);
}

.boxContact p {
    rotate: -90deg;
    font-size: 5.7vw;
    font-weight: 300;
    font-family: 'Lilita One', cursive;
    transition: ease-in 0.8s;
}

.boxContact:hover {
    width: 50vw;
    max-width: 50vw;
    background-color: var(--var-color3);
    color: var(--var-color1);
    transition: ease 0.8s;
}

.boxContact:hover a {
    color: var(--var-color1);
    transition: ease-in 0.8s;
}

.boxContact:hover p {
    rotate: 0deg;
    transition: ease-in 0.8s;
}

@keyframes apparitionBoxContact {
    0% {
        opacity: 0;
        transform: translateY(-100%);
    }

    100% {
        opacity: 1;
        transform: translateY(0%);
    }
}



</style>