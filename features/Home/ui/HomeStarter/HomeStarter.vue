<template>
    <div class="flex mt-20 relative">
        <div class="flex-1 flex flex-col gap-32">
            <div class="flex flex-col gap-8">
                <div class="text-7xl">
                    Развитие решений
                    <br />
                    для биологии
                </div>

                <EntityHomeUiHomeStarterChangeText />
            </div>

            <div class="flex items-end gap-4">
                <div >
                    <WidgetButton text="Начать" addClass="rounded-md px-8 py-2 gap-3" icon="mdi-speedometer" icon-size="large" :to="{name: 'docs'}" />
                </div>
                <div class="flex flex-col gap-2">
                    <div class="mt-4 text-gray-600">
                        Напишите нам
                    </div>
                    <div class="text-sky-500 text-xl cursor-pointer">
                        info@siams.ru
                    </div>
                </div>
            </div>

        </div>

        <div class="absolute top-[37%] left-[31%]">
            <v-img :src="lightImg" cover width="420" height="420"></v-img>
        </div>

        <div class="flex-1">
            <video autoplay muted loop class="w-full h-auto">
                <source :src="video" type="video/mp4">
                Ваш браузер не поддерживает видео.
            </video>
        </div>
    </div>
</template>

<script setup lang="ts">
import video from "~/shared/assets/Home/videos/square.mp4";
import lightImg from "~/shared/assets/Home/images/effect-home-hero.png.webp";

</script>

<!-- https://us.forums.blizzard.com/en/blizzard/top -->
