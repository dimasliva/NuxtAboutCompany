<template>
    <div :class="[styles.form, styles.anim, isVisible ? styles.animated : '']" ref="logoItem">
        <h3 :class="[styles.title]">Отправьте нам сообщение</h3>

        <v-form @submit.prevent>
            <v-text-field label="Имя" required></v-text-field>
            <v-text-field label="Фамилия" required></v-text-field>
            <v-text-field label="Email" required></v-text-field>
            <v-text-field label="Компания (Дополнительно)"></v-text-field>
            <v-textarea label="Введите своё сообщение здесь..." required :counter="255"></v-textarea>

            <p :class="[styles.privacy]">Отправляя эту форму, вы соглашаетесь с нашей
                <NuxtLink target="_blank" to="/privacy" :class="[styles.privacyLink]">политикой конфиденциальности.
                </NuxtLink>
            </p>

            <v-btn class="mt-2" size="large" type="submit" block>Отправить сообщение</v-btn>

        </v-form>
    </div>
</template>

<script lang="ts" setup>
import styles from "./ContactForm.module.scss"

const { isVisible, logoItem, onBeforeUnmountHandler, onMountedHandler } = useAnimation()
onMounted(onMountedHandler);
onBeforeUnmount(onBeforeUnmountHandler);
</script>