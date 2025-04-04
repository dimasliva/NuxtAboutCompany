export const useHomePrinciples = () => {
    const items = reactive<IHomePrinciple[]>([
        {title: "Скорость", description: "We are sure about the quality of our services, since delivering pixel perfect and smooth product to our clients is our main goal. By prioritizing quality throughout the development process and beyond, we create exceptional digital experiences that drive user engagement, satisfaction, and business success for our partners.", icon: EPrincipleIcon.circle},
        {title: "Качество", description: "There is nothing to even talk about with the partner who doesn't respect your delays, since it is essential in any professional relationship. We always understand that our partners have their own schedules, priorities, and constraints and we respect them as they are our own ones.", icon: EPrincipleIcon.triangle},
        {title: "Бюджетно", description: "We never stop growing. In this world you can never stop, especially in a digital world. Thus, we can be always sure that our services are up-to-date, top-notch and in demand.", icon: EPrincipleIcon.bigSquare},
        {title: "Поддержка", description: "We always tend to collaborate effectively, communicate openly, and work towards common goals, leading to increased efficiency, productivity, and innovation. This is why long-term partnership is our biggest value not only as a business strategy, but it is our greatest belief.", icon: EPrincipleIcon.smSquare},
    ])

    return {items}
}