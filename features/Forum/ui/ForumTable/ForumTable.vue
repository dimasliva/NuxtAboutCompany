<template>
    <div class="flex flex-col items-center relative">

        <table :class="[styles.topicList]">
            <thead>
                <tr :class="[styles.trTh]">
                    <th :class="[styles.topicListData]">
                        <span>
                            Тема
                        </span>
                    </th>
                    <th :class="[styles.topicListData, styles.author]">Автор</th>
                    <th :class="[styles.topicListData, styles.posts]">
                        <button>
                            Ответов
                        </button>
                    </th>
                    <th :class="[styles.topicListData, styles.views]">
                        <button>
                            Просмотров
                        </button>
                    </th>
                    <th :class="[styles.topicListData]">
                        <button>
                            Активность
                        </button>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="topic in items" :key="topic.id" :class="[styles.topicListItem, styles.trTd, styles.pinned]"
                    @click="() => toTheme(topic.id)">
                    <td :class="[styles.mainLink]">
                        <span :class="[styles.linkTopLine, styles.topicListData]">
                            <component v-if="topic.locked" :is="getIcon(ETableIcons.lock)"
                                class="max-w-[20px] max-h-[14px]" />
                            <span :class="[styles.tdTheme]">
                                <NuxtLink :to="{ path: '/forum/theme/' + topic.id }" :class="[styles.rawLink]">
                                    {{ topic.theme }}
                                    <v-tooltip activator="parent" location="top">
                                        <div class="w-80">
                                            {{ truncateText(topic.theme) }}
                                        </div>
                                    </v-tooltip>
                                </NuxtLink>
                            </span>
                        </span>
                        <div :class="[styles.linkBottomLine]">
                            <div :class="[styles.categoryWrapper]">
                                <span :class="[styles.categoryName]">{{ topic.category.name }}</span>
                            </div>
                        </div>
                    </td>
                    <td :class="[styles.authorTd]">
                        <div class="creator">
                            <NuxtLink :class="[styles.creatorLink]" :to="{ path: '/forum/author/' + topic.author.id }">
                                {{ topic.author.name }}
                            </NuxtLink>
                        </div>
                    </td>
                    <td :class="[styles.topicListData, styles.tdWAuto]">
                        <NuxtLink :to="`/en/blizzard/t/${topic.theme.replace(/\s+/g, '-').toLowerCase()}/`"
                            :class="[styles.badgePosts]">
                            <component :is="getIcon(ETableIcons.message)" class="max-w-[20px] max-h-[14px]" />
                            <span class="number">{{ topic.replies }}</span>
                        </NuxtLink>
                    </td>
                    <td :class="[styles.topicListData, styles.num, styles.tdWAuto]">
                        <span :class="[styles.tdNumber, topic.views > 50 ? 'text-orange-500' : '']"
                            title="this topic has been viewed {{ topic.views }} times">
                            {{ topic.views < 1000 ? topic.views : (topic.views / 1000).toFixed(1) }}{{ topic.views < 1000
                                ? '' : 'k' }} </span>


                    </td>


                    <td title="Created: Nov 15, 2024 6:06 am Latest: Mar 21, 2025 2:23 am"
                        :class="[styles.topicListData, styles.age]">
                        <NuxtLink :to="`/en/blizzard/t/${topic.theme.replace(/\s+/g, '-').toLowerCase()}/`"
                            :class="[styles.postActivity]">
                            <span class="relative-date">{{ formatDistanceToNow(topic.activity, {
                                locale: ru, addSuffix:
                                    true
                            }) }}</span>
                        </NuxtLink>
                    </td>


                </tr>

            </tbody>
        </table>
        <WidgetLoader v-if="isLoading" class="absolute bottom-0" />

    </div>

</template>

<script lang="ts" setup>
import { LockYellowIcon, MessageIcon } from "~/shared/assets/icons";
import styles from "./ForumTable.module.scss";
import { formatDistanceToNow } from 'date-fns';
import { ru } from 'date-fns/locale';

interface IProps {
    items: IForumTableTopic[]
    isLoading: boolean
}
defineProps<IProps>()

const { truncateText, toTheme } = useForumTable();

const getIcon = (value: string) => {
    switch (value) {
        case ETableIcons.lock:
            return LockYellowIcon;
        case ETableIcons.message:
            return MessageIcon
        default:
            return null;
    }
}


</script>
