
export const useHomeNumbers = () => {
    const items = reactive<INumber[]>([
        {number: "10+", title: "Годы опыта", delay: 0.0},
        {number: "1000+", title: "Проектов", delay: 0.2},
        {number: "15", title: "Профессионалов", delay: 0.4},

    ])

    return {items}
}