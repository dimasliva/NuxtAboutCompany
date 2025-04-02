

export const useContactInfo = () => {
    const contactBlocks = reactive<IContactBlock[]>([
        {
            title: "Наши контакты",
            textOne: 'hello@siams.com', 
            textTwo: '+ 7 (800) 505-75-25', 
        },
        {
            title: "Наши адреса",
            textOne: 'ул. Коминтерна 16', 
            textTwo: 'офис 604', 
        },
    ]);
   

    return {
        contactBlocks
    };
};
