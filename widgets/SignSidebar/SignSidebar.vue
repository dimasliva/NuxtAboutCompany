<template>
    <v-navigation-drawer v-model="isOpenSignSidebar" location="right" width="320" temporary>
        <v-list-item>
            <div class="flex items-center justify-between mt-2 mb-4">
                <span class="text-xl">Войти / Регистрация</span>
                <span @click="closeSidebar">
                    <v-icon
                        class=" cursor-pointer transition-all duration-300 text-gray-500 hover:opacity-100 hover:text-gray-200">mdi-close-circle</v-icon>
                </span>
            </div>
        </v-list-item>

        <v-list density="compact" nav>
            <v-list-item>

                <v-card class="mx-auto">
                    <v-card-text class="bg-surface-light pt-4 rounded-lg">
                        <v-img :src="image" height="110" cover position="0px" class="rounded-lg" />
                        <div class="text-xl mt-2">
                            <span>С бесплатным аккаунтом,</span>
                            <br>
                            <span>вы имеете доступ</span>
                        </div>
                        <div :class="[styles.liElement]" v-for="item in accessItems">
                            <component :is="item.icon" class="w-[11px]" />
                            <p>{{ item.text }}</p>
                        </div>
                    </v-card-text>
                </v-card>
            </v-list-item>
            <v-list-item v-for="(btn, i) in loginBtns" :key="btn.text" :class="i === 0 ? 'mt-3' : ''">
                <v-btn :variant="i === 0 ? 'tonal' : 'outlined'" size="x-large" block @click="openLoginPage(btn.link)"
                    >
                    <div
                    class="flex items-center gap-2"
                    >
                        <span>
                            {{ btn.text }}
                        </span>
                        <v-icon class="ml-auto" size="x-small" icon="mdi-open-in-new"></v-icon>
                    </div>
                </v-btn>
            </v-list-item>
            <v-list-item class="mt-6">
                <div v-for="(btn, i) in bottomBtns">
                    <v-btn class="flex justify-start" :class="i === bottomBtns.length - 1 ? '' : 'border-b-0'"
                        :prepend-icon="btn.icon" variant="outlined" size="large" block
                        @click="() => openPage(btn.link)">
                        {{ btn.text }}
                    </v-btn>
                </div>
            </v-list-item>

        </v-list>
    </v-navigation-drawer>
</template>

<script setup lang="ts">
import styles from './SignSidebar.module.scss'
import image from "~/shared/assets/SignUpSidebar/images/sing_up_sidebar.jpg";

const isOpenSignSidebar = useIsOpenSignSidebar()
const { accessItems, loginBtns, bottomBtns, openLoginPage, openPage, closeSidebar } = useSignSidebar()

watch(isOpenSignSidebar, () => {
    console.log('isOpenSignSidebar', isOpenSignSidebar)
})
</script>