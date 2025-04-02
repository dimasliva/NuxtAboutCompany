<template>
    <div class="text-5xl text-center mb-10 leading-[60px]" v-html="formattedTitle"></div>
</template>

<script setup lang="ts">
    const {title} = defineProps(["title"])
    const formattedTitle = title.replace(/<br\s*\/?>/gi, '<br/>');
</script>