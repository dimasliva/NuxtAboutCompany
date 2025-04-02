export const useHomeContactUsText = () => {

    const linkStyle = reactive({ transform: 'translate(0px, 0px)', transition: 'transform 0.3s ease' });
    const linkElement = ref<HTMLElement | null>(null); 
    const paragraphElement = ref<HTMLElement | null>(null); 
    
    const updatePosition = (event: MouseEvent) => {
        if (linkElement.value && paragraphElement.value) {
            const rect = paragraphElement.value.getBoundingClientRect();
            const linkRect = linkElement.value.getBoundingClientRect();
            
            const x = event.clientX - (linkRect.x + (linkRect.width / 2));
            const y = event.clientY - (linkRect.y + (linkRect.height / 5));
            
            if (event.clientX >= rect.left && event.clientX <= rect.right && 
                event.clientY >= rect.top && event.clientY <= rect.bottom) {
                linkStyle.transform = `translate(${x}px, ${y}px)`; 
            } else {
                linkStyle.transform = `translate(0px, 0px)`;
            }
        }
    };
    return {
        linkElement,
        linkStyle,
        paragraphElement,
        updatePosition
    }
}
