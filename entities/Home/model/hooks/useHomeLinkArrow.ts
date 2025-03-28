import style from "~/entities/Home/ui/HomeLinkArrow/HomeLinkArrow.module.scss"
export const useHomeLinkArrow = () => {
    const iconClass = ref('');

    const animateIcon = () => {
        iconClass.value = style.animate;
    };
    
    const resetIcon = () => {
        iconClass.value = '';
    };
    return {
        iconClass, animateIcon, resetIcon
    }
}
