<template>
    <div key="text" class="text-2xl text-gray-600 h-[32px]">
        {{ displayedText }}
    </div>
</template>

<script setup lang="ts">
const { displayedText } = useHomeStarterChangeText()
</script>
