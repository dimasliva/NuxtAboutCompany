<template>
    <v-dialog v-model="show" max-width="600px">
        <v-card>
            <v-card-title class="headline">Сообщение отправлено!</v-card-title>
            <v-card-text>
                Ваше сообщение успешно отправлено. Мы свяжемся с вами в ближайшее время.
            </v-card-text>
            <v-card-actions>
                <v-btn color="primary" @click="$emit('onClose')">Закрыть</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script lang="ts" setup>
interface IProps {
    isOpen: boolean;
}
const { isOpen } = defineProps<IProps>()
defineEmits(['onClose']);

const show = computed(() => {
    return isOpen
})

</script>
