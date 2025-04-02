import proj1 from "~/shared/assets/Home/images/proj-1.png.webp";
import proj2 from "~/shared/assets/Home/images/proj-2.png.webp";
import proj3 from "~/shared/assets/Home/images/proj-3.png.webp";
import proj4 from "~/shared/assets/Home/images/1-2.png.webp";
import proj5 from "~/shared/assets/Home/images/4.png.webp";
import proj6 from "~/shared/assets/Home/images/proj-8.png.webp";

export const useHomeDiscover = () => {
    const contentRef = ref<HTMLElement | null>(null);
    const isVisible = ref(false); 

    const marginLeft = ref(0);
    const marginRight = ref(-22);
    const state = reactive({
        lastScrollY: 0,
        scrollDirection: '' 
    });

    const rows_one = reactive<IImageLink[]>([
        { image: proj1, link: 'https://siams.com/#tech' },
        { image: proj2, link: 'https://siams.com/#tech' },
        { image: proj3, link: 'https://siams.com/#tech' },
    ]);

    const rows_two = reactive<IImageLink[]>([
        { image: proj4, link: 'https://siams.com/#tech' },
        { image: proj5, link: 'https://siams.com/#tech' },
        { image: proj6, link: 'https://siams.com/#tech' },
    ]);

    const handleScroll = () => {
        checkVisibility(); 

        if (isVisible.value) {
        const currentScrollY = window.scrollY;
        if (currentScrollY > state.lastScrollY) {
                state.scrollDirection = EDirection.DOWN;
            } else if (currentScrollY < state.lastScrollY) {
                state.scrollDirection = EDirection.UP;
            }

            state.lastScrollY = currentScrollY;

            marginLeft.value += state.scrollDirection === EDirection.UP ? 0.35 : -0.35;
            marginRight.value += state.scrollDirection === EDirection.UP ? -0.35 : 0.35;

            if (marginLeft.value < -22) {
                marginLeft.value = -22;
            } else if (marginLeft.value > 3) {
                marginLeft.value = 3;
            }

            if (marginRight.value < -22) {
                marginRight.value = -22;
            } else if (marginRight.value > 2) {
                marginRight.value = 2;
            }
        }
    };

    const checkVisibility = () => {
        if (contentRef.value) {
            const rect = contentRef.value.getBoundingClientRect();
            const isInViewport = rect.top >= 0 && (rect.bottom - rect.height) <= window.innerHeight;
            isVisible.value = isInViewport; 
        }
    };

    return {
        rows_one, 
        rows_two, 
        marginLeft, 
        marginRight,
        scrollDirection: state.scrollDirection, 
        contentRef,
        handleScroll
    };
};
