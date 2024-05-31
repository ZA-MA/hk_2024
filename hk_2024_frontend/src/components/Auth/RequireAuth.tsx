import { useLocation, Navigate, Outlet } from "react-router-dom";
import React, {useContext} from "react";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import './../../index.css';
import {SpaRoutes} from "../../Routes/spaRoutes";
import {Loader} from "../UI/Loader/Loader";

const RequireAuth = ({ allowedRole }:any) => {
    const {store} = useContext(Context)
    const location = useLocation();

    return (

        store.isAuthLoading? <Loader load={true} />
            : allowedRole.includes(store.role) ? <Outlet />
                : store?.isAuth ? <Navigate to={SpaRoutes.UNAUTHORIZED}  />
                    : <Navigate to={SpaRoutes.LOGIN} />
    );
}

export default  observer(RequireAuth);
