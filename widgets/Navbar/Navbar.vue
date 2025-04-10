<template>
    <div>
        <header :class="[
            styles.header,
            isOpen ? styles.menuOpened : '',
            isScrollingDown ? styles.slideUp : styles.slideDown
        ]">
            <div :class="[styles.wrapper]" class="max-w-7xl">
                <div :class="[styles.inner, isWideScreen ? 'justify-between' : '']">

                    <NuxtLink :class="[styles.logo]" to="/" title="SIAMS">
                        <v-img :src="logo" alt="Логотип"></v-img>
                    </NuxtLink>

                    <div v-if="isWideScreen" :class="[styles.menu]">
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
                                            <NuxtLink :class="[styles.headerMenuLink]" @click="toggleSignSidebar">
                                                {{ navbarText.register.text }}
                                            </NuxtLink>
                                        </li>
                                        <li :class="[styles.menuItem]">
                                            <NuxtLink :class="[styles.headerMenuLink]"
                                                :to="{ name: navbarText.forum.link }">
                                                {{ navbarText.forum.text }}
                                            </NuxtLink>
                                        </li>
                                        <li :class="[styles.menuItem, isOpenDocumentation ? styles.active : '']">
                                            <div :class="[styles.headerMenuLink]">
                                                <span @click="isOpenDocumentation = !isOpenDocumentation">
                                                    {{ navbarText.doc.text }}
                                                    <sup :class="[styles.submenuCount]">(3)</sup>
                                                </span>
                                            </div>
                                            <ul :class="[styles.subMenu, isOpenDocumentation ? styles.opened : '']">
                                                <li :class="[styles.subMenuItem]"
                                                    v-for="doc in navbarText.doc.dropdown">
                                                    <NuxtLink :class="[styles.headerMenuLink]" :to="{ name: doc.link }">
                                                        {{ doc.text }}
                                                    </NuxtLink>
                                                </li>

                                            </ul>
                                        </li>
                                        <li :class="[styles.menuItem]">
                                            <NuxtLink :class="[styles.headerMenuLink]"
                                                :to="{ name: navbarText.contact.link }">
                                                {{ navbarText.contact.text }}
                                            </NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                            </nav>

                            <div :class="[styles.menuSocials]">
                                <div class="text-gray-500">
                                    {{ navbarText.networks.text }}
                                </div>
                                <div :class="[styles.menuSocials__list]">
                                    <NuxtLink v-for="network in navbarText.networks.dropdown"
                                        :class="[styles.menuSocials__item]" :to="network.link">
                                        <component :is="network.icon" class="w-full h-full min-w-[37px]" />
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else class="flex justify-between items-center w-full">
                        <div class="flex items-center gap-5">
                            <v-menu offset-y>
                                <template v-slot:activator="{ props, isActive }">
                                    <div v-bind="props" :class="[styles.linkForWide]">
                                        {{ navbarText.doc.text }}
                                        <v-icon :class="[isActive ? '-rotate-90' : 'rotate-90']"
                                            class="transition-all duration-300" size="x-small" icon="mdi-play"></v-icon>
                                    </div>
                                </template>

                                <v-list>
                                    <v-list-item v-for="doc in navbarText.doc.dropdown" :key="doc.text" :to="doc.link">
                                        <NuxtLink :to="{ name: doc.link }">{{ doc.text }}</NuxtLink>
                                    </v-list-item>
                                </v-list>
                            </v-menu>

                            <NuxtLink :class="[styles.linkForWide]" :to="{ name: navbarText.forum.link }">
                                {{ navbarText.forum.text }}
                            </NuxtLink>

                            <NuxtLink :class="[styles.linkForWide]" :to="{ name: navbarText.contact.link }">
                                {{ navbarText.contact.text }}
                            </NuxtLink>

                            <v-menu offset-y>
                                <template v-slot:activator="{ props, isActive }">
                                    <div v-bind="props" :class="[styles.linkForWide, 'flex items-center gap-1']">
                                        {{ navbarText.networks.text }}
                                        <v-icon :class="[isActive ? '-rotate-90' : 'rotate-90']"
                                            class="transition-all duration-300" size="x-small" icon="mdi-play"></v-icon>
                                    </div>
                                </template>

                                <v-list>
                                    <v-list-item v-for="network in navbarText.networks.dropdown" :key="network.text"
                                        :to="network.link">
                                        <v-list-item-title>{{ network.text }}</v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </div>

                        <WidgetButton :text="navbarText.register.text" addClass="rounded-lg"
                             :onClick="toggleSignSidebar" />
                    </div>
                </div>
            </div>
        </header>
        <div v-if="isOpen" :class="[isOpen ? 'bg-black/50' : '']" class="fixed top-0 left-0 right-0 bottom-0 z-10"
            @click="toggleOpenMenu"></div>

    </div>
</template>

<script lang="ts" setup>
import logo from "~/shared/assets/Home/images/logo_siams.png"
import styles from "./Navbar.module.scss"
const { isOpen, isOpenDocumentation, screenWidth, navbarText, isWideScreen, toggleSignSidebar, handleScroll, toggleOpenMenu, isScrollingDown } = useNavbar()

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});

onMounted(() => {
    screenWidth.value = window.innerWidth;
    const handleResize = () => {
        screenWidth.value = window.innerWidth;
    };
    window.addEventListener('resize', handleResize);
    onBeforeUnmount(() => {
        window.removeEventListener('resize', handleResize);
    });
});


</script>