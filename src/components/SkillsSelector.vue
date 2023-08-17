<template>
    <div class="contentSkillsSelector">
        <span class="contentButton">
            <button v-for="tab in tabs" :key="tab" :class="['tab-button', { active: currentTab === tab }]"
                @click="currentTab = tab">
                {{ tab }}
            </button>
        </span>

        <span>
            <div class="content-tab" v-if="currentTab === 'Hard Skills'">
                <ul class="ulHardSkills">
                    <li>
                        <svg-icon class="icon html" type="mdi" :path="html"></svg-icon>
                        <h4>HTML</h4>
                    </li>
                    <li>
                        <svg-icon class="icon css" type="mdi" :path="css"></svg-icon>
                        <h4>CSS</h4>
                    </li>
                    <li>
                        <svg-icon class="icon js" type="mdi" :path="js"></svg-icon>
                        <h4>JS</h4>
                    </li>
                    <li>
                        <svg-icon class="icon sql" type="mdi" :path="sql"></svg-icon>
                        <h4>SQL</h4>
                    </li>
                    <li>
                        <svg-icon class="icon vue" type="mdi" :path="vue"></svg-icon>
                        <h4>Vue</h4>
                    </li>
                    <li>
                        <svg-icon class="icon php" type="mdi" :path="php"></svg-icon>
                        <h4>PHP</h4>
                    </li>
                    <li>
                        <svg-icon class="icon python" type="mdi" :path="python"></svg-icon>
                        <h4>Python</h4>
                    </li>
                    <li>
                        <svg-icon class="icon java" type="mdi" :path="java"></svg-icon>
                        <h4>Java</h4>
                    </li>
                    <li>
                        <svg-icon class="icon cSharp" type="mdi" :path="cSharp"></svg-icon>
                        <h4>C#</h4>
                    </li>
                </ul>
            </div>
            <div class="content-tab" v-else-if="currentTab === 'Soft-Skills'">
                <ul class="ulSoftSkills">
                    <li>
                        <svg-icon class="icon adaptabilite" type="mdi" :path="adaptabilite"></svg-icon>
                        <h4>Capacité d'adaptation</h4>
                    </li>
                    <li>
                        <svg-icon class="icon polyvalence" type="mdi" :path="polyvalence"></svg-icon>
                        <h4>Polyvalence</h4>
                    </li>
                    <li>
                        <svg-icon class="icon creatif" type="mdi" :path="creatif"></svg-icon>
                        <h4>Créativité</h4>
                    </li>
                    <li>
                        <svg-icon class="icon curieux" type="mdi" :path="curieux"></svg-icon>
                        <h4>Curiosité</h4>
                    </li>
                    <li>
                        <svg-icon class="icon gestionDeProjet" type="mdi" :path="gestionDeProjet"></svg-icon>
                        <h4>Gestion de projet</h4>
                    </li>
                    <li>
                        <svg-icon class="icon perseverant" type="mdi" :path="perseverant"></svg-icon>
                        <h4>Persévérance</h4>
                    </li>
                </ul>

            </div>
            <div class="content-tab" v-else-if="currentTab === 'Autres'">
                <ul class="ulAutres">
                    <li>
                        <svg-icon class="icon vsCode" type="mdi" :path="vsCode"></svg-icon>
                        <h4>VS Code</h4>
                    </li>
                    <li>
                        <svg-icon class="icon github" type="mdi" :path="github"></svg-icon>
                        <h4>Github</h4>
                    </li>
                    <li>
                        <fa class="icon figma" :icon="['fab', 'figma']" />
                        <h4>Figma</h4>
                    </li>
                    <li>
                        <svg-icon class="icon unity" type="mdi" :path="unity"></svg-icon>
                        <h4>Unity</h4>
                    </li>
                </ul>
            </div>
        </span>
    </div>
</template>
    
<script>

import SvgIcon from '@jamescoyle/vue-icon';
import { mdiLanguageHtml5, mdiLanguageCss3, mdiLanguageJavascript, mdiDatabase, mdiVuejs, mdiLanguagePhp, mdiLanguagePython, mdiLanguageJava, mdiLanguageCsharp } from '@mdi/js';
import { mdiAccountConvertOutline,mdiAccountMultipleCheckOutline, mdiAccountEditOutline, mdiAccountSearchOutline, mdiAccountTieOutline, mdiAccountInjuryOutline  } from '@mdi/js';
import { mdiMicrosoftVisualStudioCode, mdiGithub, mdiUnity } from '@mdi/js';

export default {
    name: 'SkillsSelector',
    data() {
        return {
            currentTab: 'Hard Skills',
            tabs: ['Hard Skills', 'Soft-Skills', 'Autres'],
            html: mdiLanguageHtml5,
            css: mdiLanguageCss3,
            js: mdiLanguageJavascript,
            sql: mdiDatabase,
            vue: mdiVuejs,
            php: mdiLanguagePhp,
            python: mdiLanguagePython,
            java: mdiLanguageJava,
            cSharp: mdiLanguageCsharp,
            adaptabilite: mdiAccountConvertOutline,
            polyvalence: mdiAccountMultipleCheckOutline,
            creatif: mdiAccountEditOutline,
            curieux: mdiAccountSearchOutline,
            gestionDeProjet: mdiAccountTieOutline ,
            perseverant: mdiAccountInjuryOutline,
            vsCode: mdiMicrosoftVisualStudioCode,
            github: mdiGithub,
            unity: mdiUnity,
        };
    },
    name: 'MyIcon',
    components: {
        SvgIcon
    }

};
</script>
  
