export enum ETabs {
    top = 'top',
    last = 'last',
}
export enum ETableIcons {
    message = 'message',
    lock = 'lock',
}
export interface IForumTableTopic {
    id: number;
    theme: string;
    author: string;
    category: string;
    replies: number;
    views: number;
    activity: string;
    link: string;
    categoryLink: string;
    authorLink: string;
    locked: boolean;
}