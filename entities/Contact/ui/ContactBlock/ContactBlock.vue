<template>
    <div 
    :class="[styles.anim, isVisible ? styles.animated : '']" 
    style="--delay: 0.2s; --duration: 2s" ref="logoItem">
        <div :class="[styles.contactItem__title]">{{ title }}</div>
        <div :class="[styles.contactItem]">{{ textOne }}</div>
        <div :class="[styles.contactItem]">{{ textTwo }}</div>
    </div>
</template>
<script lang="ts" setup>
import styles from "./ContactBlock.module.scss"
interface IProps {
    title: string;
    textOne: string;
    textTwo: string;
}
defineProps<IProps>()
const { isVisible, logoItem, onBeforeUnmountHandler, onMountedHandler } = useAnimation()

onMounted(onMountedHandler);
onBeforeUnmount(onBeforeUnmountHandler);
</script>