export const useContactForm = () => {
    const loading = ref<boolean>(false);
    const formData = reactive<IFormDataType>({
        email: '',
        firstName: '',
        lastName: '',
        message: '',
        company: '',
    });
    const form = ref()
    const successModalVisible = ref(false);

    const firstNameRules = [
        (value: string) => {
            if (value?.length >= 3) return true;
            return 'Имя должно содержать не менее 3 символов.';
        },
    ];

    const lastNameRules = [
        (value: string) => {
            if (value?.length >= 4) return true;
            return 'Фамилия должна содержать не менее 4 символов.';
        },
    ];

    const emailRules = [
        (value: string) => {
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (emailPattern.test(value)) return true;
            return 'Некорректный формат электронной почты.';
        },
    ];

    const submit = async (event: Event) => {
        event.preventDefault()
        const { valid } = await form.value.validate()
        if (valid) {
            loading.value = true
            setTimeout(() => {
                successModalVisible.value = true;
                loading.value = false
                form.value.reset()
            }, 1000)
        }
        console.log('valid', valid)
    }

    return {
        formData,
        successModalVisible,
        form,
        emailRules,
        lastNameRules,
        firstNameRules,
        loading,
        submit
    };
};
