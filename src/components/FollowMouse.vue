<template>
    <div class="mouseFollow" :style="{ left: xPos + 'px', top: yPos + 'px' }">

    </div>
</template>

<script>
const mouseFollowComponent = {
    data() {
        return {
            xPos: 0,
            yPos: 0,
        }
    },
    mounted() {
        const body = document.querySelector('body');
        body.addEventListener('mousemove', this.mouseMove);
        console.log('mounted');
    },
    beforeDestroy() {
        const body = document.querySelector('body');
        body.removeEventListener('mousemove', this.mouseMove);
        console.log('destroyed');
    },
    methods: {
        mouseMove(e) {
            this.xPos = e.clientX;
            this.yPos = e.clientY;
        }
    }
}

export { mouseFollowComponent as default };
</script>

<style lang="css">
.mouseFollow {
    position: fixed;
    width: 4vw;
    height: 4vw;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-color: var(--var-color4);
    filter: blur(35px);
    opacity: 0.4;
    z-index: 300;
    pointer-events: none;
}


</style>