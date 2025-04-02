
export const useHomeFooterRightColumn = () => {

    const menus = reactive<IMenuItem[]>([
        {title: 'Компания', links: [
            {title: 'Главная', link: 'https://siams.com/'},
            {title: 'О нас', link: 'https://siams.com/'},
            {title: 'Проекты', link: 'https://siams.com/'},
        ]},
        {title: 'Услуги', links: [
            {title: 'Этап открытия', link: 'https://siams.com/'},
            {title: 'Дизайн', link: 'https://siams.com/'},
            {title: 'Разработка', link: 'https://siams.com/'},
        ]},
        {title: 'Ресурсы', links: [
            {title: 'Контакты', link: 'https://siams.com/'},
            {title: 'Конфиденциальность', link: 'https://siams.com/'},
        ]},
    ])

    return {
        menus,
    }
}
