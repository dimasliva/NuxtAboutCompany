export default defineEventHandler(async (event) => {
    const queryParams = getQuery<{page: string}>(event)

    const page = parseInt(queryParams.page) || 1;
    const pageSize = 10;

    const totalItems = 100;

    const themes = [
        'Спасибо за патч, но нам нужен срочный фикс!',
        'Может кто-то помочь мне?',
        'Новые баги в версии 1.0.2.2415',
        'Avowed не запускается',
        'Плагин WordPress для календаря гильдии'
    ];
    
    const authors = [
        { id: 1, name: 'Иван' },
        { id: 2, name: 'Мария' },
        { id: 3, name: 'Петр' },
        { id: 4, name: 'Светлана' },
        { id: 5, name: 'Алексей' }
    ];

    const categories = ['Ошибка', 'Предложение', 'Вопрос', 'Сервер', 'Срочно'];

    const items = Array.from({ length: totalItems }, (_, index) => {
        const randomAuthor = authors[Math.floor(Math.random() * authors.length)];
        return {
            id: index + 1,
            theme: themes[Math.floor(Math.random() * themes.length)], 
            author: randomAuthor, // Используем объект автора
            category: categories[Math.floor(Math.random() * categories.length)], 
            replies: Math.floor(Math.random() * 10),
            views: Math.floor(Math.random() * 100),
            activity: `${Math.floor(Math.random() * 10)}d`,
            locked: Math.random() < 0.5,
        };
    });

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedItems = items.slice(startIndex, endIndex);

    if (paginatedItems.length === 0) {
        return {
            success: false,
            message: 'Нет доступных элементов для отображения.',
            totalItems,
            currentPage: page,
            totalPages: Math.ceil(totalItems / pageSize),
            queryParams
        };
    }

    return {
        success: true,
        items: paginatedItems,
        totalItems,
        currentPage: page,
        totalPages: Math.ceil(totalItems / pageSize),
        queryParams
    };
});