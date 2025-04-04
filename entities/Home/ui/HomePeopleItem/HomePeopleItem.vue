<template>
    <v-hover v-slot="{ isHovering, props }" open-delay="200">
        <div v-bind="props">
            <NuxtLink v-if="isMore" to="https://siams.com/" target="_blank"
                class="flex justify-center items-center p-0 cursor-pointer"
                :class="[isMore ? styles.teamItem + ' justify-center items-center bg-[#050505]' : styles.teamItem + ' items-end']">
                <EntityHomeUiHomeLinkArrow text="Узнать больше" link="https://siams.com/" />
            </NuxtLink>
            <div v-else
                :class="[isMore ? styles.teamItem + ' justify-center items-center bg-[#050505]' : styles.teamItem + ' items-end']">
                <div class="absolute inset-0 -z-10">
                    <v-img v-if="item && item.image" class="w-full h-full" :src="item.image"></v-img>
                </div>
                <div :class="isHovering ? 'opacity-100' : 'opacity-0'"
                    class="absolute min-w-[75px] left-[2rem] top-[2.5rem] transition-all duration-300 ease-out">
                    <component :is="getIcon()" class="w-full h-full" />
                </div>

                <div class="relative z-10">
                    <div class="font-semibold text-3xl text-white mb-3">{{ item?.name }}</div>
                    <div class="font-medium uppercase break-words text-xl">{{ item?.proffesion }}</div>
                </div>
            </div>
        </div>
    </v-hover>
</template>

<script setup lang="ts">
import styles from "./HomePeopleItem.module.scss";
import { BonjourIcon } from "~/shared/assets/icons";
interface IProps {
    item?: IHomePeople;
    isMore: boolean;
}
defineProps<IProps>()

const getIcon = () => {
    switch (true) {
        case true:
            return BonjourIcon;
        default:
            break;
    }
}
</script>
