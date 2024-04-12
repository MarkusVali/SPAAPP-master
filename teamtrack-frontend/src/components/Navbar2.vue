<template>
    <div class="topnav">
        <ul>
            <li>
                <router-link
                      to="/"
                      aria-current="page">
                      Avaleht
                </router-link>
            </li>
            <li>
                <router-link
                      v-if="!isAthlete"
                      to="/newevent">
                      Lisa uus sündmus
                </router-link>
            </li>
            <li>
                <router-link
                    to="/peopleList"
                    aria-current="page">
                    Inimeste list
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    export default {
        props: {
            isAthlete: Boolean,
        },
    };
</script>

<style>
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #111;
    }

    li {
        float: left;
    }

    li a 
    {
        display: block;
        color: #d2d2d2;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }

    li a:hover {
        background-color: #000;
    }
</style>