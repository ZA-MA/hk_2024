import {SpaRoutes} from "../../Routes/spaRoutes";
import {IBurgerList} from "../../models/models";


export const UserBurgerList:IBurgerList[]=
    [
        {
            name: "Профиль",
            link: '/',
        },
        {
            name: "Заказы",
            link: SpaRoutes.Home,
        },
        {
            name: "Ключи доступа",
            link: SpaRoutes.USER.USER_CODES,
        },
    ]