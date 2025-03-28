<template>
    <v-hover v-slot="{ isHovering, props }" open-delay="200">
        <div class="border p-10 " :class="styles.item" v-bind="props">
            <div class="flex gap-5">
                <div class="flex flex-col gap-6 w-[calc(100%-120px)]">
                    <h3 class="text-2xl">
                        <span :class="isHovering ? `${styles.hover} ${styles.animationWrappWave}` : styles.animationWrappWave ">
                            <span :class="isHovering ? styles.waveItem : ''" v-for="(char, index) in titleCharacters" :key="index" :style="{ '--index': index }">
                                {{ char }}
                            </span>
                        </span>
                    </h3>
                    <div class="text-base text-gray-500">{{ item.description }}</div>
                </div>
                <div :class="[iconClass, styles.icon] "></div>

            </div>
        </div>
    </v-hover>
</template>

<script setup lang="ts">
    import styles from "./HomePrincipleItem.module.scss";
    const {item} =defineProps(['item']);
    const {iconClass, titleCharacters} = useHomePrincipleItem(item)


</script>

<style scoped>


</style>
