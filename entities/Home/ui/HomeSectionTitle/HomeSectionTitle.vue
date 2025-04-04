<template>
    <div class="text-5xl text-center mb-10 leading-[60px]" v-html="formattedTitle"></div>
</template>

<script setup lang="ts">
interface IProps {
    title: string;
}
const { title } = defineProps<IProps>()
const formattedTitle = title.replace(/<br\s*\/?>/gi, '<br/>');
</script>