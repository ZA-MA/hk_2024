import React, {useContext} from "react";
import {Context} from "../../index";
import UserLayout from "../Layout/UserLayout/UserLayout";
import GuestLayout from "../Layout/GuestLayout/GuestLayout";
import GuardLayout from "../Layout/GuardLayout/GuardLayout";
import UserHome from "../Home/UserHome/UserHome";
import GuardHome from "../Home/GuardHome/GuardHome";
import DeliveryHome from "../Home/DeliveryHome/DeliveryHome";


export const Home = () => {
    const {store} = useContext(Context)
    return (
        <>
            {(store.role === 'User' && (store.isAuth)) && <UserHome/>}
            {(store.role === 'Guard' && (store.isAuth)) &&  <GuardHome/>}
            {(store.role === 'Delivery' && (store.isAuth)) &&  <DeliveryHome/>}
        </>
    );
};

export const Profile = () => {
    const {store} = useContext(Context)
    return (
        <>

        </>
    );
};

export const HistoryReservation = () => {
    const {store} = useContext(Context)
    return (
        <>

        </>
    );
};