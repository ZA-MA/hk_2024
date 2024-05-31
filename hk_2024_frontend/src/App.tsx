import React from 'react';

import './App.css';

import {observer} from "mobx-react-lite";

import {Route, Routes} from "react-router-dom";
import {SpaRoutes} from "./Routes/spaRoutes";
import Login from "./components/PublicPages/Login/Login";
import RequireAuth from "./components/Auth/RequireAuth";
import UserHome from "./components/Home/UserHome/UserHome";
import {MainPage} from "./components/ProtectedPages/User/MainPage";
import Offers from "./components/ProtectedPages/Delivery/Offers";
import Offer from "./components/ProtectedPages/Delivery/Offer";
import GuardHome from "./components/Home/GuardHome/GuardHome";
import {Home} from "./components/ProtectedPages/RoleBasedComponent";
import Delivery from "./components/ProtectedPages/User/Delivery/Delivery";
import DeliveryFood from "./components/ProtectedPages/User/DeliveryFood/DeliveryFood";
import CreateOffer from "./components/ProtectedPages/User/CreateOffer/CreateOffer";
import UserOffers from "./components/ProtectedPages/User/Offers/UserOffers";
import UserCodes from "./components/ProtectedPages/User/UsersCode/UserCodes";
import Passcodes from "./components/ProtectedPages/User/Passcodes/Passcodes";




const ROLES = {
    'Delivery': 'Delivery',
    'User': 'User',
    'Guard': 'Guard'
}
function App() {
    return (
        <>
            <Routes>
                <Route path={SpaRoutes.LOGIN} element={<Login/>}/>

                <Route element={<RequireAuth allowedRole={[ROLES.User, ROLES.Guard, ROLES.Delivery]}/>}>
                    <Route path={SpaRoutes.Home} element={<Home/>}/>
                </Route>

                <Route element={<RequireAuth allowedRole={[ROLES.User]}/>}>
                    <Route path={SpaRoutes.USER.DELIVERY} element={<Delivery/>}/>
                    <Route path={SpaRoutes.USER.DELIVERY_FOOD} element={<DeliveryFood/>}/>
                    <Route path={SpaRoutes.USER.CREATE_OFFER} element={<CreateOffer/>}/>
                    <Route path={SpaRoutes.USER.USER_OFFERS} element={<UserOffers/>}/>
                    <Route path={SpaRoutes.USER.USER_CODES} element={<Passcodes/>}/>
                </Route>

                <Route element={<RequireAuth allowedRole={[ROLES.Delivery]}/>}>
                    <Route path={SpaRoutes.Delivery.OFFER + "/:id"} element={<Offer/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default observer(App);
