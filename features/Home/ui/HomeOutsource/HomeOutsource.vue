<template>
    <div class="flex flex-col pt-[0rem] relative">
        <v-img class="absolute left-[10%] top-[3rem]" :src="image" width="210" height="210"></v-img>
        <EntityHomeUiHomeSectionTitle  title="Разработка"/>
        <FeatureHomeUiHomeOutsourceItems/>
    </div>
</template>

<script setup lang="ts">
import image from "~/shared/assets/Home/images/offers-plx.png.webp";


</script>
<style scoped>

</style>