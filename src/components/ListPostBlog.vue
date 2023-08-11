<template>
    <div class="cardScrollContainer" ref="cardContainer">
        <div class="contentCardBlog" v-for="(post, key) in Json" :key="key">
            <div class="cardBlog">
                <span class="contentImagePost">
                    <img :src="post.image" :alt="post.altImage">
                </span>
                <span class="contentTextPost">
                    <h2>{{ post.titre }}</h2>
                    <p>{{ post.contenu }}</p>
                    <button @click="handleCardSize" >Voir plus</button>
                </span>
                
            </div>
        </div>
    </div>
</template>
  
<script>
import Json from "../database/blog.json";

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
      if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
        this.$refs.cardContainer.scrollLeft += event.deltaY;
      }
    },
    handleCardSize(event) {

        if (event.target.textContent === "Voir plus" && !document.querySelector(".cardBlogSize")) {
            event.target.textContent = event.target.textContent.replace("Voir plus", "Voir moins");
            event.target.parentNode.parentNode.classList.toggle("cardBlogSize");
        } else if (document.querySelector(".cardBlogSize")) {
            if (event.target.textContent === "Voir moins") {
                event.target.textContent = event.target.textContent.replace("Voir moins", "Voir plus");
                event.target.parentNode.parentNode.classList.toggle("cardBlogSize");
            } else if(event.target.textContent === "Voir plus") {
                document.querySelector(".cardBlogSize").querySelector("button").textContent = document.querySelector(".cardBlogSize").querySelector("button").textContent.replace("Voir moins", "Voir plus");
                event.target.textContent = event.target.textContent.replace("Voir plus", "Voir moins");
                document.querySelector(".cardBlogSize").classList.toggle("cardBlogSize");
                event.target.parentNode.parentNode.classList.toggle("cardBlogSize");
            }
        }

        
        
    },
  },
};





</script>
  
<style lang="css" scoped>
.cardScrollContainer {
    display: flex;
    overflow-x: auto;
    gap: 5vw;
    width: 100%;
    padding: 5vw;

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
    white-space: wrap;
    color: var(--var-color1);
    font-family: "Poppins", cursive;
}

.contentTextPost button {
    width: 5vw;
    height: 2vw;
    font-size: 1rem;
    font-weight: 1000;
    color: var(--var-color4);
    font-family: "Poppins", cursive;
    background-color: var(--var-color1);
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    box-shadow: 4px 4px 0px 0px #185ADB;
}

.contentTextPost button:hover {
    transform: scale(1.1);
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0px 0px #185ADB;
}


.cardBlogSize {
    width: 50vw;
    height: 35vw;
    transition: all 1s ease-in-out;
}

.cardBlogSize p {
    text-overflow: clip;
    overflow: visible;
    -webkit-line-clamp: unset;
}

.cardBlogSize .contentImagePost {
    height: 40%;
}

.cardBlogSize .contentTextPost {
    height: 40%;
}

.cardBlogSize button {
    width: 10vw;
    height: 3vw;
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