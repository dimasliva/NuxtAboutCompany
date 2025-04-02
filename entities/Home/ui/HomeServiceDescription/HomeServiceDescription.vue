<template>
    <div class="flex flex-col gap-16 max-w-[505px] w-full">
        <div class="flex flex-col gap-6 ">
            <div class="text-5xl">
                Наш сервис
            </div>
            <div class="text-slate-500 text-xl flex flex-col gap-7">
                <div>
                    Инструменты на основе машинного обучения помогают в решении широкого спектра задач анализа
                    изображений,
                    среди которых поиск сложных объектов и выделение контуров объектов. В линейке продуктов SIAMS эти
                    задачи
                    решает обучаемая система искусственного интеллекта SIAMS AIM.
                </div>
            </div>
        </div>


        <div class="flex flex-col gap-2">
            <div class="max-w-[110px] max-h-[30px]">
                <component :is="getIcon(EOurServiceIcon.clutch)" class="w-full h-full" />
            </div>
            <div class="flex items-center gap-2 ">
                <span class="text-[#06ffff] font-semibold">4.9</span>
                <component :is="getIcon(EOurServiceIcon.stars)" class="w-full h-full max-w-[75px] max-h-[15px]" />
            </div>
        </div>


    </div>
</template>

<script setup lang="ts">
import { BlueFiveStarsIcon, ClutchTextIcon } from '~/shared/assets/icons';

const getIcon = (icon: EOurServiceIcon) => {
    switch (icon) {
        case EOurServiceIcon.clutch:
            return ClutchTextIcon
        case EOurServiceIcon.stars:
            return BlueFiveStarsIcon
        default:
            return null;
    }
}
</script>
