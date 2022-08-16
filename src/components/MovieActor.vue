<template>
    <div class="actor-preview">
        <div class="actor-image-holder zoom-img">
            <router-link class="actor-img-link" :to="'/name/' + item.staffId"></router-link>
            <img :src="item.posterUrl" loading="lazy" :alt="item.nameRu">
        </div>

        <h3>
            <router-link :to="'/name/' + item.staffId">
                {{ item.nameRu || item.nameEn }}
            </router-link>

        </h3>
        <p>
            {{ item.description }}
        </p>
    </div>
</template>

<script>
    export default {
        name: "MovieActor",
        props: {
            item:{
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped lang="scss">
    .actor-preview{
        text-align: left;
        pointer-events: none;
        user-select: none;
        a{
            pointer-events: all;
        }

        .actor-image-holder{
            width: 22rem;
            height: 32rem;
            position: relative;
            margin: 0 0 1rem;
            background: var(--color-blue-120);
            .actor-img-link{
                position: absolute;
                display: block;
                width: 100%;
                height: 100%;
                z-index: 2;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;

            }
            img{
                display: block;
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                object-fit: cover;
                width: 100%;
                height: 100%;

            }
        }

        h3{
            margin: 0 0 1rem;
        }
        p{
            color: var(--color-gray);
            margin: 0;
            font-size: var(--size-sm);
        }
    }
</style>