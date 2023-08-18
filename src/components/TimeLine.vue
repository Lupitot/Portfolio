<template>
    <div class="contentTimeline">
        <ul class="timeline">
            <li>
                <h4>2023 2024 :</h4>
                <p>Année de Bachelor 3 en spécialité développement à Nantes Ynov Campus. La suite est à venir.</p>
            </li>
            <li>
                <h4>2022 2023 :</h4>
                <p>Année de Bachelor 2 à Nantes Ynov Campus. Stage chez Oniti en développement. Poursuite de l'emploi étudiant chez KFC. Début du projet Abyssal Dungeon.</p>
            </li>
            <li>
                <h4>2021 2022 :</h4>
                <p>Première année de Bachelor à Nantes Ynov Campus. Découverte approfondie du monde du développement. Début de mon emploi étudiant chez KFC. Stage à l'université de Tours à l'antenne de Blois en développement et en bases de données.</p>
            </li>
            <li>
                <h4>2020 2021 :</h4>
                <p>Obtention de mon Bac STI2D option SIN (Systèmes d'Information et Numérique) avec mention bien. Emploi dans la station Esso de Blois-Menard . Installation à Nantes.</p>
            </li>
        </ul>
    </div>
</template>

<script setup>
</script>

<style lang="scss">

@import "../assets/responsive.scss";



.timeline {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    list-style: none;
    padding-top: 2.5vw;
    gap: 20px;
    transform: translateY(45%);

    @include respond(tab-land) {
        transform: translateY(40%);
    }

    @include respond(tab-port) {
        transform: translateY(60%);
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 10vw;

    }

    @include respond(phone-big) {
        transform: translateY(14%);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
}

.timeline:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 0.7vw;
    background-color: var(--var-color1);

    @include respond(tab-port) {
        display: none;
    }
    
}

.timeline li {
    position: relative;
    background-color: var(--var-color1);
    border-radius: 0px 5vw;
    color: var(--var-color4);
    width: 25vw;
    height: 17vw;
    padding: 20px 40px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    transform: translateX(70%);
    box-shadow: 0.7vw 0.7vw 0px 0px var(--var-color2); 


    @include respond(tab-land) {
        width: 30vw;
        height: 20vw;
    }


    @include respond(tab-port) {
        width: 40vw;
        height: 25vw;
        transform: translateX(0%);
        border-radius: 5vw 5vw;
    }
    
    @include respond(tab-700){
        width: 40vw;
        height: 30vw;
        transform: translateX(0%);
        border-radius: 5vw 5vw;

    }

    @include respond(phone-big) {
        width: 80vw;
        height: auto;
        padding: 5vw;
        gap: 5vw;
        text-align: center;
        transform: translateX(0%);
        border-radius: 5vw 5vw;
    }

    @include respond(phone) {
        height: 130vw;

    }

}

.timeline li h4 {
    font-size: 2vw;
    margin: 0;
    padding: 0;
    font-family: "Lilita one", sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1vw;
    text-align: center;

    @include respond(tab-land) {
        font-size: 2.5vw;
    }

    @include respond(tab-port) {
        font-size: 3vw;
    }

    @include respond(phone-big) {
        font-size: 5vw;
    }

    @include respond(phone) {
        font-size: 6vw;
    }
}

.timeline li p {
    font-size: 1vw;
    margin: 0;
    padding: 0;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    letter-spacing: 0.1vw;
    text-align: justify;

    @include respond(tab-land) {
        font-size: 1.1vw;
    }

    @include respond(tab-port) {
        font-size: 1.2vw;
    }

    @include respond(tab-700) {
        font-size: 1.5vw;
    }

    @include respond(phone-big) {
        font-size: 4vw;
    }

    @include respond(phone) {
        font-size: 5vw;
        text-align: center;
    }
}

.timeline li:nth-child(odd) {
    transform: translateX(-70%);
    border-radius: 5vw 0px;

    @include respond(tab-port) {
        transform: translateX(0%);
        border-radius: 5vw 5vw;
    }

    @include respond(phone-big) {
        transform: translateX(0%);
        border-radius: 5vw 5vw;
    }




}

.timeline li:nth-child(odd)::before {
    transform: translate(-50%, -50%);
    left: 120%;
}

.timeline li::before {
    content: "";
    position: absolute;
    width: 2vw;
    height: 2vw;
    background-color: var(--var-color1);
    top: 0;
	right: 120%;
    border-radius: 50%;
    box-sizing:border-box;
	transform: translate(50%,-50%);

    @include respond(tab-port) {
        display: none;
    }

    @include respond(phone-big) {
        display: none;
    }
}
</style>
