<template>
    <NuxtLink :class="[styles.btn, addClass]" :to="to" @click="emit('onClick')">
        <v-icon v-if="icon" :size="iconSize" :icon="icon"></v-icon>
        <span class="text-xl font-medium mb-1">
            {{ text }}
        </span>
    </NuxtLink>
</template>

<script lang="ts" setup>
import type { RouteLocationAsPathGeneric, RouteLocationAsRelativeGeneric, RouteLocationOptions } from "vue-router";
import styles from "./Button.module.scss"
interface IProps {
    text: string;
    addClass?: string;
    to?: string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric | undefined;
    icon?: string;
    iconSize?: string;
}

defineProps<IProps>()
const emit = defineEmits(['onClick'])
</script>