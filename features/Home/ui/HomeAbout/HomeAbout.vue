<template>
    <div class="flex gap-32  relative pt-[15rem]">
        <div class="w-full max-w-[745px]">
            <v-img :src="leftImage"></v-img>
        </div>
        <div class="flex flex-col gap-14">
            <div class="text-5xl">
                О нас.
            </div>
            <div class="text-slate-500 text-xl flex flex-col gap-7">
                <div>
                    Основанное в 1992 году в Екатеринбурге и уже хорошо известны во всех обширных регионах России!
                </div>
                <div>
                    Создаем веб-сайты с нуля, готовые к использованию нашими партнерами, а также
                    предоставляем любые услуги веб-разработки. В компании работают высокообразованные сцепиалисты, которые с 2014 года сопровождали более 
                    <NuxtLink class="text-sky-500">
                        250 клиентов и выполнили более 1000 проектов!
                    </NuxtLink> 
                </div>

            </div>
            <EntityHomeUiHomeLinkArrow link="https://siams.com/#tech" text="О нас"/>

        </div>
    </div>
</template>

<script setup lang="ts">
import leftImage from "~/shared/assets/Home/images/about-home-effect.png.webp";


</script>
<style scoped>

</style>