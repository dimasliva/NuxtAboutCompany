<template>
    <div class="w-full">
        <WidgetNavbar />
        <div :class="[isOpen ? 'blur-md' : '', 'transition-all duration-300']">
            <slot />
        </div>
        <WidgetFooter/>
    </div>
</template>

<script lang="ts" setup>
const isOpen = useIsOpenNavbar()

</script>
