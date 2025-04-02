<template>
    <div class="flex flex-wrap justify-center  gap-[6rem] w-full">
        <EntityHomeUiHomePeopleItem v-for="(item) in items" :key="item.name" :item="item" />
        <EntityHomeUiHomePeopleItem :isMore="true" />
    </div>
</template>

<script setup lang="ts">
const { items  } = useHomePeoples()

</script>