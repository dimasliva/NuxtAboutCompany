<template>
    <v-hover v-slot="{ isHovering, props }" open-delay="200">
        <div class="border p-10 px-2" :class="styles.item" v-bind="props">
            <div class="flex justify-center gap-5">
                <div class="flex flex-col gap-6 w-[calc(100%-120px)]">
                    <h3 class="text-2xl">
                        <span
                            :class="isHovering ? `${styles.hover} ${styles.animationWrappWave}` : styles.animationWrappWave">
                            <span :class="isHovering ? styles.waveItem : ''" v-for="(char, index) in titleCharacters"
                                :key="index" :style="{ '--index': index }">
                                {{ char }}
                            </span>
                        </span>
                    </h3>
                    <div class="text-base text-gray-500">{{ item.description }}</div>
                </div>
                <div class="min-w-[60px] max-h-[60px] relative flex items-start">

                    <div :class="[ isHovering ? 'opacity-0' : 'opacity-100']"
                        class="transition-all duration-700 absolute inset-0">
                        <component :is="getIcon()" class="w-full h-full" :class="isFirstCircleIcon() ? 'rotate-180' : ''"/>
                    </div>
                    <div :class="[ isHovering ? 'opacity-100' : 'opacity-0']"
                        class="transition-all duration-700 absolute inset-0">
                        <component :is="getHoverIcon()" class="w-full h-full" :class="isFirstCircleIcon() ? 'rotate-180' : ''" />
                    </div>
                </div>

            </div>
        </div>
    </v-hover>
</template>

<script setup lang="ts">
import styles from "./HomePrincipleItem.module.scss";
import { CircleInSquareHoverIcon, CircleInSquareIcon, CircleWithinCircleHoverIcon, CircleWithinCircleIcon, SquareInCircleHoverIcon, SquareInCircleIcon, TriangleInCircleHoverIcon, TriangleInCircleIcon } from "~/shared/assets/icons";

interface IProps {
    item: IHomePrinciple;
}

const { item } = defineProps<IProps>();
const { titleCharacters, isFirstCircleIcon } = useHomePrincipleItem(item);


// CircleWithinCircleIcon
const getIcon = () => {
    switch (item.icon) {
        case EPrincipleIcon.circle:
            return TriangleInCircleIcon;
        case EPrincipleIcon.triangle:
            return TriangleInCircleIcon;
        case EPrincipleIcon.bigSquare:
            return CircleInSquareIcon;
        case EPrincipleIcon.smSquare:
            return SquareInCircleIcon;
        default:
            return null;
    }
}
// CircleWithinCircleHoverIcon
const getHoverIcon = () => {
    switch (item.icon) {
        case EPrincipleIcon.circle:
            return TriangleInCircleHoverIcon;
        case EPrincipleIcon.triangle:
            return TriangleInCircleHoverIcon;
        case EPrincipleIcon.bigSquare:
            return CircleInSquareHoverIcon;
        case EPrincipleIcon.smSquare:
            return SquareInCircleHoverIcon;
        default:
            return null;
    }
}
</script>

<style scoped></style>
