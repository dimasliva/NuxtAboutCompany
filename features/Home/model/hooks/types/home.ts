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

export enum EPrincipleIcon {
    circle = 'circle',
    triangle = 'triangle',
    bigSquare = 'bigSquare',
    smSquare = 'smSquare',

}