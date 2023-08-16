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

<style lang="css">
.containerEntreprises {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 120vh;
    background-color: var(--var-color3);
    padding-bottom: 2rem;
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
    height: 75%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}


.containerEntreprises:nth-child(odd) .entrepriseInfo {
    flex-direction: row-reverse;
}

.frontEntreprise {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 30%;
    height: 80%;
    color: var(--var-color4);
    font-family: "Lilita one", sans-serif;
    font-size: 3.7vw;
}



.frontEntreprise img {
    width: 15vw;
    height: 15vw;
    object-fit: contain;
}

.descriptionEntreprise {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    height: 80%;
    background-color: var(--var-color1);
    color: var(--var-color4);
    font-family: "Poppins", sans-serif;
    font-size: 1.4rem;
    font-weight: 600;
    text-align: justify;
    padding: 1rem;
    box-shadow: -10px 10px 0px 0 var(--var-color2);
    border-radius: 20px;
}

.containerEntreprises:nth-child(odd) .descriptionEntreprise {
    box-shadow: 10px 10px 0px 0 var(--var-color2);
    background-color: var(--var-color3);
    color: var(--var-color1);
}


</style>