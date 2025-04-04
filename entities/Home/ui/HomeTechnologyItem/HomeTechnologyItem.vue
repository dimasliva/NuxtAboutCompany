<template>
    <v-hover v-slot="{ isHovering, props }" open-delay="200">
        <div v-bind="props" :class="isVisible ? `${styles.animated} ${styles.anim}` : ''"
            class="relative z-10 box-border w-68 p-1 rounded-lg aspect-[170/150] transition-opacity duration-150 ease-in-out"
            :style="{ '--delay': `${item.delay}ms` }" ref="logoItem">
            <div class="flex flex-col items-center">
                <div class="">
                    <v-img  :src="item.image" width="100" height="100"></v-img>
                </div>

                <div :class="isHovering ? 'opacity-100 translate-y-0' : 'translate-y-4' "
                    class="text-center opacity-0  transition-all duration-300">
                    {{ item.title }}
                </div>
            </div>
        </div>
    </v-hover>
</template>

<script setup lang="ts">
import styles from "./HomeTechnologyItem.module.scss";
interface IProps {
    item: IHomeTechnologyImage
}
defineProps<IProps>();
const {isVisible, logoItem, onBeforeUnmountHandler, onMountedHandler} =useAnimation()

onMounted(onMountedHandler);
onBeforeUnmount(onBeforeUnmountHandler);
</script>

<style scoped>


</style>
