<template>
    <div class="lds-facebook" :style="{ width: `${size}px`, height: `${size}px` }">
        <div v-for="i in 3" :key="`lds-facebook-${i}`" v-bind:style="[spinnerStyle, divsStyles[i - 1]]" />
    </div>
</template>

<script>

    export default {
        name: 'Loader',
        props: {

            size: {
                type: Number,
                default: 80,
            },
            color: {
                type: String,
                default: '#7f58af',
            },
            duration: {
                type: String,
                default: '1.2s',

            },
        },
        data() {
            return {
                spinnerStyle: {
                    background: this.color,
                    animationDuration: this.duration,
                },
            }
        },
        computed: {
            divsStyles() {
                const divsStyles = []
                for (let i = 3; i > 0; i--) {
                    divsStyles.push(this.calcPropertyValue('animationDelay', this.duration, -0.1 * i))
                }
                return divsStyles
            },

        },
        methods: {
            calcPropertyValue(duration){
                const re = new RegExp(/^\d*\.?\d+(s|ms)$/)
                return re.test(duration)
            }
        }
    }
</script>

<style scoped>
    .lds-facebook {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }
    .lds-facebook div {
        width: 20%;
        background: #fff;
        animation-name: lds-facebook;
        animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
        animation-iteration-count: infinite;
    }
    .lds-facebook div + div {
        margin-left: 10%;
    }
    @keyframes lds-facebook {
        0% {
            height: 80%;
        }
        50%,
        100% {
            height: 40%;
        }
    }
</style>