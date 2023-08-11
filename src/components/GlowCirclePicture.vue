<template>
    <div class="box">
        <img src="../assets/images/ProfilePaul.jpg" alt="">
    </div>
</template>
  
<script setup>


</script>
  
  
<style lang="css">

@property --angle {
    syntax: "<angle>";
    initial-value: 45deg;
    inherits: false;
}

.box {
    width: 30vw;
    height: 30vw;
    position: relative;
    padding: 3px;
    z-index: 1;
    border-radius: 50%;
}

.box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
}

.box::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 106%;
    height: 106%;
    background: linear-gradient(var(--angle), #185ADB, #618FEC, #144AB5);
    z-index: -1;
    animation: spin 2s cubic-bezier(.28, .26, .33, .5) infinite;
    border-radius: 50%;
}

.box::after {
    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    height: 107%;
    width: 107%;
    border-radius: 50%;
    filter: blur(20px);
    opacity: 0.8;
    background: linear-gradient(var(--angle), #185ADB, #618FEC, #144AB5);
    animation: spin 2s cubic-bezier(.28, .26, .33, .5) infinite;
}

.box:hover::before, .box:hover::after {
    background: linear-gradient(var(--angle), #F58F38, #FFE497, #FFC947);
}

@keyframes spin {
    0% {
        --angle: 0deg;
    }

    100% {
        --angle: 360deg;
    }
}

</style>
  