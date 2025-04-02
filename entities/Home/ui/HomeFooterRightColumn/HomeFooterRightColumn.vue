<template>
	<div class="flex flex-row gap-16 relative ">
		<div v-for="menu in menus" :key="menu.title" class="min-w-[65px]">
			<div class="text-lg mb-5">{{ menu.title }}</div>
			<div class="flex flex-col gap-2 ">
				<div v-for="link in menu.links" :key="link.title" class="text-gray-500">
					<HomeFooterTextHover :text="link.title" :link="link.link" hover-text="text-white"
						lineColor="bg-sky-500" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import HomeFooterTextHover from "../HomeFooterTextHover/HomeFooterTextHover.vue";
import styles from "./HomeFooterRightColumn.module.scss"

const { menus } = useHomeFooterRightColumn()
</script>