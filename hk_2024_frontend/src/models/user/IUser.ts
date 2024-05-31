export interface IUser{
    email: string;
    firstName: string,
    lastName: string,
    patronymic: string
    id:number,
    city: string,
    login: string,
    login_id: number,
    numberFlat: number,
    numberHome: string,
    phone: string,
    street: string

    role: {id: number, role: string},
    role_id: number
}
