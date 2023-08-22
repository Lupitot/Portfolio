<template>
    <div class="cardScrollContainer" ref="cardContainer">
        <div class="contentCardBlog" v-for="(post, key) in Json" :key="key">
            <div class="cardBlog">
                <span class="contentImagePost">
                    <img :src="post.image" :alt="post.altImage">
                </span>
                <span class="contentTextPost">
                    <h2>{{ post.titre }}</h2>
                    <p class="detectScroll">{{ post.contenu }}</p>
                    <button @click="handleCardSize">Voir plus</button>
                </span>

            </div>
        </div>
    </div>
</template>
  
<script>
import Json from "../database/blog.json";
import { ref, vShow } from 'vue';

export default {


    data() {
        return {
            Json: Json.blog,
        };
    },
    mounted() {
        window.addEventListener("wheel", this.handleVerticalScroll);
    },
    beforeDestroy() {
        window.removeEventListener("wheel", this.handleVerticalScroll);
    },
    methods: {
        handleVerticalScroll(event) {

            if (document.querySelector(".cardBlogSize")) {
                return;
            }

            if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
                this.$refs.cardContainer.scrollLeft += event.deltaY;
            }
        },
        handleCardSize(event) {
            if (event.target.textContent === "Voir plus" && !document.querySelector(".cardBlogSize")) {
                //bouger le scroll en fonction de la position de la carte en ajustant la droite et la gauche pour centré



                if (window.innerWidth > 1200) {
                    document.querySelector(".contentBlog").style = "height: auto;";
                }
                event.target.textContent = event.target.textContent.replace("Voir plus", "Voir moins");
                event.target.parentNode.parentNode.classList.toggle("cardBlogSize");

                setTimeout(() => {
                    var card = this.$refs.cardContainer.querySelector(".cardBlogSize");
                    card.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                        inline: 'center'
                    });
                }, 900);
            } else if (document.querySelector(".cardBlogSize")) {
                if (window.innerWidth > 1200) {
                    document.querySelector(".contentBlog").style = "height: 90vh;";
                }
                if (event.target.textContent === "Voir moins") {
                    event.target.textContent = event.target.textContent.replace("Voir moins", "Voir plus");
                    event.target.parentNode.parentNode.classList.toggle("cardBlogSize");
                } else if (event.target.textContent === "Voir plus") {
                    if (window.innerWidth > 1200) {
                        document.querySelector(".contentBlog").style = "height: auto;";
                    }
                    document.querySelector(".cardBlogSize").querySelector("button").textContent = document.querySelector(".cardBlogSize").querySelector("button").textContent.replace("Voir moins", "Voir plus");
                    event.target.textContent = event.target.textContent.replace("Voir plus", "Voir moins");
                    document.querySelector(".cardBlogSize").classList.toggle("cardBlogSize");
                    event.target.parentNode.parentNode.classList.toggle("cardBlogSize");
                    setTimeout(() => {
                    var card = this.$refs.cardContainer.querySelector(".cardBlogSize");
                    card.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                        inline: 'center'
                    });
                }, 900);
                }
            }
        },
    },
};





</script>
  
<style lang="scss" scoped>
@import "../assets/responsive.scss";

.cardScrollContainer {
    display: flex;
    overflow-x: auto;
    gap: 5vw;
    width: 100%;
    padding: 5vw 5vw 0 5vw;



    @include respond(tab-land) {
        flex-direction: column;
        align-items: center;
        height: 70vh;
        transform: translateY(-5%);
    }

    @include respond(tab-1000) {
        height: 75vh;
    }

    @include respond(tab-700) {
        height: 77vh;
    }

}

.cardScrollContainer::-webkit-scrollbar {
    display: none;
}

.contentCardBlog {
    flex: 0 0 auto;
}

.cardBlog {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25vw;
    height: 30vw;
    background-color: var(--var-color3);
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    transition: all 1s ease-in-out;

    @include respond(tab-land) {
        width: 50vw;
        height: 60vw;
    }

    @include respond(tab-1000) {
        width: 60vw;
        height: 70vw;
    }

    @include respond(tab-700) {
        width: 80vw;
        height: 90vw;
    }

    @include respond(phone-big) {
        width: 80vw;
        height: 110vw;
    }

    @include respond(phone-500) {
        width: 80vw;
        height: 130vw;
    }

    @include respond(phone-moyen) {
        width: 80vw;
        height: 170vw;
    }

    @include respond(phone) {
        width: 80vw;
        height: 215vw;
    }

}

.contentImagePost {
    width: 100%;
    height: 50%;
    border-radius: 10px 10px 0 0;
    overflow: hidden;
}

.contentImagePost img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.contentTextPost {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
    padding: 1rem;
    width: 90%;
    height: 50%;


}

