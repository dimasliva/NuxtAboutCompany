import { ClutchCircleIcon, CodepenCircleIcon, DribbbleCircleIcon, EmailCircleIcon, InstagramCircleIcon, LinkedinCircleIcon, PhoneCircleIcon } from "~/shared/assets/icons"

export const useHomeFooterLeftColumn = () => {

    const icons = reactive<IIconLink[]>([
        {icon: ClutchCircleIcon, link: '/'},
        {icon: DribbbleCircleIcon, link: '/'},
        {icon: InstagramCircleIcon, link: '/'},
        {icon: LinkedinCircleIcon, link: '/'},
        {icon: CodepenCircleIcon, link: '/'},
    ])

    const contacts = reactive<IContact[]>([
        {icon: EmailCircleIcon, title: 'Отправить нам сообщение', contact: "hello@siams.com", link: 'https://siams.com/'},
        {icon: PhoneCircleIcon, title: 'Позвонить нам', contact: "Запланировать звонок", link: 'https://siams.com/'},
    ])

    return {
 icons,
 contacts
    }
}
