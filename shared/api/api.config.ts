export const useApiConfig = () => {
    const config = useRuntimeConfig()

    const apiBase = config.public.apiBase || ''; // Значение по умолчанию, если apiBase не задано

    const API_URL = {
        root: (url = "") => `${apiBase}${url ? '/' + url : ''}`, // Добавлено apiBase
        forum: (url = "") =>  `${apiBase}${url ? '/forum/' + url : ''}`,
    };

    return { API_URL }
}
