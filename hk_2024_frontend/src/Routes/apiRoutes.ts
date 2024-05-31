export const ApiRoutes = {
    Authenticate: {
        LOGIN: "/Authenticate/login",
        LOGOUT: "/Authenticate/logout",
        REGISTER_USER: "/Authenticate/UserRegistration",
        REGISTER_COMPANY: "/Authenticate/CompanyRegistration",
        CHECK_AUTH: "/Authenticate/CheckAuth",
        REFRESH_TOKEN: "/Authenticate/refresh-token",
        USER_INFO: "/Authenticate/userInfo",
        //FAVORITES: "/favorites",
    },


    User: {
        GET_USER_INFO: "/User/GetUserInfo",
        GET_USER_OFFERS: "/User/GetUserOffers",
        DO_OFFER: "/User/DoOffer",
    },
    Guard: {
        GET_ALL_OFFERS: "/Guard/GetAllOffers",
        getAllZayavki: "/Zayavk/GetZayavks",
    },

    Delivery: {
        GET_ALL_OFFERS: "/Delivery/GetAllOffers",
        GET_OFFER: "/Delivery/GetOffer",
        UPDATE_PIN_CODE: "/Delivery/UpdatePinCode",
        CLOSE_OFFER: "/Delivery/CloseOffer",
        createZayavks: "/Zayavk/createZayavks",
    }

}