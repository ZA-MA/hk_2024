import {IUser} from "../user/IUser";

export interface AuthResponse {
    token:string;

    role:string;
    user: IUser;
    helpNumber: string;
}
