export enum ENavIcon {
    clutch = 'clutch',
    dribbble = 'dribbble',
    instagram = 'instagram',
    linkedin = 'linkedin',
    codepen = 'codepen',
}
interface INavbarItem {
    text: string;
    link: string;
}

interface INavbarNetworkItem {
    icon: any;
    text: string;
    link: string;
}

interface INavbarNetworkListItem {
    text: string;
    dropdown: INavbarNetworkItem[];
}
interface INavbarDocItem {
    text: string, link: string
}
interface INavbarDocListItem {
    text: string;
    dropdown: INavbarDocItem[];
}



export interface INavbarText {
    register: INavbarItem;
    forum: INavbarItem;
    contact: INavbarItem;
    doc: INavbarDocListItem;
    install: INavbarItem;
    module: INavbarItem;
    develop: INavbarItem;
    networks: INavbarNetworkListItem;
}