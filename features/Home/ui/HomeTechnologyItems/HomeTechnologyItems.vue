<template>
    <div class="flex gap-10 flex-wrap justify-center">
        <EntityHomeUiHomeTechnologyItem v-for="item in items" :key="item.title" :item="item"/>
    </div>
</template>

<script setup lang="ts">
    const {items} = useHomeTechnologyItems()
</script>
