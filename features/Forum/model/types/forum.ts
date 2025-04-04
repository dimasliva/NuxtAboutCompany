export enum ETabs {
    top = 'top',
    last = 'last',
}
export enum ETableIcons {
    message = 'message',
    lock = 'lock',
}
interface IAuthor {
    id: number;
    name: string;
}
interface ICategpry {
    name: string;
}
export interface IForumTableTopic {
    id: number;
    theme: string;
    author: IAuthor; 
    category: ICategpry;
    replies: number;
    views: number;
    activity: string;
    locked: boolean;
}

export interface IForumResponse {
    success: boolean;
    data: IForumTableTopic[]
    totalItems: number;
    currentPage: number;
    totalPages: number;
}