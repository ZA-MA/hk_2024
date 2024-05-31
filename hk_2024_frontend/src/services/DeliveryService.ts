import {AxiosResponse} from "axios";
import $api from "../api/axios";
const {ApiRoutes: { Delivery }} = require("../Routes/apiRoutes");
export default class DeliveryService {
    static async getAllOffers():Promise<AxiosResponse<any>>{
        return $api.get<any>(Delivery.GET_ALL_OFFERS)
    }

    static async getOffer(data: any):Promise<AxiosResponse<any>>{
        return $api.post<any>(Delivery.GET_OFFER, data)
    }

    static async updatePinCode(data: any):Promise<AxiosResponse<any>>{
        return $api.post<any>(Delivery.UPDATE_PIN_CODE, data)
    }

    static async closeOffer(data: any):Promise<AxiosResponse<any>>{
        return $api.post<any>(Delivery.CLOSE_OFFER, data)
    }

    static async creatZayavka(data: any):Promise<AxiosResponse<any>>{
        return $api.post<any>(Delivery.createZayavks, data)
    }

}