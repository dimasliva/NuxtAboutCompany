export interface ITechnology {
    title: string;
    description: string;
    open: boolean;
    link: string;
}
export interface IPrinciple {
    title: string;
    description: string;
    icon: string;
}
export interface IOutsource {
    title: string;
    description: string;
}
export interface IPeople {
    name: string;
    proffesion: string;
    image: string
}
export interface INumber {
    number: string;
    title: string;
    delay: number;
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