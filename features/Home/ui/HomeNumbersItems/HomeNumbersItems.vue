<template>
    <div class="flex flex-wrap justify-center  gap-6 w-full">
        <EntityHomeUiHomeNumbersItem v-for="(item) in items" :key="item.number" :item="item" />
    </div>
</template>

<script setup lang="ts">
const { items  } = useHomeNumbers()

</script>

