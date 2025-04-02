<template>
    <div class="flex flex-col pt-[6rem] relative">
        <div :class="[styles.team__title]">
            <EntityHomeUiHomeSectionTitle title="ЛЮДИ ВОПЛОЩАЮЩИЕ ВАШИ <br/> ИДЕИ В ЖИЗНЬ."/>
        </div>
        <div class="mt-[100px]"> <!-- Отступ для прокрутки -->
            <FeatureHomeUiHomePeopleItems/>
        </div>
    </div>
</template>

<script setup lang="ts">
import styles from "./HomePeople.module.scss";

</script>