<style lang="scss" scoped>

@import "../assets/responsive.scss";



.contentSkillsSelector {
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 3vw;

    @include respond(phone-big) {
        justify-content: space-between;
        height: 190vw;
    }
    
}

.contentButton {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.tab-button {
    width: 30%;
    border: none;
    cursor: pointer;
    background: none;
    color: var(--var-color4);
    font-family: "Lilita one", cursive;
    font-size: 2.2vw;

    @include respond(tab-700) {
        font-size: 3vw;
    }

    @include respond(phone-big) {
        font-size: 4vw;
    }
}

.tab-button::after {
    content: "";
    display: block;
    width: 0;
    height: 6px;
    background: var(--var-color3);
    transition: width 0.3s;


    @include respond(tab-700) {
        height: 4px;
    }


    @include respond(phone-big) {
        height: 3px;
    }
}

.tab-button:hover::after {
    width: 100%;
    transition: width 0.3s;
}

.tab-button.active::after {
    width: 100%;
    transition: width 0.3s;
}

.content-tab {
    color: var(--var-color4);
    width: 80vw;
    height: 55vw;
    display: flex;
    align-items: center;
    justify-content: center;

    @include respond(tab-700) {
        height: 75vw;
    }

    @include respond(phone-big) {
        height: 175vw;
    }

}

.icon {
    color: var(--var-color4);
    width: 10vw;
    height: 10vw;
    transition: color 0.3s ease-in-out;

    @include respond(phone-big) {
        width: 25vw;
        height: 25vw;
    }
    
    @include respond(phone-moyen) {
        width: 22vw;
        height: 22vw;
    }

    @include respond(phone) {
        width: 20vw;
        height: 20vw;
    }
}

.icon:hover {
    transition: color 0.3s ease-in-out;
    color: var(--var-color3);
}


/* hard skill */

.ulHardSkills {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas:
        "html css js"
        "sql vue php"
        "python java cSharp";
    align-content: center;
    justify-content: center;
    width: auto;
    height: 100%;
    padding: 2vw;
    gap: 6vw;
    column-gap: 15vw;
    list-style-type: none;

    @include respond(phone-big) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(5, 1fr);
        grid-template-areas:
            "html css"
            "js sql"
            "vue php"
            "python java"
            "cSharp .";
    }
}

.ulHardSkills li {
    text-align: center ;
    font-family: "Poppins", cursive; 
    font-size: 1.5vw;
    color: var(--var-color4);

    @include respond(tab-700) {
        font-size: 1rem;
    }

    @include respond(phone-big) {
        font-size: 1rem;
    }
}

.html {
    grid-area: html;
}

.css {
    grid-area: css;
}

.js {
    grid-area: js;
}

.sql {
    grid-area: sql;
}

.vue {
    grid-area: vue;
}

.php {
    grid-area: php;
}

.python {
    grid-area: python;
}

.java {
    grid-area: java;
}

.cSharp {
    grid-area: cSharp;
}

/* Soft skill */

.ulSoftSkills {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas:
        "adaptabilite polyvalence creatif"
        "curieux gestionDeProjet .";
    align-content: center;
    justify-content: center;
    width: auto;
    height: 100%;
    padding: 2vw;
    gap: 6vw;
    column-gap: 15vw;
    list-style-type: none;

    @include respond(phone-big) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);
        grid-template-areas:
            "adaptabilite polyvalence"
            "creatif curieux"
            "gestionDeProjet .";
    }
}


.ulSoftSkills li {
    text-align: center ;
    font-family: "Poppins", cursive; 
    font-size: 1.5vw;
    color: var(--var-color4);

    @include respond(phone-big) {
        font-size: 1rem;
    }
}


.adaptabilite {
    grid-area: adaptabilite;
}

.polyvalence {
    grid-area: polyvalence;
}

.creatif {
    grid-area: creatif;
}


.curieux {
    grid-area: curieux;
}

.gestionDeProjet {
    grid-area: gestionDeProjet;
}


/* Autres */

.ulAutres {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas:
        "vsCode github"
        "figma unity";
    align-content: center;
    justify-content: center;
    width: auto;
    height: 100%;
    padding: 2vw;
    gap: 6vw;
    column-gap: 15vw;
    list-style-type: none;

    @include respond(phone-big) {
        margin-top: -10rem;
        height: 50%;
    }
}


.ulAutres li {
    text-align: center ;
    font-family: "Poppins", cursive; 
    font-size: 1.5vw;
    color: var(--var-color4);

    @include respond(phone-big) {
        font-size: 1rem;
    }
}

.vsCode {
    grid-area: vsCode;
}

.github {
    grid-area: github;
}

.figma {
    grid-area: figma;
}

.unity {
    grid-area: unity;
}




</style>