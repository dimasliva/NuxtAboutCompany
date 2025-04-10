export const useForum = () => {
  const store = useForumStore();
  const { tab } = storeToRefs(store)
  const { page } = storeToRefs(store);
  const setPage = store.setPage;
  const topics = reactive<IForumTableTopic[]>([]);
  const isLoading = ref(false);
  const endPage = ref(false);

  const onResponse = (data: IForumResponse) => {
    if (data.success) {
      topics.push(...data.data);
    } else {
      endPage.value = true
    }

    isLoading.value = false;
  };
  const { data, status } = useAPI<IForumResponse>(useApiConfig().API_URL.forum('themes'), {
    params: {
      page,
      tab
    },
    onResponse: (resp) => onResponse(resp.response._data),
  })
  if (data.value) {
    onResponse(data.value)
  }

  const isPending = computed(() => {
    return status.value === 'pending' 
  })

  const handleScroll = () => {
    const bottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 400;
    if (bottom && !isLoading.value && !endPage.value) {
      isLoading.value = true;
      setPage(page.value + 1);
    }
  };

  watch(tab, () => {
    setPage(1)
    topics.length = 0
  })

  return {
    tab,
    topics,
    handleScroll,
    page,
    onResponse,
    isLoading,
    setPage,
    isPending,
  };
};
