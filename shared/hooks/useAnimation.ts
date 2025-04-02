export const useAnimation = () => {
  const isVisible = ref(false);
  const logoItem = ref<Element | null>(null);
  const isVisible2 = ref(false);
  const logoItem2 = ref<Element | null>(null);
  let observer: IntersectionObserver | null = null; 
  
  const onMountedHandler = () => {
      if (typeof IntersectionObserver !== 'undefined') {
          observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting && logoItem.value) {
                      isVisible.value = true; 
                      observer?.unobserve(logoItem.value);
                  }
                  if (entry.isIntersecting && logoItem2.value) {
                    isVisible2.value = true; 
                    observer?.unobserve(logoItem2.value);
                }
              });
          });
  
          if (logoItem.value) {
              observer.observe(logoItem.value); 
          }
          if (logoItem2.value) {
            observer.observe(logoItem2.value); 
        }
      }
  };
  
  const onBeforeUnmountHandler = () => {
      if (observer && logoItem.value) {
          observer.unobserve(logoItem.value);
      }
      if (observer && logoItem2.value) {
        observer.unobserve(logoItem2.value);
    }
  }
  
      return {
          logoItem,
          isVisible,
          logoItem2,
          isVisible2,
          onMountedHandler,
          onBeforeUnmountHandler
      }
  }
  