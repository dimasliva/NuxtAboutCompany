<template>
    <div class="flex flex-col" @mousemove="updatePosition">
        <h2 :class="[isVisible ? styles.animated : '',
        styles.anim, styles.title, styles.animTitle]" ref="logoItem">
            Давай начнём
            <br>
            создавать
            <br>
            вместе.
        </h2>
        <div :class="[isVisible2 ? styles.animated : '',
        styles.anim, styles.phrase]" ref="logoItem2">
            <p class="flex items-center">
                <span class="text-gray-500 text-xl">По всем вопросам</span>
            <div ref="paragraphElement" class="w-[150px]">
                <span ref="linkElement">
                    <NuxtLink to="https://siams.com/" target="_blank" :class="[styles.descriptionLink]"
                        :style="linkStyle">
                        <span class="text-3xl">ПИШИТЕ</span>
                    </NuxtLink>
                </span>
            </div>
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import styles from "./HomeContactUsText.module.scss";

const { linkStyle, linkElement, paragraphElement, updatePosition } = useHomeContactUsText()
const { isVisible, logoItem, isVisible2, logoItem2, onBeforeUnmountHandler, onMountedHandler } = useAnimation();

onMounted(() => {
    onMountedHandler();
});
onBeforeUnmount(onBeforeUnmountHandler);
</script>
