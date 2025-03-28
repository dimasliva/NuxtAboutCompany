export const useHomeStarterChangeText = () => {

    const texts = reactive([
        "Изучаем макро- и микроструктуру",
        "Поставка и моторизация",
        "Анализаторы SIAMS",
        "Оптические микроскопы",
    ]);
    
    const currentIndex = ref(0);
    const displayedText = ref("");
    
    const eraseText = (text: string) => {
        let index = text.length;
    
        const interval = setInterval(() => {
            if (index > 0) {
                displayedText.value = text.substring(0, index - 1);
                index--;
            } else {
                clearInterval(interval);
                currentIndex.value = (currentIndex.value + 1) % texts.length;
                setTimeout(() => updateText(texts[currentIndex.value]), 1000);
            }
        }, 40);
    };
    
    const updateText = (text: string) => {
        displayedText.value = "";
        let index = 0;
    
        const interval = setInterval(() => {
            if (index < text.length) {
                displayedText.value += text.charAt(index);
                index++;
            } else {
                clearInterval(interval);
                setTimeout(() => eraseText(text), 1000);
            }
        }, 40);
    };
    onMounted(() => {
        updateText(texts[currentIndex.value]);
    });
    return {
        displayedText
    }
}
