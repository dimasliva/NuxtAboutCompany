import styles from "~/entities/Home/ui/HomePrincipleItem/HomePrincipleItem.module.scss"; 



export const useHomePrincipleItem = (item: IPrinciple) => {
    const iconClass = computed(() => {
        switch (item.icon) {
            case EPrincipleIcon.circle:
                return styles.cardIcon;
            case EPrincipleIcon.triangle:
                return styles.cardTriangleIcon;
            case EPrincipleIcon.bigSquare:
                return styles.cardBigSquareIcon;
            case EPrincipleIcon.smSquare:
                return styles.cardSmSquareIcon;
            default:
                return '';
        }
    });
    const titleCharacters = computed(() => {
        return item.title.split('');
    });

    return { iconClass, titleCharacters };
};
