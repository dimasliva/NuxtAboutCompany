<template>
    <v-tabs bg-color="transparent" align-tabs="start" v-model="tab">
        <v-tab :value="ETabs.top">Топ</v-tab>
        <v-tab :value="ETabs.last">Последние</v-tab>
    </v-tabs>
</template>

<script lang="ts" setup>
const store = useForumStore();
const { tab } = storeToRefs(store)
</script>