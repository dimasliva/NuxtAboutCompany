<template>
    <NuxtLink target="_blank" :to="link" class="relative cursor-pointer overflow-hidden flex items-start gap-2 text-xl" @mouseover="animateIcon" @mouseleave="resetIcon">
        <span class="text-base mt-1">
            {{text}}
        </span>
        <div>
            <v-icon :class="iconClass + ' text-sky-500'">mdi-arrow-top-right-thin</v-icon>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">

    const {animateIcon, iconClass, resetIcon} = useHomeLinkArrow()
    defineProps(["text", "link"])
</script>