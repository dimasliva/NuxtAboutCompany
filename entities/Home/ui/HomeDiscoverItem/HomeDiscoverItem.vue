<template>
    <NuxtLink :class="[styles.item]" :to="item.link" target="_blank">
        <component :is="getIcon()" class="w-full h-full" :class="[styles.svg]" />
        <v-img :src="item.image" class="object-contain w-full h-full transition-filter duration-300"></v-img>
    </NuxtLink>
</template>


<script setup lang="ts">
import { BallIcon } from "~/shared/assets/icons";
import styles from "./HomeDiscoverItem.module.scss";

defineProps(['item'])
const getIcon = () => {
    switch (true) {
        case true:
            return BallIcon;
        default:
            break;
    }
} 
</script>