<template>
    <div :class="[styles.content]" ref="contentRef">
        <div class="block overflow-hidden">
            <div :class="[styles.list]" :style="{ marginLeft: marginLeft + '%' }">
                <EntityHomeUiHomeDiscoverItem v-for="(item) in rows_one" :key="item.image" :item="item" />
            </div>
            <div :class="[styles.list, styles.list_even]" :style="{ marginLeft: marginRight + '%' }">
                <EntityHomeUiHomeDiscoverItem v-for="(item) in rows_two" :key="item.image" :item="item" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import styles from "./HomeDiscoverItems.module.scss"
const { rows_one, rows_two, marginLeft, marginRight, contentRef, handleScroll } = useHomeDiscover()

onBeforeMount(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})


</script>
