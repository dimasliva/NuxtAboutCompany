<template>
    <div class="w-full">
        <WidgetNavbar />
        <WidgetSignSidebar/>
        <div :class="[isOpen ? 'blur-md' : '', 'transition-all duration-300']" class="pt-20">
            <slot />
            <WidgetFooter/>
        </div>
    </div>
</template>

<script lang="ts" setup>
const isOpen = useIsOpenNavbar()

</script>
