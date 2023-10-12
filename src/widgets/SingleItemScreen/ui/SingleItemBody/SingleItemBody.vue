<template>
    <div class="item-single">
        <div class="item-top">
            <div class="item-image">
                <slot name="image"></slot>
            </div>
            <div class="item-info">
                <div class="item-name">

                    <slot name="aside-name"></slot>
                </div>
                <slot name="aside-details"></slot>
            </div>
        </div>

        <div v-if="$slots.description" class="movie-item-description">
            <slot name="description"></slot>
        </div>
        <slot name="bottom-block"></slot>

    </div>
</template>

<script lang="ts" setup>


</script>

<style lang="scss" scoped>
.movie-item-description {
    margin: 0 0 var(--margin-block);
}
.item-single {
    margin-top: var(--margin-block);

    .movie-item-description{
        margin: 0 0 8rem;
    }

    .item-top {
        justify-content: flex-start;
        align-items: flex-start;
        margin-bottom: var(--margin-block);

        @include md {
            display: flex;
        }

        .item-image {
            position: relative;
            width: 50%;
            max-width: 36rem;
            margin: 0 0 6rem;

            @include md {
                margin: 0 8rem 0 0;
            }

            :deep(img) {
                width: 100%;
                height: auto;
                aspect-ratio: 2/3;
            }
        }

        .item-info {
            flex: 1;

            @include md {
                width: 50%;
            }

            .item-name {
                margin: 0 0 2rem;

                h1 {
                    margin: 0 0 1.5rem;
                    font-size: calc(var(--size-h1) - 6px);
                }

                p {
                    font-weight: 200;
                    margin: 0;
                    opacity: 0.8;
                }
            }
        }
    }

    .count {
        color: var(--color-gray);
        font-weight: 200;
    }

    .items-facts {
        margin: 0 0 var(--margin-block);
    }
}
.item-buttons {
    margin: 3rem 0 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;

    a,
    button {
        display: block;
    }

    li {
        margin: 0 2rem 2rem 0;
        width: auto;

        &:last-child {
            margin-right: 0;
        }
    }
}
</style>