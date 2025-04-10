<template>
    <WidgetPageUiPage>
        <div class="relative max-w-7xl mx-auto">
            <FeatureForumUiForumTabs />
            <FeatureForumUiForumTable :items="topics" :is-loading="isLoading" :is-pending="isPending" />
        </div>
    </WidgetPageUiPage>
</template>

<script lang="ts" setup>
import styles from "./ForumPage.module.scss"
const { topics, tab, isLoading, isPending, handleScroll, setPage } = useForum()

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
    setPage(1)
    window.removeEventListener('scroll', handleScroll);
});
</script>