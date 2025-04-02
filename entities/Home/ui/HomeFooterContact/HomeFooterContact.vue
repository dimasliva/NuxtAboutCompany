<template>
	<div class="flex flex-col gap-4">
		<div class="uppercase text-gray-500">{{ item.title }}</div>
		<div class="flex gap-2">
			<div class="max-w-[25px] max-h-[25px]">
				<component :is="item.icon" class="w-full h-full" />
			</div>
			<HomeFooterTextHover :text="item.contact" :link="item.link" hover-text="text-white" line-color="bg-white"/>
		</div>
	</div>
</template>

<script setup lang="ts">
import HomeFooterTextHover from '../HomeFooterTextHover/HomeFooterTextHover.vue';

defineProps(['item'])
</script>