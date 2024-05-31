import {IUser} from "./user/IUser";

export interface IBurgerList {
    icon?: string;
    name: string;
    link: string;
}

export interface Offer {
    user: IUser;
    user_id: number;
    id: number;
    dateStart: string;
    dateEnd: string;
    isActive: boolean;
    pin: string;
    type: string;
}

export interface IOffer {
    id?: number,
    user_id?: number,
    user?: IUser,
    dateStart?: string,
    type?: string,
    isActive?: boolean,
    dateEnd?: string,
    pin?: string
}

export interface IPasscode {
    "endDate": number,
    "sendDate": number,
    "keyboardPwdId": number,
    "nickName": string,
    "keyboardPwdType": number,
    "lockId": number,
    "keyboardPwdVersion": number,
    "isCustom": number,
    "keyboardPwdName": string,
    "keyboardPwd": string,
    "startDate": number,
    "senderUsername": string,
    "receiverUsername": string,
    "status": number
}

export interface IZayavk {
    id?: number,
    text?: string,
    date?: string,
    offer_id?: number,
    offer?: IOffer
}