.contentTextPost h2 {
    height: 10%;
    font-size: 2rem;
    font-weight: 500;
    color: var(--var-color1);
    font-family: "Lilita One", cursive;
    text-align: center;
}

.contentTextPost p {
    width: 100%;
    font-size: 1rem;
    font-weight: 800;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre-line;
    text-align: justify;
    color: var(--var-color1);
    font-family: "Poppins", cursive;

}

.contentTextPost button {
    width: 7vw;
    height: 2vw;
    font-size: 1rem;
    font-weight: 1000;
    color: var(--var-color4);
    font-family: "Poppins", cursive;
    background-color: var(--var-color1);
    border: none;
    border-radius: 30px;
    padding: 1vw;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    box-shadow: 4px 4px 0px 0px #185ADB;

    @include respond(tab-land) {
        width: 10vw;
        height: 3vw;
        font-size: 1.5vw;
        box-shadow: 3px 3px 0px 0px #185ADB;
    }

    @include respond(tab-1000) {
        width: 12vw;
        height: 4vw;
        font-size: 1.7vw;
        box-shadow: 3px 3px 0px 0px #185ADB;
    }

    @include respond(tab-700) {
        width: 15vw;
        height: 5vw;
        font-size: 2vw;
        box-shadow: 3px 3px 0px 0px #185ADB;
    }

    @include respond(phone-big) {
        width: 20vw;
        height: 6vw;
        font-size: 2.5vw;
        box-shadow: 3px 3px 0px 0px #185ADB;
    }

    @include respond(phone-500) {
        width: 25vw;
        height: 7vw;
        font-size: 3vw;
        box-shadow: 3px 3px 0px 0px #185ADB;
    }

    @include respond(phone-moyen) {
        width: 30vw;
        height: 8vw;
        font-size: 3.5vw;
        box-shadow: 3px 3px 0px 0px #185ADB;
    }

    @include respond(phone) {
        width: 35vw;
        height: 9vw;
        font-size: 4vw;
        box-shadow: 3px 3px 0px 0px #185ADB;
    }
}

.contentTextPost button:hover {
    transform: scale(1.1);
    transform: translate(-2px, -2px);
    box-shadow: 4px 4px 0px 0px #185ADB;
}


.cardBlogSize {
    height: auto;
    margin-bottom: 5vw;
    width: 80vw;
    transition: all 1s ease-in-out;

    @include respond(tab-land) {
        // width: 80vw;
        height: auto;
    }

    @include respond(tab-700) {
        // width: 90vw;
    }

}

.cardBlogSize p {
    text-overflow: clip;
    overflow: visible;
    -webkit-line-clamp: unset;
    height: auto;
    // overflow-y: auto;

}

.cardBlogSize p::-webkit-scrollbar {
    width: 0.5vw;
    background-color: var(--var-color1);
    border-radius: 30px;
}

.cardBlogSize p::-webkit-scrollbar-thumb {
    background-color: var(--var-color4);
    border-radius: 30px;
}

.cardBlogSize p::-webkit-scrollbar-track {
    background-color: var(--var-color1);
    border-radius: 30px;
}

.cardBlogSize .contentTextPost {
    height: 50%;

    @include respond(tab-land) {
        height: 55%;
    }

    @include respond(phone-moyen) {
        height: 60%;
    }
}

.cardBlogSize button {
    width: 10vw;
    height: 2.5vw;
    font-size: 1vw;
    font-weight: 1000;
    color: var(--var-color4);
    font-family: "Poppins", cursive;
    background-color: var(--var-color1);
    border: none;
    opacity: 0;
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    box-shadow: 4px 4px 0px 0px #185ADB;
    margin-top: -1vw;
    animation: appartionButtonVoirMoins 2s ease-in-out;
    animation-fill-mode: forwards;
    animation-delay: 0.5s;

    @include respond(tab-land) {
        width: 10vw;
        height: 3vw;
        font-size: 1.5vw;
    }

    @include respond(tab-1000) {
        width: 12vw;
        height: 4vw;
        font-size: 1.7vw;
    }

    @include respond(tab-700) {
        width: 15vw;
        height: 5vw;
        font-size: 2vw;
    }

    @include respond(phone-big) {
        width: 20vw;
        height: 6vw;
        font-size: 2.5vw;
    }

    @include respond(phone-500) {
        width: 25vw;
        height: 7vw;
        font-size: 3vw;
    }

    @include respond(phone-moyen) {
        width: 30vw;
        height: 8vw;
        font-size: 3.5vw;
    }

    @include respond(phone) {
        width: 35vw;
        height: 9vw;
        font-size: 4vw;
    }


}

@keyframes appartionButtonVoirMoins {
    0% {
        opacity: 0;
        transform: translateX(-200%);
    }

    100% {
        opacity: 1;
        transform: translateX(0%);
    }

}
</style>