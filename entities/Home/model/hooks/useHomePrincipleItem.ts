
export const useHomePrincipleItem = (item: IPrinciple) => {

    const titleCharacters = computed(() => {
        return item.title.split('');
    });
    const isFirstCircleIcon = () => {
        switch (item.icon) {
            case EPrincipleIcon.circle:
                return true;
            case EPrincipleIcon.triangle:
                return false;
            default:
                return null;
        }
    }
    return {  titleCharacters, isFirstCircleIcon };
};
