import {AxiosResponse} from "axios";
import {AuthResponse} from "../models/response/AuthResponse";
import $api from "../api/axios";
const {ApiRoutes: { Authenticate }} = require("../Routes/apiRoutes");


export default class AuthenticateService {
    //Login function
    static async login(data:object):Promise<AxiosResponse<AuthResponse>>{
        return $api.post<AuthResponse>(Authenticate.LOGIN, data)
    }
    //Registration

    static async registerUser(userinfo: any):Promise<AxiosResponse>{
        return $api.post( Authenticate.REGISTER_USER, userinfo)
    }
    static async registerCompany(companyinfo: any):Promise<AxiosResponse>{
        return $api.post( Authenticate.REGISTER_COMPANY, companyinfo)
    }

    //Logout
    static async logout():Promise<void>{
        return $api.post(Authenticate.LOGOUT)
    }

    static async userInfo():Promise<AxiosResponse<any>>{
        return await $api.get(Authenticate.USER_INFO);
    }



    static async checkAuth():Promise<AxiosResponse<AuthResponse>>{
        return await $api.get<AuthResponse>(Authenticate.CHECK_AUTH,
            {withCredentials:true})
    }

}
