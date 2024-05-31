import React, {useContext} from 'react';

import "./UserHome.css"
import {ChangeStreet} from "../../ChangeStreet/ChangeStreet";
import {Orders} from "../../Orders/Orders";
import {SwitchButton} from "../../SwitchButton/SwitchButton";
import {Categories} from "../../Category/Categories";
import "../../Category/Categories.css"
import {useNavigate} from "react-router-dom";
import {SpaRoutes} from "../../../Routes/spaRoutes";


const UserHome = () => {
    const navigate = useNavigate()

    return (
        <div className={"userHome"}>
            <ChangeStreet/>
            <Orders/>
            <SwitchButton/>
            <div className="categories__container">
                <div className="categories__item" onClick={() => navigate(SpaRoutes.USER.DELIVERY)}>
                    <img className="categories__img" src="./Pictures/delivery.svg" alt=""/>
                    <div className="categories__text">Доставка</div>
                </div>
                <div className="categories__item">
                    <img className="categories__img" src="./Pictures/cleaning.svg" alt=""/>
                    <div className="categories__text">Клининг</div>
                </div>
            </div>
        </div>
    );
};

export default UserHome;