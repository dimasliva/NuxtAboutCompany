import { CheckMarkIcon } from "~/shared/assets/icons"

export const useSignSidebar = () => {
    const isOpenSignSidebar = useIsOpenSignSidebar()

    const accessItems = reactive<IIconText[]>([
        {icon: CheckMarkIcon, text: "Админ панель"},
        {icon: CheckMarkIcon, text: "Тех. поддержка"},
        {icon: CheckMarkIcon, text: "Медицинский AI"},
    ])

    const bottomBtns = reactive<IIconTextLink[]>([
        {icon: "mdi-speedometer", text: "Установка", link: 'docs'},
        {icon: "mdi-forum", text: "Форум", link: 'forum'},
        {icon: "mdi-account-box", text: "Контакты", link: 'contact'},
    ])

    const loginBtns = reactive<ITextLink[]>([
        {text: "Вход", link: 'https://siams.com/'},
        {text: "Регистрация", link: 'https://siams.com/'},
    ])

    const openPage = async (linkPage: string) => {
        await navigateTo({name: linkPage})
    }

    const closeSidebar = () => {
        isOpenSignSidebar.value = false
    }
    const openLoginPage = (link: string) => {
        window.open(link, '_blank');
    }
    return {
        loginBtns,
        accessItems,
        bottomBtns,
        openLoginPage,
        openPage,
        closeSidebar,
    }
}