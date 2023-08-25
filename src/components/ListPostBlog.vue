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
        stopScrollHorizontal() {
            const container = document.querySelector(".cardScrollContainer");

            const preventScroll = (e) => {
                e.preventDefault();
            };

            container.addEventListener("wheel", preventScroll);

            setTimeout(() => {
                container.removeEventListener("wheel", preventScroll);
            }, 1800);

        },
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
                this.stopScrollHorizontal();
                if (window.innerWidth > 1200) {
                    document.querySelector(".contentBlog").style = "height: auto;";
                }
                event.target.textContent = event.target.textContent.replace("Voir plus", "Voir moins");
                event.target.parentNode.parentNode.classList.toggle("cardBlogSize");
                if (window.innerWidth > 1200) {
                    setTimeout(() => {
                        var card = this.$refs.cardContainer.querySelector(".cardBlogSize");
                        card.scrollIntoView({
                            behavior: 'smooth',
                            block: 'center',
                            inline: 'center'
                        });
                    }, 900);
                }
            } else if (document.querySelector(".cardBlogSize")) {
                if (window.innerWidth > 1200) {
                    document.querySelector(".contentBlog").style = "height: 90vh;";
                }
                if (event.target.textContent === "Voir moins") {
                    event.target.textContent = event.target.textContent.replace("Voir moins", "Voir plus");
                    event.target.parentNode.parentNode.classList.toggle("cardBlogSize");
                } else if (event.target.textContent === "Voir plus") {
                    this.stopScrollHorizontal();
                    if (window.innerWidth > 1200) {
                        document.querySelector(".contentBlog").style = "height: auto;";
                    }
                    document.querySelector(".cardBlogSize").querySelector("button").textContent = document.querySelector(".cardBlogSize").querySelector("button").textContent.replace("Voir moins", "Voir plus");
                    event.target.textContent = event.target.textContent.replace("Voir plus", "Voir moins");
                    document.querySelector(".cardBlogSize").classList.toggle("cardBlogSize");
                    event.target.parentNode.parentNode.classList.toggle("cardBlogSize");
                    if (window.innerWidth > 1200) {
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
    animation: containerApparition 1s ease-in;

    @include respond(tab-land) {
        animation: none;
        flex-direction: column;
        align-items: center;
        height: 70vh;
        transform: translateY(-5%);
    }

    @include respond(tab-1000) {
        height: 75vh;
    }

    @include respond(tab-700) {
        transform: translateY(0%);
        height: 70vh;
    }

}

@keyframes containerApparition {
    0% {
        transform: translateX(100%);
    }

    100% {
        transform: translateX(0%);
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
    gap: 1rem;

    @include respond(desktop-1550) {
        width: 30vw;
        height: 65vh;
    }

    @include respond(desktop-1496) {
        width: 35vw;
        // height: 32vw;
    }

    @include respond(desktop-1350) {
        width: 35vw;
        // height: 40vw;
    }

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
        width: auto;
        height: auto;
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
    gap: 1rem;
    padding: 1rem;
    width: 90%;
    height: 50%;


}

.contentTextPost h2 {
    height: auto;
    font-size: 2rem;
    font-weight: 500;
    color: var(--var-color1);
    font-family: "Lilita One", cursive;
    text-align: center;
}

.contentTextPost p {
    width: 100%;
    height: auto;
    font-size: 1rem;
    font-weight: 800;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre-line;
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

    @include respond(desktop-1550) {
        width: 8vw;
        height: 2.5vw;
        font-size: 1.2vw;
    }

    @include respond(desktop-1350) {
        width: 9vw;
        height: 3vw;
        font-size: 1.4vw;
    }

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
        height: auto;
    }

}

.cardBlogSize p {
    text-overflow: clip;
    overflow: visible;
    -webkit-line-clamp: unset;
    height: auto;

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