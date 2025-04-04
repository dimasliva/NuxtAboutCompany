<template>
    <v-hover v-slot="{ isHovering, props }" open-delay="200">
        <div v-bind="props" :class="isVisible ? `${styles.animated} ${styles.anim} ${styles.card}` : styles.card"
            :style="{ '--delay': item.delay + 's' }" ref="logoItem">
            <div :class="[styles.number]">{{ item.number }}</div>
            <div class="overflow-hidden transition-all duration-700">
                <div :class="[styles.text, styles.animated]" class="text-gray-400">{{ item.title }}</div>
            </div>
        </div>
    </v-hover>
</template>

<script setup lang="ts">
import styles from "./HomeNumbersItem.module.scss";
interface IProps {
    item: IHomeNumber;
}
defineProps<IProps>()
const { isVisible, logoItem, onBeforeUnmountHandler, onMountedHandler } = useAnimation()
onMounted(onMountedHandler);
onBeforeUnmount(onBeforeUnmountHandler);
</script>
