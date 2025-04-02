export interface IContact {
    title: string;
    contact: string;
    link: string;
    icon: any;
}
interface Link {
    title: string;
    link: string;
}

export interface IMenuItem {
    title: string;
    links: Link[];
}
