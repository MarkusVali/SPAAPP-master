<template>
  <div v-if="hasChosen">
    <nav class="bg-green-500">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="flex items-center justify-center sm:items-stretch sm:justify-start">
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">
                <router-link
                  to="/event"
                  class="text-white hover:bg-green-700 hover:text-white rounded-md px-5 py-2 text-sm font-bold"
                  active-class="bg-green-500 text-white"
                  aria-current="page">
                  Kõik sündmused
                </router-link>
                <router-link
                  v-if="!isAthlete"
                  to="/newevent"
                  class="text-white hover:bg-green-700 hover:text-white rounded-md px-5 py-2 text-sm font-bold"
                  active-class="bg-green-500 text-white">
                  Lisa uus sündmus
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">

export default {
  props: {
    isAthlete: Boolean,
    hasChosen: Boolean,
  },
};
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
