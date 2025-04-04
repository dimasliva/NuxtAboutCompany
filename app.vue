<template>
  <v-app  class="bg-black ">
    <div v-if="loading" class="fixed left-0 top-0 h-0.5 w-full z-50 bg-green-500" />

    <NuxtLoadingIndicator />
    <NuxtPage />
  </v-app>
</template>

<script lang="ts" setup>
  import { de } from 'date-fns/locale';

  const nuxtApp = useNuxtApp();
  const loading = ref(false);
  nuxtApp.hook("page:start", () => {
    loading.value = true;
  });
  nuxtApp.hook("page:finish", () => {
    loading.value = false;
  });



</script>

<style>
@font-face {
    font-family: "Oswald";
    src: url("~/shared/assets/fonts/Oswald.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
}

* {
    font-family: "Oswald", sans-serif;
}

</style>