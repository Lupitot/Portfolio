<template>
    <div class="contentTimeline">
        <ul class="timeline">
            <li>
                <h4>2024</h4>
            </li>
            <li>
                <h4>2023</h4>
            </li>
            <li>
                <h4>2022</h4>
            </li>
            <li>
                <h4>2021</h4>
            </li>
        </ul>
    </div>
</template>

<script setup>
</script>

<style lang="scss">

@import "../assets/responsive.scss";



.timeline {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    list-style: none;
    padding-top: 2.5vw;
    gap: 20px;
    transform: translateY(45%);

    @include respond(phone) {
        transform: translateY(14%);
    }
}

.timeline:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 0.7vw;
    background-color: var(--var-color1);

    @include respond(phone) {
        display: none;
    }
    
}

.timeline li {
    position: relative;
    background-color: var(--var-color1);
    border-radius: 0px 5vw;
    color: var(--var-color4);
    width: 25vw;
    height: 17vw;
    /* padding: 20px 40px; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    transform: translateX(70%);
    box-shadow: 0.7vw 0.7vw 0px 0px var(--var-color2);

    @include respond(phone) {
        width: 80vw;
        height: 60vw;
        transform: translateX(0%);
        border-radius: 5vw 5vw;
    }

}

.timeline li:nth-child(odd) {
    transform: translateX(-70%);
    border-radius: 5vw 0px;

    @include respond(phone) {
        transform: translateX(0%);
        border-radius: 5vw 5vw;
    }


}

.timeline li:nth-child(odd)::before {
    transform: translate(-50%, -50%);
    left: 120%;
}

.timeline li::before {
    content: "";
    position: absolute;
    width: 2vw;
    height: 2vw;
    background-color: var(--var-color1);
    top: 0;
	right: 120%;
    border-radius: 50%;
    box-sizing:border-box;
	transform: translate(50%,-50%);

    @include respond(phone) {
        display: none;
    }
}
</style>
