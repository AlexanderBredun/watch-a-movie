<template>
    <header id="header" ref="headerRef"
            :class="{ 'opened-menu': data.activeMenu, 'scroll-header': data.activeHeader && ($route.name !== 'Watch'), 'no-fixed': $route.name === 'Watch' }">
        <div class="wrapper">
            <strong class="logo">
                <router-link to="/">
                    <svg viewBox="0 0 313 83" version="1.1" id="svg_null" data-v-61dd7a3d="">
                        <g id="root" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" data-v-61dd7a3d="">
                            <g id="Group-2" transform="translate(0.000000, 15.000000)" data-v-61dd7a3d="">
                                <rect id="Rectangle-38" x="0" y="0" width="166" height="50" data-v-61dd7a3d=""></rect><text
                                      id="headerWord_1" font-family="Exo 2" font-size="19.268485282238323" font-weight="700"
                                      line-spacing="50" letter-spacing="1.1561091169342994" fill="#FFF"
                                      data-text-alignment="R" font-style="normal" data-v-61dd7a3d="">
                                    <tspan x="-1.00518798828125" y="31.5" data-v-61dd7a3d="">Watch-a-movie</tspan>
                                </text>
                            </g>
                            <g id="Group" transform="translate(294.000000, 225.000000)" data-v-61dd7a3d="">
                                <rect id="Rectangle-38" x="0" y="0" width="166" height="50" data-v-61dd7a3d=""></rect><text
                                      id="headerWord_2" font-family="Cousine" font-size="50" font-weight="700"
                                      line-spacing="50" letter-spacing="3" fill="#FFF" display="none"
                                      data-text-alignment="L" font-style="normal" data-v-61dd7a3d="">
                                    <tspan x="3" y="46" data-v-61dd7a3d="">L</tspan>
                                </text>
                            </g>
                            <rect id="icon.accent" x="210" y="210" width="80" height="80" display="none" fill="#69e9f5"
                                  data-v-61dd7a3d=""></rect><svg xmlns="http://www.w3.org/2000/svg"
                                 xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1" fill="#69e9f5"
                                 id="svg_icon.accent" x="180" y="0" width="80" height="80" data-v-61dd7a3d="">
                                <g id="surface1" data-v-61dd7a3d="">
                                    <path d="M 9 5 L 9 27 L 11 27 L 11 5 Z M 21 5 L 21 27 L 23 27 L 23 5 Z M 5 11 L 5 21 L 7 21 L 7 11 Z M 17 11 L 17 21 L 19 21 L 19 11 Z M 25 11 L 25 21 L 27 21 L 27 11 Z M 1 14 L 1 18 L 3 18 L 3 14 Z M 13 14 L 13 18 L 15 18 L 15 14 Z M 29 14 L 29 18 L 31 18 L 31 14 Z "
                                          data-v-61dd7a3d=""></path>
                                </g>
                            </svg>
                        </g>
                    </svg>
                </router-link>
            </strong>
            <div class="header-middle" v-clck-outside="onClickOutside">
                <NavApp />
            </div>

            <div class="header-aside-block">
                <ul class="header-aside-list">
                    <li>
                        <router-link to="/lists">
                            <i class="fas fa-star"></i>
                        </router-link>
                    </li>
                    <li>
                        <SearchBlock />
                    </li>
                </ul>

                <button class="burger " @click.prevent='data.activeMenu = !data.activeMenu'></button>
            </div>

        </div>

    </header>
</template>

<script lang="ts" setup>
// @ts-ignore
import vClickOutside from 'click-outside-vue3';
import { onMounted, reactive, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { NavApp } from '@/widgets/NavApp';
// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { SearchBlock } from '@/widgets/SearchBlock';

const vClckOutside = vClickOutside.directive;

interface HeaderAppData {
    activeMenu: boolean,
    activeHeader: boolean
}

const data = reactive<HeaderAppData>({
    activeMenu: false,
    activeHeader: false
});
const route = useRoute();
const headerRef = ref<null | HTMLElement>(null);

onMounted(() => {
    window.addEventListener('scroll', scrollHandler);
    scrollHandler();
});

watch(() => route, () => {
    data.activeMenu = false;
});

function onClickOutside(e: Event) {
    e.stopPropagation();
    if (!(e.target as HTMLElement).classList.contains('burger')) {
        data.activeMenu = false;
    }
}

function scrollHandler(): void {

    const header = headerRef.value;
    if (window.scrollY > 0) {
        data.activeHeader = true;
        header!.classList.add('scroll-header');
    } else {
        data.activeHeader = false;
        header!.classList.remove('scroll-header');
    }
}

</script>

<style scoped lang="scss">
#header {
    padding: 2rem 0;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10000;
    transition: .3s;

    &.no-fixed {
        position: unset;
    }

    &.scroll-header {
        background: #333333;
        padding: 1rem 0;

        .wrapper .logo {
            svg {
                width: 175px;
                height: 50px;
            }
        }

        :deep(.search-btn) {
            i {
                font-size: 1.7rem;
            }

            &:hover {
                .circle {
                    width: 5rem;
                    height: 5rem;
                }
            }

        }
    }

    &.opened-menu {
        .burger {
            &:after {
                transform: rotate(45deg);
            }

            &:before {
                transform: rotate(135deg);
                margin-bottom: -2px !important;
            }
        }

        .wrapper #nav {

            transform: translate3d(0vw, 0, 0);
        }
    }

    .wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .burger {
            margin: 0 0 0 40px;
            position: relative;
            z-index: 1001;
            background: none;
            border: none;
            width: 32px;
            height: 32px;
            padding: 0;
            cursor: pointer;


            @include md {
                display: none;
            }

            &::before,
            &:after {
                display: block;
                content: '';
                width: 32px;
                height: 3px;
                background: #fff;
                transition: all 0.3s ease;
            }

            &::before {
                margin: 0 0 10px;
            }
        }

        .logo {

            svg {
                transition: .3s;
                display: block;
                width: 200px;
                height: 60px;

                @include lg {
                    width: 313px;
                    height: 83px;
                }
            }
        }

        .header-aside-block {
            display: flex;
            justify-content: flex-start;
            align-items: center;

            .header-aside-list {
                display: flex;
                justify-content: flex-start;
                align-items: center;

                li {
                    margin: 0 2rem 0 0;

                    &:last-child {
                        margin: 0;
                    }

                    button {

                        position: relative;

                        i {
                            transition: .3s;

                        }

                        &:hover {
                            i {
                                color: var(--color-black);
                            }

                            .circle {
                                width: 10rem;
                                height: 10rem;
                            }
                        }

                        .circle {
                            position: absolute;
                            border-radius: 50%;
                            z-index: -1;
                            background: rgba(255, 255, 255, .5);
                            width: 0;
                            height: 0;
                            transition: .3s ease-out;
                            top: 50%;
                            left: 50%;
                            transform: translate3d(-50%, -50%, 0);
                        }
                    }
                }
            }

        }
    }
}
</style>