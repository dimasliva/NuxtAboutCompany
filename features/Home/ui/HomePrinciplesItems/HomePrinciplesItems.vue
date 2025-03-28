<template>
    <div class="flex flex-wrap gap-8 w-full">
        <EntityHomeUiHomePrincipleItem v-for="(item) in items" :key="item.title" :item="item"
              />
    </div>
</template>

<script setup lang="ts">
const { items  } = useHomePrinciples()

</script>