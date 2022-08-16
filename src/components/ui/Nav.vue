<template>
    <nav id="nav" >
        <ul class="nav-list">
            <li>
                <router-link to="/movies" class="hov-highlite">
                    Фильмы
                </router-link>
            </li>
            <li>
                <router-link to="/series" class="hov-highlite">
                    Сериалы
                </router-link>
            </li>
            <li>
                <router-link to="/cartoons" class="hov-highlite">
                    Мультфильмы
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>


    export default {
        name: "Nav",

    }
</script>

<style scoped lang="scss">
    #nav{
        margin: 0 2rem;

        @include maxmd{
            position: fixed;
            background: lighten(#1E1E1E, 10%);
            height: 100%;
            width: 100%;
            z-index: 1000;
            max-width: 300px;
            transition: .3s ease-in-out;
            top: 0;
            right: 0;
            margin: 0;
            padding: 120px 20px;
            transform: translate3d(100vw, 0 , 0);
        }
        .nav-list{

            justify-content: space-between;
            align-self: center;
            @include md{
                display: flex;
            }
            li{
                margin: 0 0 40px;
                @include md{
                    margin: 0 6rem 0 0;
                }
                &:last-child{
                    margin: 0;
                }
            }
        }
    }
</style>