<template>
    <div class="flex flex-col gap-10 max-w-[750px] w-full">
        <EntityHomeUiHomeServiceItem
        v-for="(service, index) in services" :key="service.title"
            :service="service" 
            :index="index" 
            @on-open="onOpen" 
        />
    </div>
</template>

<script setup lang="ts">
const { services, onOpen } = useHomeServices()

</script>