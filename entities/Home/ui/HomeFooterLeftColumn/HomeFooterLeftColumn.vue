<template>
	<div class="flex flex-col gap-16 relative w-[270px]">
		<div class="flex flex-col gap-10">
			<div class="max-w-[149px] max-h-[27px]">
				<v-img :src="image"></v-img>
			</div>
			<div class="flex flex-wrap items-center justify-start gap-[10px]">
				<NuxtLink v-for="icon in icons" :key="icon.link" :to="icon.link"
					class="min-w-[38px] min-h-[38px] cursor-pointer">
					<v-hover v-slot="{ isHovering, props }" open-delay="200">
						<component :style="[styles.item, isHovering ? styles.itemHover : '']" :is="icon.icon"
							class="w-full h-full hover:opacity-80 hover:scale-90 transition-transform duration-200 "
							v-bind="props" />
					</v-hover>
				</NuxtLink>
			</div>
		</div>

		<div class="flex flex-col gap-8">
			<EntityHomeUiHomeFooterContact v-for="contact in contacts" :key="contact.title" :item="contact" />
		</div>
	</div>
</template>

<script setup lang="ts">
import image from "~/shared/assets/Home/images/logo_siams.png"
import styles from "./HomeFooterLeftColumn.module.scss"

const { icons, contacts } = useHomeFooterLeftColumn()
</script>