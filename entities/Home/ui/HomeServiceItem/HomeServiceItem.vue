<template>
    <v-hover v-slot="{ isHovering, props }" open-delay="200">
        <div v-bind="props" :class="{ [styles.onHover]: isHovering || service.open }"
            class="border px-10 py-5 flex flex-col  w-full cursor-pointer transition-all duration-300"
            @click="onOpenHandler">

            <div class="flex justify-between">
                <span class="text-2xl max-w-[590px] w-full">{{ service.title }}</span>
                <div class="text-xl transition-all duration-300"
                    :class="service.open ? 'text-[#3B82F6]' : ''">
                    <v-icon>{{ service.open ? 'mdi-arrow-up-thin' : 'mdi-arrow-down-thin' }}</v-icon>
                </div>
            </div>

            <transition name="fade">
                <div :class="service.open ? 'h-44 mt-5' : 'h-0'"
                    class="flex flex-col gap-6 overflow-hidden transition-all duration-300 text-gray-400">
                    <p>{{ service.description }}</p>
                    <EntityHomeUiHomeLinkArrow :link="service.link" text="Узнать больше" />
                </div>
            </transition>
        </div>
    </v-hover>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import styles from "./HomeServiceItem.module.scss";

interface IProps {
    service: IHomeTechnology;
    index: number;
}

const { service, index } = defineProps<IProps>();
const emit = defineEmits(['onOpen']);

function onOpenHandler() {
    emit('onOpen', index);
}
</script>

<style scoped></style>
