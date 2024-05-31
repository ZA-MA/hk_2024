import {AxiosResponse} from "axios";
import {AuthResponse} from "../models/response/AuthResponse";
import $api from "../api/axios";
const {ApiRoutes: { User }} = require("../Routes/apiRoutes");

export default class UserService {
    static async getUserInfo():Promise<AxiosResponse<any>>{
        return $api.get<any>(User.GET_USER_INFO)
    }
    static async getUserOffers():Promise<AxiosResponse<any>>{
        return $api.get<any>(User.GET_USER_OFFERS)
    }

    static async doOffer(data: any):Promise<AxiosResponse<any>>{
        return $api.post<any>(User.DO_OFFER, data)
    }
}