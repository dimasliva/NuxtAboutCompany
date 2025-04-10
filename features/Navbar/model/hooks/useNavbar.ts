import { ClutchCircleIcon, CodepenCircleIcon, DribbbleCircleIcon, InstagramCircleIcon, LinkedinCircleIcon } from "~/shared/assets/icons"

export const useNavbar = () => {
    const isOpen = useIsOpenNavbar()
    const screenWidth = ref(0);
    const lastScrollY = ref(0);
    const isOpenDocumentation = ref<boolean>(false)
    const isScrollingDown = ref(false);
    const isOpenSignSidebar = useIsOpenSignSidebar()

    const navbarText = reactive<INavbarText>({
        register: { text: "Войти / Регистрация", link: "" },
        forum: { text: "Форум", link: "forum" },
        contact: { text: "Контакты", link: "contact" },
        doc: {
            text: "Начать", dropdown: [
                { text: "Установка", link: "docs" },
                { text: "Гайд", link: "docs" },
                { text: "Примеры", link: "docs" },
            ]
        },
        install: { text: "Установка", link: "" },
        module: { text: "Модули", link: "" },
        develop: { text: "Разработка", link: "" },
        networks: {
            text: "Наши сети", dropdown: [
                { icon: ClutchCircleIcon, text: "Telegram", link: "#" },
                { icon: DribbbleCircleIcon, text: "Вконтакте", link: "#" },
                { icon: InstagramCircleIcon, text: "Instagram", link: "#" },
                { icon: LinkedinCircleIcon, text: "Rutube", link: "#" },
                { icon: CodepenCircleIcon, text: "Наш сайт", link: "#" },
            ]
        },
    });

    const isWideScreen = computed(() => {
        return screenWidth.value <= 1000;
    });

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY.value) {
            isScrollingDown.value = true;
        } else {
            isScrollingDown.value = false;
        }

        lastScrollY.value = currentScrollY;
    };

    const toggleSignSidebar = () => {
        isOpenSignSidebar.value = !isOpenSignSidebar.value
    }

    const toggleOpenMenu = () => {
        isOpen.value = !isOpen.value
    }

    return {
        isOpen,
        isOpenDocumentation,
        isScrollingDown,
        screenWidth,
        navbarText,
        isWideScreen,
        isOpenSignSidebar,
        toggleSignSidebar,
        toggleOpenMenu,
        handleScroll,
    }
}