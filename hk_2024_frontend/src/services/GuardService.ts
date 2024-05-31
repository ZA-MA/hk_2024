import {AxiosResponse} from "axios";
import {AuthResponse} from "../models/response/AuthResponse";
import $api from "../api/axios";
const {ApiRoutes: { Guard }} = require("../Routes/apiRoutes");

export default class GuardService {
    static async getAllOffers():Promise<AxiosResponse<any>>{
        return $api.get<any>(Guard.GET_ALL_OFFERS)
    }

    static async getAllZayavki():Promise<AxiosResponse<any>>{
        return $api.get<any>(Guard.getAllZayavki)
    }
}