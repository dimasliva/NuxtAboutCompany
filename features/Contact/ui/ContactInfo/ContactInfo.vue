<template>
    <div class="flex justify-between pt-20 relative w-full">
        <div class="contact-page__info">

            <h1 :class="[
                styles.title,
                styles.anim,
                styles.animTitle,
                isVisible ? styles.animated : ''
            ]" ref="logoItem">
                Контакты
            </h1>
            <h2 :class="[
                styles.contactPage__text,
                styles.text,
                styles.anim,
                isVisible2 ? styles.animated : ''
            ]" class="text-gray-400" ref="logoItem2">
                Давайте поговорим о вашем проекте и о том, как мы можем увеличить доход вашего бизнеса.
            </h2>
            <div class="gap-[50px] pt-[42px] flex flex-wrap justify-start">
                
                <EntityContactUiContactBlock v-for="block in contactBlocks" :key="block.title" :title="block.title"
                    :text-one="block.textOne" :text-two="block.textTwo" />


            </div>

        </div>
    </div>
</template>
<script setup lang="ts">
import styles from "./ContactInfo.module.scss";

const { isVisible, logoItem, isVisible2, logoItem2, onBeforeUnmountHandler, onMountedHandler } = useAnimation();
const { contactBlocks } = useContactInfo()

onMounted(() => {
    onMountedHandler();
});
onBeforeUnmount(onBeforeUnmountHandler);
</script>
