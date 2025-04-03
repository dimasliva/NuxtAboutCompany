export const useForumTable = () => {
    const page = ref<number>(1);
    const topics = reactive<IForumTableTopic[]>([]); // Реактивный массив для хранения тем

    const { data, status, error, refresh, clear } = useFetch('/api/topics', {
        query: { page },

        onRequest({ request, options }) {
          // Set the request headers
          // note that this relies on ofetch >= 1.4.0 - you may need to refresh your lockfile
          options.headers.set('Authorization', '...')
        },
        onRequestError({ request, options, error }) {
          // Handle the request errors
        },
        onResponse({ request, response, options }) {
            if(data.value) {
                topics.push(...data.value.items)
                console.log(data.value.items)
            }
        },
        onResponseError({ request, response, options }) {
          // Handle the response errors
        }
      }, )

    function truncateText(text: string): string {
        if (text.length > 215) {
            return text.slice(0, 215) + '...';
        }
        return text;
    }

    return {
        topics,
        truncateText,
        refresh, // Добавляем функцию refresh для перезагрузки данных
        error, // Обработка ошибок
        status // Статус загрузки
    };
};
