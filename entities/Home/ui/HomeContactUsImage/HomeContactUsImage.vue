<template>
    <div class="relative">
        <v-img :src="image" class="min-w-[510px] max-w-[510px] w-full"
        :lazy-src="image"
        ></v-img>
        <div class="inline-block w-full h-full absolute top-[19%] left-[-24%] pointer-events-none">
            <div class="w-[510px] h-[400px]">
                <component :is="getIcon()" class="w-full h-full" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { LightIcon } from "~/shared/assets/icons";
import image from "~/shared/assets/Home/images/contact-us-2.png.webp"

const getIcon = () => {
    switch (true) {
        case true:
            return LightIcon;
        default:
            return null;
    }
}

</script>