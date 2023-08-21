<template>
    <div class="containerEntreprises" v-for="(entreprise, key) in entreprises" :key="key">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
            <path fill-opacity="1" :d="entreprise.pathd">
            </path>
        </svg>
        <span class="entrepriseInfo">
            <span class="frontEntreprise">
                <a :href="entreprise.lien">
                    <img :src="entreprise.logo" :alt="entreprise.altLogo">
                </a>
                <h3>{{ entreprise.nom }}</h3>
            </span>
            <span class="descriptionEntreprise">
                <p>{{ entreprise.description }}</p>
            </span>
        </span>
    </div>
</template>

<script>

import JsonEntreprise from "../database/entreprise.json";

export default {
    name: "ListEntreprises",
    data() {
        return {
            entreprises: JsonEntreprise.entreprises
        };
    },
};

</script>

<style lang="scss">

@import "../assets/responsive.scss";


.containerEntreprises {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: auto;
    background-color: var(--var-color3);
    padding-bottom: 2rem;


    // @include respond(phone-500) {
    //     height: 100vh;
    // }

    // @include respond(phone-moyen) {
    //     height: 120vh;
    // }
}


.containerEntreprises svg {
    fill: var(--var-color1);
}


.containerEntreprises:nth-child(odd) {
    background-color: var(--var-color1);
}

.containerEntreprises:nth-child(odd) svg {
    fill: var(--var-color3);
}

.entrepriseInfo {
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    @include respond(tab-1000) {
        // transform: translateY(-20%);
        flex-direction: column;
        justify-content: space-between;
    }

    @include respond(phone-500) {
        // transform: translateY(-20%);
    }
}


.containerEntreprises:nth-child(odd) .entrepriseInfo {
    flex-direction: row-reverse;

    @include respond(tab-1000) {
        flex-direction: column;
        justify-content: space-between;
    }
}

.frontEntreprise {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 30%;
    height: 80%;
    color: var(--var-color1);
    font-family: "Lilita one", sans-serif;
    font-size: 3.7vw;

    @include respond(tab-700) {
        width: 50%;
        height: 50%;
        font-size: 7vw;
    }
}

.containerEntreprises:nth-child(odd) .frontEntreprise{
    color: var(--var-color4);
}


.frontEntreprise img {
    width: 15vw;
    height: 15vw;
    object-fit: contain;

    @include respond(tab-700) {
        width: 25vw;
        height: 25vw;
    }
}

.descriptionEntreprise {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    height: auto;
    background-color: var(--var-color1);
    color: var(--var-color4);
    font-family: "Poppins", sans-serif;
    font-size: 1.4rem;
    font-weight: 600;
    text-align: justify;
    padding: 3rem;
    box-shadow: -10px 10px 0px 0 var(--var-color2);
    border-radius: 20px;

    @include respond(tab-700) {
        width: 80%;
        font-size: 2.5vw;
    }

    @include respond(phone-500) {
        width: 95%;
        font-size: 4vw;
    }

    @include respond(phone-moyen) {
        // font-size: 5.5vw;
    }
}
// saut de ligne au \n
.descriptionEntreprise p {
    white-space: pre-line;


}

.containerEntreprises:nth-child(odd) .descriptionEntreprise {
    box-shadow: 10px 10px 0px 0 var(--var-color2);
    background-color: var(--var-color3);
    color: var(--var-color1);
}


</style>