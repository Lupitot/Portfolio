<template>
    <div class="ProjetContainer" v-for="(projet, key) in JsonProjet" :key="key">
        <span class="faceProjet">
            <h3>{{ projet.nom }}</h3>
            <span>
                <img :src="projet.image" :alt="projet.altImage">
            </span>
            <a :href="projet.lienGithub">
                <svg-icon class="iconGithub" type="mdi" :path="Github"></svg-icon>
            </a>
        </span>
        <span class="descriptionProjet">
            <p>{{ projet.description }}</p>
            <ul>
                <li v-for="(langage, key) in projet.langage" :key="key">
                    <svg-icon class="icon" type="mdi" :path="getIcon(langage.icone)"></svg-icon>
                </li>
            </ul>

        </span>
    </div>
</template>

<script>
import JsonProjet from "../database/projet.json";
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiGithub, mdiLanguageHtml5, mdiLanguageCss3, mdiLanguagePhp, mdiLanguageCsharp, mdiLanguageJavascript, mdiUnity } from '@mdi/js';

export default {
    name: "projetIcon",
    components: {
        SvgIcon
    },
    data() {
        return {
            JsonProjet: JsonProjet.projets,
            Github: mdiGithub,
            Html: mdiLanguageHtml5,
            Css: mdiLanguageCss3,
            Php: mdiLanguagePhp,
            Csharp: mdiLanguageCsharp,
            Javascript: mdiLanguageJavascript,
            Unity: mdiUnity
        };
    },
    methods: {
        getIcon(langage) {
            switch (langage) {
                case "Html":
                    return this.Html;
                case "Css":
                    return this.Css;
                case "Php":
                    return this.Php;
                case "Csharp":
                    return this.Csharp;
                case "Javascript":
                    return this.Javascript;
                case "Unity":
                    return this.Unity;
                default:
                    return '';
            }
        }
    },
};

</script>

<style lang="scss">

@import "../assets/responsive.scss";

.ProjetContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 2rem 0;
    padding: 0 2rem;
    width: 80%;
    height: 35vw;
    gap: 10vw;

    @include respond(desktop) {
        width: 90%;
        height: 40vw;
    }

    @include respond(desktop-1550) {
        width: 100%;
        height: 45vw;
    }

    @include respond(desktop-1350) {
        height: 55vw;
    }

    @include respond(tab-land) {
        flex-direction: column;
        gap: 5vw;
        height: 135vh;
    }

    @include respond(tab-port) {
        height: 150vh;
    }

    @include respond(tab-800) {
        height: 160vh;
    }

    @include respond(phone-big) {
        height: 170vh;
    }

    @include respond(phone-500) {
        height: 180vh;
        justify-content: space-around;
    }
}

.ProjetContainer:nth-child(odd) {
    flex-direction: row-reverse;

    @include respond(tab-land) {
        flex-direction: column;
    }
}

.faceProjet {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    height: 100%;
    padding: 2vw;

    @include respond(desktop-1350) {
        height: 75%;
    }

    @include respond(tab-land) {
        width: 80%;
        height: 55%;
        gap: 5vw;
    }

    @include respond(tab-700) {
        width: 80%;
        height: 35%;
    }

    @include respond(phone-big) {
        width: 100%;
        height: 35%;
    }

    @include respond(phone-500) {
        height: 27%;
    }

    @include respond(phone-330){
        height: 20%;
    }

}

.faceProjet a {
    width: 5vw;
    height: 5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--var-color4);

    @include respond(tab-800) {
        width: 10vw;
        height: 10vw;
    }

    @include respond(phone-500) {
        width: 15vw;
        height: 15vw;
    }
}

.faceProjet a svg {
    width: 100%;
    height: 100%;
    fill: var(--var-color1);
    transition: all 1s ease-in-out;
}

.ProjetContainer:nth-child(2) .faceProjet a {
    display: none;
}

.faceProjet h3 {
    font-size: 3rem;
    font-weight: 400;
    color: var(--var-color4);
    font-family: "Lilita One", cursive;
    text-align: center;
}

.faceProjet img {
    width: 100%;
    height: 80%;
    object-fit: cover;
}


.descriptionProjet {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    height: 100%;
    background-color: var(--var-color3);
    border-radius: 20px;
    padding: 2vw;
    transform: perspective(1500px) rotateY(15deg);
    box-shadow: -10px 10px 0px 0 var(--var-color2);
    transition: all 0.3s ease-in;

    @include respond(tab-land) {
        width: 80%;
        height: 45%;
        text-align: center;
    }

    @include respond(tab-port) {
        padding: 3vw;
        width: 80%;
        height: 55%;
    }

    @include respond(tab-800){
        padding: 5vw;
    }

    @include respond(tab-700) {
        width: 80%;
        height: 65%;
    }

    @include respond(phone-big) {
        width: 100%;
        height: 55%;
        transform: perspective(1500px) rotateY(0deg);
    }

    @include respond(phone-500) {
        height: 65%;
    }

    @include respond(phone-moyen) {
        height: 75%;
    }

    @include respond(phone-330){
        height: auto;
    }


}

.descriptionProjet:hover {
    transform: perspective(1500px) rotateY(0deg);
    box-shadow: 0px 0px 0px 0 var(--var-color2);
    transition: all 0.3s ease-in;
}

.ProjetContainer:nth-child(odd) .descriptionProjet {
    transform: perspective(1500px) rotateY(-15deg);
    box-shadow: 10px 10px 0px 0 var(--var-color2);

    @include respond(phone-big) {
        transform: perspective(1500px) rotateY(0deg);
    }
}



.ProjetContainer:nth-child(odd) .descriptionProjet:hover {
    transform: perspective(1500px) rotateY(0deg);
    box-shadow: 0px 0px 0px 0 var(--var-color2);
    transition: all 0.3s ease-in;
}


.descriptionProjet:hover ul li .icon{
    color: var(--var-color1);
    transition: all 0.3s ease-in-out;
}

.descriptionProjet p {
    font-size: 1rem;
    font-weight: 600;
    color: var(--var-color1);
    text-align: justify;
    font-family: "Poppins", cursive;

    @include respond(desktop) {
        font-size: 1.1rem;
    }

    @include respond(phone-330) {
        font-size: 0.9rem;
    }
}

.descriptionProjet ul {
    display: flex;
    flex-direction: row;
    gap: 3vw;
    align-items: center;
    width: 100%;
    height: 10%;
}

.descriptionProjet ul li {
    list-style: none;
    width: 5vw;
    height: 5vw;
    display: flex;
    justify-content: center;
    align-items: center;

    @include respond(tab-800) {
        width: 10vw;
        height: 10vw;
    }

    @include respond(phone-big) {
        width: 15vw;
        height: 15vw;
    }
}

.descriptionProjet ul li .icon {
    width: 100%;
    height: 100%;
    color: var(--var-color4);
    transition: all 0.3 ease-in-out;


}
</style>