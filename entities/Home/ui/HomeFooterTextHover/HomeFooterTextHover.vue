<template>
	<v-hover v-slot="{ isHovering, props }" open-delay="0">
		<NuxtLink :to="link" target="_blank" v-bind="props">
			<div class="relative cursor-pointer group">
				<div class="transition-all duration-300 " :class="[isHovering? hoverText : '']">{{ text }}</div>
				<div class="absolute left-0 bottom-0 h-[1px] w-full transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left"
					:class="lineColor">
				</div>
			</div>
		</NuxtLink>
	</v-hover>
</template>

<script setup lang="ts">
interface IProps {
	text: string;
	link: string;
	lineColor: string;
	hoverText: string;
}
defineProps<IProps>()
</script>