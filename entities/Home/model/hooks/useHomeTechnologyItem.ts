
export const useHomeTechnologyItem = () => {
    
const isVisible = ref(false);
const logoItem = ref<Element | null>(null);
let observer: IntersectionObserver | null = null; 


const onMountedHandler = () => {
    if (typeof IntersectionObserver !== 'undefined') {
        observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && logoItem.value) {
                    isVisible.value = true; 
                    observer?.unobserve(logoItem.value);
                }
            });
        });

        if (logoItem.value) {
            observer.observe(logoItem.value); 
        }
    }
};

const onBeforeUnmountHandler = () => {
    if (observer && logoItem.value) {
        observer.unobserve(logoItem.value);
    }
}

    return {
        logoItem,
        isVisible,
        onMountedHandler,
        onBeforeUnmountHandler
    }
}
