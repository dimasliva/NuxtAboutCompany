<template>
    <header :class="[
        styles.header,
        isOpen ? styles.menuOpened : '',
        isScrollingDown ? styles.slideUp : styles.slideDown
    ]">
        <div :class="[styles.wrapper]" class="max-w-7xl">
            <div :class="[styles.inner]">

                <NuxtLink :class="[styles.logo]" to="/" title="SIAMS">
                    <v-img :src="logo" alt="Логотип"></v-img>

                </NuxtLink>

                <div :class="[styles.menu]">
                    <div :class="[styles.menuTrigger, isOpen ? styles.active : '']" @click="toggleOpenMenu">
                        <div>{{ isOpen ? 'Закрыть' : 'Меню' }}</div>
                        <div :class="[styles.triggerLines]">
                            <i :class="[styles.triggerLine, styles.triggerLineOne]"></i>
                            <i :class="[styles.triggerLine, styles.triggerLineTwo]"></i>
                        </div>
                    </div>

                    <div :class="[styles.header__nav, isOpen ? styles.active : '']">
                        <nav :class="[styles.navMenu]">
                            <div>
                                <ul :class="[styles.headerMenu]">
                                    <li :class="[styles.menuItem]">
                                        <NuxtLink :class="[styles.headerMenuLink]" to="https://siams.com/">
                                            Регистрация
                                        </NuxtLink>
                                    </li>
                                    <li :class="[styles.menuItem]">
                                        <NuxtLink :class="[styles.headerMenuLink]" :to="{name: 'forum'}">
                                            Форум
                                        </NuxtLink>
                                    </li>
                                    <li :class="[styles.menuItem, isOpenDocumentation ? styles.active : '']">
                                        <div :class="[styles.headerMenuLink]">
                                            <span @click="isOpenDocumentation = !isOpenDocumentation">
                                                Документация<sup :class="[styles.submenuCount]">(3)</sup>
                                            </span>
                                        </div>
                                        <ul :class="[styles.subMenu, isOpenDocumentation ? styles.opened : '']">
                                            <li :class="[styles.subMenuItem]">
                                                <NuxtLink :class="[styles.headerMenuLink]" to="https://siams.com/">
                                                    Установка
                                                </NuxtLink>
                                            </li>
                                            <li :class="[styles.subMenuItem]">
                                                <NuxtLink :class="[styles.headerMenuLink]" to="https://siams.com/">
                                                    Модули
                                                </NuxtLink>
                                            </li>
                                            <li :class="[styles.subMenuItem]">
                                                <NuxtLink :class="[styles.headerMenuLink]" to="https://siams.com/">
                                                    Разработка
                                                </NuxtLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li :class="[styles.menuItem]">
                                        <NuxtLink :class="[styles.headerMenuLink]" :to="{ name: 'contact' }">
                                            Контакты
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </div>
                        </nav>

                        <div :class="[styles.menuSocials]">
                            <div class="text-gray-500">Наши сети</div>
                            <div :class="[styles.menuSocials__list]">
                                <NuxtLink :class="[styles.menuSocials__item]" to="https://siams.com/" target="_blank">
                                    <component :is="getIcon(ENavIcon.clutch)" class="w-full h-full min-w-[37px]" />
                                </NuxtLink>
                                <NuxtLink :class="[styles.menuSocials__item]" to="https://siams.com/" target="_blank">
                                    <component :is="getIcon(ENavIcon.dribbble)" class="w-full h-full min-w-[37px]" />
                                </NuxtLink>
                                <NuxtLink :class="[styles.menuSocials__item]" to="https://siams.com/" target="_blank">
                                    <component :is="getIcon(ENavIcon.instagram)" class="w-full h-full min-w-[37px]" />
                                </NuxtLink>
                                <NuxtLink :class="[styles.menuSocials__item]" to="https://siams.com/" target="_blank">
                                    <component :is="getIcon(ENavIcon.linkedin)" class="w-full h-full min-w-[37px]" />
                                </NuxtLink>
                                <NuxtLink :class="[styles.menuSocials__item]" to="https://siams.com/" target="_blank">
                                    <component :is="getIcon(ENavIcon.codepen)" class="w-full h-full min-w-[37px]" />
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script lang="ts" setup>
import logo from "~/shared/assets/Home/images/logo_siams.png"
import styles from "./Navbar.module.scss"
import { ClutchCircleIcon, CodepenCircleIcon, DribbbleCircleIcon, InstagramCircleIcon, LinkedinCircleIcon } from "~/shared/assets/icons";
const { isOpen, isOpenDocumentation, handleScroll, toggleOpenMenu, isScrollingDown } = useNavbar()

const getIcon = (icon: ENavIcon) => {
    switch (icon) {
        case ENavIcon.clutch:
            return ClutchCircleIcon;
        case ENavIcon.dribbble:
            return DribbbleCircleIcon;
        case ENavIcon.instagram:
            return InstagramCircleIcon;
        case ENavIcon.linkedin:
            return LinkedinCircleIcon;
        case ENavIcon.codepen:
            return CodepenCircleIcon;
        default:
            return null;
    }
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});

</script>