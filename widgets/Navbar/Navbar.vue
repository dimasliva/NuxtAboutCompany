<template>
    <div class="flex justify-between items-center w-full pt-4">
        <!-- Логотип -->
        <div class="flex items-center">
            <img :src="logo" alt="Логотип" class="h-8 mr-2" />
            <span class="text-xl font-bold">SIAMS</span>
        </div>

        <div @click="toggleMenu" class="border rounded-lg p-2 cursor-pointer d-flex ga-4 px-4">
            <span >Меню</span>
            <v-icon>mdi-menu</v-icon>
        </div>

    </div>

</template>

<script lang="ts" setup>
import logo from "~/shared/assets/Home/images/logo.png"
const drawer = ref(false)

const menuItems = reactive([
    { title: 'Главная' },
    { title: 'О нас' },
    { title: 'Контакты' },
])
const toggleMenu = () => {
    drawer.value = !drawer.value
}
</script>