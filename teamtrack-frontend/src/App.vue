<template>

    <div v-if="route.name !== 'Avaleht'">
        <Navbar2 />
    </div>
    <router-view />
</template>

<script setup lang="ts">
    import {defineProps} from "vue";
    defineProps<{ isAthlete: Boolean, hasChosen: Boolean }>();

    import Navbar2 from "@/components/Navbar2.vue";

    import { useRoute } from "vue-router";

    const route = useRoute();
    route.name
</script>


