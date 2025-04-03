export default defineEventHandler((event) => {
    const url = new URL(event.node.req.url, `http://${event.node.req.headers.host}`);
    
    // Получаем query параметры
    const queryParams = Object.fromEntries(url.searchParams.entries());
    const page = parseInt(queryParams.page) || 1; // Получаем номер страницы, по умолчанию 1
    const pageSize = 10; // Количество элементов на странице

    console.log('Query Parameters:', queryParams);

    // Генерируем массив из 100 элементов
    const totalItems = 100;
    const items = Array.from({ length: totalItems }, (_, index) => ({
        id: index + 1,
        theme: `Тема ${index + 1}`,
        author: `Автор ${index + 1}`,
        category: `Категория ${Math.floor(Math.random() * 5) + 1}`,
        replies: Math.floor(Math.random() * 10),
        views: Math.floor(Math.random() * 1000),
        activity: `${Math.floor(Math.random() * 10)}d`,
        link: `https://example.com/item${index + 1}`,
        categoryLink: `/en/support/c/category${Math.floor(Math.random() * 5) + 1}`,
        authorLink: `/en/support/u/author${index + 1}`,
        locked: Math.random() < 0.5, // Случайное значение true/false
    }));

    // Рассчитываем начальный и конечный индексы для среза массива
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedItems = items.slice(startIndex, endIndex); // Получаем элементы для текущей страницы

    return {
        items: paginatedItems,
        totalItems, // Общее количество элементов
        currentPage: page,
        totalPages: Math.ceil(totalItems / pageSize), // Общее количество страниц
        queryParams
    };
});
