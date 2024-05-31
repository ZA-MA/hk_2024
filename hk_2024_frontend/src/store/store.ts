import {makeAutoObservable, makeObservable, observable, runInAction} from "mobx";
import {IUser} from "../models/user/IUser";
import AuthenticateService from "../services/AuthenticateService";
import {configure} from "mobx"


configure({
    enforceActions: "never",
})


const {ApiRoutes: {hubs}} = require("../Routes/apiRoutes");



export default class Store {
    constructor() {
        makeAutoObservable(this)
    }

    user = {} as IUser;
    @observable isAuth = false;
    @observable isAuthLoading = true;
    @observable isDataLoading = false;
    @observable isError = false;
    @observable regionId = '0';
    @observable role: string = "Guest";
    @observable Logout = false;
    @observable imgServer = 'https://pictureservice.ru/';
    @observable helpNumber: string = '';
    @observable isHaveFixedPlace: number = 0;

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setUser(user: IUser) {
        this.user = user;
    }

    setAuthLoading(bool: boolean) {
        this.isAuthLoading = bool;
    }

    setDataLoading(bool: boolean) {
        this.isDataLoading = bool;
    }

    setError(bool: boolean) {
        this.isError = bool;
    }

    setRole(role: string) {
        this.role = role;
    }

    setLogout(bool: boolean) {
        this.Logout = bool;
    }

    setRegionChanged(str: string) {
        this.regionId = str;
    }

    setHelpNumber(str: string) {
        this.helpNumber = str;
    }

    async login(data: object) {
        this.setLogout(false)
        const response = await AuthenticateService.login(data)
        //localStorage.setItem('token', response.data.token)
        this.setAuth(true)
        // localStorage.setItem('userId', response.data.user.id)
        this.setRole(response.data.role)
        this.setUser(response.data.user)
        this.setHelpNumber(response.data.helpNumber)

        return response
    }

    async RegisterUser(userinfo: any) {
        this.setLogout(false)
        const response = await AuthenticateService.registerUser(userinfo);
        return response;
    }

    async RegisterCompany(companyinfo: any) {
        this.setLogout(false)
        const response = await AuthenticateService.registerCompany(companyinfo);
        return response;
    }

    // async register(userinfo: any, URL:string):Promise<boolean>{
    //         this.setLogout(false)
    //         AuthenticateService.register(userinfo, URL)
    //             .then((res)=>{
    //                 if(res.status === 200)
    //                     return true
    //                 else{
    //                     if (res.data.message === "User already exists!") {
    //                         alert("Пользователь уже существует !");
    //                     }
    //                     console.log(res)
    //                 }
    //             })
    //     return false
    // }

    async logout() {
        try {
            // const response = await AuthService.logout()
            this.setLogout(true)
            document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            document.cookie = "Email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            /*localStorage.removeItem('token');*/
            let userId = localStorage.getItem('userId') ?? "";
            /*localStorage.removeItem('userId')*/
            this.setAuth(false)
            this.setRole("Guest")
            this.setUser({} as IUser)
            this.setAuth(false)

            // console.log(response)
        } catch (e: any) {
            console.log(e.response)
        }
    }

    async checkAuth() {
        if (!this.Logout) {
            try {
                this.setLogout(false)
                const response = await AuthenticateService.checkAuth()
                this.setAuth(true)
                this.setRole(response.data.role)
                this.setUser(response.data.user)
            } catch (e: any) {

                //this.setRole("Guest")
            } finally {
                runInAction(() => {
                    this.setAuthLoading(false)
                })
            }
        }
    }

    AuthLoadingON() {
        runInAction(() => {
            this.setAuthLoading(true)
        })
    }

    AuthLoadingOFF() {
        runInAction(() => {
            this.setAuthLoading(false)
        })
    }

    DataLoadingON() {
        runInAction(() => {
            this.setDataLoading(true)
        })
    }

    DataLoadingOFF() {
        runInAction(() => {
            this.setDataLoading(false)
        })
    }

    ErrorON() {
        runInAction(() => {
            this.setError(true)
        })

    }

    ErrorOFF() {
        runInAction(() => {
            this.setError(false)
        })
    }


}
