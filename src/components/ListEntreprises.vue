<template>
    <div class="containerEntreprises" v-for="(entreprise, key) in entreprises" :key="key">
        <span class="frontEntreprise">
            <a :href="entreprise.lien">
                <img :src="entreprise.logo" :alt="entreprise.altLogo">
            </a>
            <h3>{{ entreprise.nom }}</h3>
        </span>
        <span class="descriptionEntreprise">
            <p>{{ entreprise.description }}</p>
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

</style>