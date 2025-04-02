<template>
<div class="flex flex-col gap-10 max-w-[calc(33.3%-22px)] w-full py-[50px] px-10 relative leading-[1.75] border border-transparent" :class=[styles.card]>
        <div class="text-2xl font-bold">{{ item.title }}</div>
        <div class="text-lg text-slate-500">{{ item.description }}</div>
    </div>

</template>

<script setup lang="ts">
import styles from "./HomeOutsourceItem.module.scss"
const { item } = defineProps(['item']);

</script>

<style scoped></style>
