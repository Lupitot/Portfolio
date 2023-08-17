<template>
  <FollowMouse></FollowMouse>
  <BurgerMenu></BurgerMenu>
  <section class="presentation">
    <span class="PresentationContent">
      <GlowCirclePicture class="glowCircle"></GlowCirclePicture>
      <span class="TextContent">
        <h3 class="PresentationTitle">Paul Piauger</h3>
        <h4 class="PresentationText">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati dicta eos error delectus natus, inventore nisi quam suscipit amet ipsa, dolorem adipisci autem nam eligendi quisquam, repudiandae excepturi beatae illo.
        </h4>
      </span>
    </span>
    <span class="BottomSectionPresentation">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#0A1931" fill-opacity="1"
          d="M0,96L30,117.3C60,139,120,181,180,170.7C240,160,300,96,360,101.3C420,107,480,181,540,218.7C600,256,660,256,720,218.7C780,181,840,107,900,74.7C960,43,1020,53,1080,69.3C1140,85,1200,107,1260,106.7C1320,107,1380,85,1410,74.7L1440,64L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z">
        </path>
      </svg></span>
  </section>
  <section class="Parcours">
    <span class="ContentSectionParcours">
      <h3>Parcours</h3>
      <TimeLine></TimeLine>
    </span>
    <span class="BottomSectionParcours">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#FFC947" fill-opacity="1"
          d="M0,160L34.3,144C68.6,128,137,96,206,117.3C274.3,139,343,213,411,213.3C480,213,549,139,617,144C685.7,149,754,235,823,229.3C891.4,224,960,128,1029,85.3C1097.1,43,1166,53,1234,64C1302.9,75,1371,85,1406,90.7L1440,96L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z">
        </path>
      </svg>
    </span>
  </section>
  <section class="Skills">
    <h3>Compétences</h3>
    <SkillsSelector></SkillsSelector>
  </section>
  <Footer></Footer>
</template>

<script setup>
import BurgerMenu from "@/components/BurgerMenu.vue";
import GlowCirclePicture from "./components/GlowCirclePicture.vue";
import TimeLine from "./components/TimeLine.vue";
import SkillsSelector from "./components/SkillsSelector.vue";
import FollowMouse from "./components/FollowMouse.vue";
import Footer from "./components/Footer.vue";


</script>


<style lang="scss" scoped>

@import "./assets/responsive.scss";



/* style partie presentation */
.presentation {
  height: 100vh;
  width: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @include respond(tab-1000){
    height: 90vh;
  }
  
  @include respond(tab-port){
    height: 75vh;
  }

  @include respond(tab-700) {
    height: 85vh;
  }

  @include respond(phone-big) {
    height: 90vh;
  }

  @include respond(phone-moyen) {
    height: 80vh;
  }

  @include respond(phone) {
    height: 70vh;
  }

}

.PresentationContent {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2vw;
  background-color: var(--var-color1);

  @include respond(tab-700) {
    flex-direction: column;
    justify-content: space-around;
  }


  @include respond(phone-big) {
    flex-direction: column;
    justify-content: space-around;
  }
}

.BottomSectionPresentation {
  position: relative;
  width: 100%;
  height: 0;
}

.PresentationTitle {
  font-size: 5vw;
  color: var(--var-color4);
  font-family: "Lilita One", cursive;
  animation: apparitionTitle 1s ease-in-out; 

  
  @include respond(tab-700) {
    font-size: 6vw;
  }
  
  @include respond(phone-big) {
    font-size: 8vw;
  }

  @include respond(phone-moyen) {
    font-size: 9vw;
  }

  @include respond(phone) {
    font-size: 10vw;
  }


}

.PresentationText {
  font-size: 2vw;
  color: var(--var-color4);
  font-family: "Poppins", cursive;
  width: 75%;
  text-align: justify;
  text-justify: inter-word;
  animation: apparitionText 1s ease-in-out;


  @include respond(tab-700) {
    font-size: 2.5vw;
    width: 80%;
  }


  @include respond(phone-big) {
    font-size: 3vw;
    width: 100%;
  } 

  @include respond(phone-500) {
    font-size: 3.5vw;
  }

  @include respond(phone-moyen) {
    font-size: 4vw;
  }
  
  @include respond(phone) {
    font-size: 4.5vw;
  }

}

.TextContent {
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3vw;

  @include respond(tab-700) {
    width: 80%;
  }

  @include respond(phone-big) {
    width: 70%;
  }
}



.glowCircle {
  animation: apparitionPicture 1s ease-in-out;


  @include respond(tab-700) {
    width: 40vw;
    height: 40vw;
  }
  
  @include respond(phone-big) {
    width: 40vw;
    height: 40vw;
  }

  @include respond(phone-500) {
    width: 55vw;
    height: 55vw;
  }

  @include respond(phone-moyen) {
    width: 55vw;
    height: 55vw;
  }

  @include respond(phone) {
    width: 55vw;
    height: 55vw;
  }


}

@keyframes apparitionText {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }

  100% {
    opacity: 1;
    transform: translateX(0%);
  }
}

@keyframes apparitionTitle{
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }

  100% {
    opacity: 1;
    transform: translateX(0%);
  }
}

@keyframes apparitionPicture {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }

  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}





/* style partie parcours */

.Parcours {
  height: 250vh;
  width: 100%;
  background-color: var(--var-color3);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;


  @include respond(tab-land){
    height: 230vh;
  }

  @include respond(tab-1000){
    height: 190vh;
  }

  @include respond(tab-port){
    height: 150vh;
  }

  @include respond(tab-700) {
    height: 130vh;
  }

  @include respond(phone-big) {
    height: 235vh;
  }

  @include respond(phone-500) {
    height: 200vh;
  }

  @include respond(phone-moyen) {
    height: 160vh;
  }

  @include respond(phone) {
    height: 150vh;
  }
}

.ContentSectionParcours {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.Parcours h3 {
  font-size: 5vw;
  color: var(--var-color1);
  font-family: "Lilita One", cursive;
  transform: translateY(450%);

  @include respond(tab-port) {
    transform: translateY(550%);
  }

  
}


.BottomSectionParcours {
  position: relative;
  bottom: 0;
  width: 100%;
  height: 0;
}

/* style partie skills */

.Skills {
  height: 215vh;
  width: 100%;
  background-color: var(--var-color1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5vw;


  @include respond(tab-land){
    height: 180vh;
  }

  @include respond(tab-port){
    height: 150vh;
  }

  @include respond(tab-700) {
    height: 130vh;
  }

  @include respond(phone-big) {
    height: 200vh;
  }

  @include respond(phone-500) {
    height: 175vh;
  }

  @include respond(phone-moyen) {
    height: 150vh;
  }


  @include respond(phone) {
    height: 122vh;
    gap: 10vw;
  }
}

.Skills h3 {
  font-size: 5vw;
  color: var(--var-color4);
  font-family: "Lilita One", cursive;

  @include respond(tab-land) {
    transform: translateY(50%);
  }

  @include respond(phone-500){
    transform: translateY(0%);
  }
}
</style>
