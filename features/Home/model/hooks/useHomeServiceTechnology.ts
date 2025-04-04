export const useHomeServices = () => {
    const services = reactive<IHomeTechnology[]>([
        {title: "Брендинг", description: "Создание фирменного стиля — это важный аспект, который помогает выделить ваш бизнес среди конкурентов и установить запоминающееся присутствие в сознании вашей целевой аудитории. Мы поможем вам с вашим логотипом, фирменным стилем, руководствами и т.д.", open: false, link: "https://siams.com/#tech"},
        {title: "Веб-дизайн", description: "Если вы хотите обновить свой текущий сайт или создать новый бренд с нуля, мы стремимся предоставлять исключительные дизайны, которые точно отражают уникальную идентичность и ценности вашей компании.", open: false, link: "https://siams.com/#tech"},
        {title: "Веб-разработка", description: "Разработка сайтов с нуля — это деятельность, которая стоит у истоков нашей компании. Мы разрабатываем для вас готовые сайты, используя различные технологии и CMS: от лендингов и интернет-магазинов до индивидуальных веб-приложений для стартапов и особых нужд.", open: false, link: "https://siams.com/#tech"},
        {title: "WordPress", description: "В 2022 году более 810 миллионов сайтов были созданы на WordPress, что составляет более 43% всех сайтов в Интернете. Мы гордимся тем, что WordPress является нашей основной технологией, и мы справимся с проектом любой сложности.", open: false, link: "https://siams.com/#tech"},
        {title: "Webflow", description: "Webflow — это очень популярный конструктор сайтов и CMS на сегодняшний день. Он предлагает удобный интерфейс, широкий выбор шаблонов дизайна и мощные возможности настройки, что делает его отличным выбором как для новичков, так и для опытных веб-дизайнеров.", open: false, link: "https://siams.com/#tech"},
        {title: "Электронная коммерция", description: "Мы создаем сайты электронной коммерции, которые предоставляют надежную платформу для бизнеса, чтобы продавать свои продукты или услуги онлайн, позволяя клиентам совершать покупки из комфорта своего дома. WooCommerce, или Shopify   будут идеальным решением.", open: false, link: "https://siams.com/#tech"},
    ])

    function onOpen(index: number) {
        services[index].open = !services[index].open
    }
    
    return {services, onOpen}
}