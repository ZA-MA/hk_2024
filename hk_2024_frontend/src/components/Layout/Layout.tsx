import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import './Layout.css'
import UserLayout from "./UserLayout/UserLayout";

import {useNavigate} from "react-router-dom";
import {SpaRoutes} from "../../Routes/spaRoutes";
import Header from "../Header/Header";
import GuestLayout from "./GuestLayout/GuestLayout";
import GuardLayout from "./GuardLayout/GuardLayout";
import DeliveryLayout from "./DeliveryLayout/DeliveryLayout";

function Layout(){
    const {store} = useContext(Context)
    const navigate = useNavigate();

    async function refresh() {
        await store.checkAuth().catch(() => navigate(SpaRoutes.LOGIN))
    }

    useEffect(()=> {
        refresh()
    },[])

    return(
        <>
            {(store.role === 'User' && (store.isAuth)) && <UserLayout/>}
            {(store.role === 'Guest' || !store.isAuth) &&  <GuestLayout/>}
            {(store.role === 'Guard' && (store.isAuth)) &&  <GuardLayout/>}
            {(store.role === 'Delivery' && (store.isAuth)) &&  <DeliveryLayout/>}
        </>
    )
}export default observer (Layout)
