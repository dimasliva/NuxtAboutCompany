export interface IHomeTechnology {
    title: string;
    description: string;
    open: boolean;
    link: string;
}
export interface IHomePrinciple {
    title: string;
    description: string;
    icon: string;
}
export interface IHomeOutsource {
    title: string;
    description: string;
}
export interface IHomePeople {
    name: string;
    proffesion: string;
    image: string
}
export interface IHomeNumber {
    number: string;
    title: string;
    delay: number;
}

export interface IHomeTechnologyImage {
    title: string,
    image: any,
    delay: number,
}
export enum EPrincipleIcon {
    circle = 'circle',
    triangle = 'triangle',
    bigSquare = 'bigSquare',
    smSquare = 'smSquare',
}

export enum EOurServiceIcon {
    clutch = 'clutch',
    stars = 'stars',
}

export enum EDirection {
    UP = 'up',
    DOWN = 'down'
}