<template>
    <div :class="[styles.form, styles.anim, isVisible ? styles.animated : '']" ref="logoItem">
        <h3 :class="[styles.title]">Отправьте нам сообщение</h3>

        <v-form ref="form">
            <v-text-field label="Имя" v-model="formData.firstName" :rules="firstNameRules" name="firstName"
                required></v-text-field>

            <v-text-field label="Фамилия" v-model="formData.lastName" :rules="lastNameRules" name="lastName"
                required></v-text-field>

            <v-text-field label="Email" v-model="formData.email" :rules="emailRules" name="email"
                required></v-text-field>

            <v-text-field label="Компания (Дополнительно)" v-model="formData.company" name="company"></v-text-field>

            <v-textarea label="Введите своё сообщение здесь..." v-model="formData.message" name="message" required
                :counter="255"></v-textarea>
            <p :class="[styles.privacy]">Отправляя эту форму, вы соглашаетесь с нашей
                <NuxtLink target="_blank" to="/privacy" :class="[styles.privacyLink]">политикой конфиденциальности.
                </NuxtLink>
            </p>

            <v-btn class="mt-2" size="large" type="submit" @click="submit" block :loading="loading">Отправить
                сообщение</v-btn>

        </v-form>
        <EntityContactUiContactSuccessModal :is-open="successModalVisible" @on-close="successModalVisible = false" />
    </div>
</template>

<script lang="ts" setup>
import styles from "./ContactForm.module.scss"

const { loading, form, firstNameRules, lastNameRules, emailRules, formData, successModalVisible, submit } = useContactForm()
const { isVisible, logoItem, onBeforeUnmountHandler, onMountedHandler } = useAnimation()
onMounted(onMountedHandler);
onBeforeUnmount(onBeforeUnmountHandler);

</script>