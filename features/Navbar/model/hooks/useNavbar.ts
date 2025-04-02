export const useNavbar = () => {
    const isOpen = useIsOpenNavbar() 


    const isOpenDocumentation = ref<boolean>(false)

    const lastScrollY = ref(0);
    const isScrollingDown = ref(false);
    
    const handleScroll = () => {
        const currentScrollY = window.scrollY;
    
        if (currentScrollY > lastScrollY.value) {
            isScrollingDown.value = true;
        } else {
            isScrollingDown.value = false;
        }
    
        lastScrollY.value = currentScrollY;
    };

    const toggleOpenMenu = () => {
        isOpen.value  = !isOpen.value
    }
    
    return {
        isOpen,
        isOpenDocumentation,
        isScrollingDown,
        toggleOpenMenu,
        handleScroll,
    }
}