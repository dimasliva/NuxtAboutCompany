import Viktoria from "~/shared/assets/Home/images/Viktoria.png.webp";
import Yaroslav from "~/shared/assets/Home/images/Yaroslav.png.webp";
import Anton from "~/shared/assets/Home/images/Anton.png.webp";
import Nikita from "~/shared/assets/Home/images/Nikita.png.webp";
import Marian from "~/shared/assets/Home/images/Marian.png.webp";
import Denis from "~/shared/assets/Home/images/Denis.png.webp";
import Tihon from "~/shared/assets/Home/images/Tihon.png.webp";

export const useHomePeoples = () => {
    const items = reactive<IPeople[]>([
        {name: "Виктория", proffesion: "CEO & финансовый директор", image: Viktoria},
        {name: "Ярослав", proffesion: "Менеджер по развитию бизнеса", image: Yaroslav},
        {name: "Антон", proffesion: "РУКОВОДИТЕЛЬ ОТДЕЛА РАЗВИТИЯ", image: Anton},
        {name: "Никита", proffesion: "FULL STACK РАЗРАБОТЧИК", image: Nikita},
        {name: "Денис", proffesion: "РУКОВОДИТЕЛЬ ОТДЕЛА ДИЗАЙНА", image: Denis},
        {name: "Фёдор", proffesion: "РУКОВОДИТЕЛЬ ОТДЕЛА ДИЗАЙНА", image: Marian},
        {name: "Тихон", proffesion: "FULL STACK РАЗРАБОТЧИК", image: Tihon},
    ])

    return {items}
}