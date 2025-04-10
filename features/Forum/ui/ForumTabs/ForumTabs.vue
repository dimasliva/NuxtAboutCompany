<template>
    <div class="flex items-center justify-between">
        <v-tabs bg-color="transparent" align-tabs="start" v-model="tab">
            <v-tab :value="ETabs.top">Топ</v-tab>
            <v-tab :value="ETabs.last">Последние</v-tab>
        </v-tabs>

        <div class="relative flex items-center">
            <v-autocomplete :items="[]" append-inner-icon="mdi-magnify" class="mx-auto w-60" density="comfortable"
                placeholder="Поиск по теме" theme="dark" variant="solo" auto-select-first item-props
                rounded></v-autocomplete>

            <v-menu offset-y>
                <template #activator="{ props }">
                    <v-icon v-bind="props" class="cursor-pointer mb-6" icon="mdi-dots-vertical" />
                </template>

                <v-list class="mt-6 ml-auto flex flex-wrap w-[50%]">
                    <v-list-item class="w-full p-2">
                        <v-list-item-title class="font-bold">Выбор категорий</v-list-item-title>
                    </v-list-item>
                    <v-list-item v-for="(action) in actions" :key="action.text" class="w-1/2 p-2">
                        <v-list-item-action>
                            <v-checkbox v-model="selectedActions" :value="action.value" hide-details class="mr-2"
                                @click.stop />
                            <v-list-item-title @click.stop>{{ action.text }}</v-list-item-title>
                        </v-list-item-action>
                    </v-list-item>
                </v-list>
            </v-menu>

        </div>
    </div>
</template>

<script setup lang="ts">
const store = useForumStore();
const { tab } = storeToRefs(store)

const { actions, selectedActions } = useForumTabs()
</script>
