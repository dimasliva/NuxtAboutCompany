<template>
    <WidgetPageUiPage>
        <div class="relative">
            <div class="flex flex-col items-center max-w-7xl px-[2.4rem] pb-40 gap-20 mx-auto">
                <FeatureContactUiContactInfo />
                <FeatureContactUiContactForm />

            </div>
            <div >
                <div class="absolute left-0 bottom-0 w-full h-[600px]">
                    <v-img :class="[styles.contactPage]" :src="image" cover></v-img>
                </div>
            </div>
        </div>
    </WidgetPageUiPage>
</template>

<script lang="ts" setup>
import image from "~/shared/assets/Contact/images/map-mob.png.webp"
import styles from "./ContactPage.module.scss"

</script>