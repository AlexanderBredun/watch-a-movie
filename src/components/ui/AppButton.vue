<template>
    <component :is="tag"  class="btn" :class="[variant, pallete]">
        <span :class="{'with-icon': withIcon}"><slot></slot></span>
    </component>
</template>

<script>
    export default {
        name: "AppButton",
        props: {
            tag: {
                type: String,
                default: 'button'
            },
            variant: String,
            pallete: String,
            withIcon: Boolean
        }
    }
</script>

<style scoped lang="scss">
    .btn{
        color: var(--color-black);
        text-decoration: none;
        line-height: 1;
        border-radius: .5rem;
        display: block;
        text-align: center;
        width: fit-content;
        padding: 2rem;
        border: none;
        background: var(--color-blue);
        position: relative;
        overflow: hidden;
        &:hover{
            text-decoration: none;
            color: var(--color-black);
            &:before{
                width: 150%;
                height: 150%;
            }

        }
        &:before{
            content: '';
            display: block;
            position: absolute;
            bottom: -50%;

            left: 50%;
            border-radius: 50%;
            transform: translate3d(-50%, 0, 0);
            background: rgba(255, 255, 255, .4);
            width: 0;
            height: 0;
            transition: .3s;

        }
        &:disabled{
            background: #727C81;
            color: #fff;
            border: 1px solid var(--color-black);
            pointer-events: none;
        }
        span{
            position: relative;
            z-index: 2;
        }
        &.slim{
            padding: 1rem 2rem;
            font-size: calc(var(--size-regular) - 3px);
        }
        &.hollow{
            background: transparent;
            border: 1px solid var(--color-white);
            color: var(--color-white);
            font-size: calc(var(--size-regular) - 3px);
        }
        .with-icon{
            display: flex;
            justify-content: center;
            align-items: center;
            :deep(){
                span{
                    padding: 0 0 0 1rem;
                }
            }

        }
        &.gray{
              background: #727C81;
              color: #fff;
              border: 1px solid var(--color-black)
          }
        &.white{
            background: var(--color-white);
            color: var(--color-black);
            border: none;
            &:before{
                background: rgba(155, 155, 155, .4);
            }
        }
    }
</style>