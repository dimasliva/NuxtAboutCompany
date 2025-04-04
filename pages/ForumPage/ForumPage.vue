<template>
    <WidgetPageUiPage>
        <div class="relative max-w-7xl mx-auto">
            <FeatureForumUiForumTabs />
            <v-tabs-window v-model="tab">
                <v-tabs-window-item :value="ETabs.top">
                    <FeatureForumUiForumTable :items="topics" :is-loading="isLoading" />
                </v-tabs-window-item>

                <v-tabs-window-item :value="ETabs.last">
                    <FeatureForumUiForumTable :items="topics" :is-loading="isLoading" />
                </v-tabs-window-item>
            </v-tabs-window>
        </div>
    </WidgetPageUiPage>
</template>

<script lang="ts" setup>
import styles from "./ForumPage.module.scss"
const { topics, tab, isLoading, handleScroll, setPage } = useForum()

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
    setPage(1)
    window.removeEventListener('scroll', handleScroll);
});
</script>