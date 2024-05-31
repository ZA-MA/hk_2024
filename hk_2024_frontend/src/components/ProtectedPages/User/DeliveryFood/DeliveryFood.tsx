import React from 'react';
import "./DeliveryFood.css"
import {ChangeStreet} from "../../../ChangeStreet/ChangeStreet";
import {Orders} from "../../../Orders/Orders";
import {SwitchButton} from "../../../SwitchButton/SwitchButton";
import {Categories} from "../../../Category/Categories";
import "../../../Category/Categories.css"
import {useNavigate} from "react-router-dom";
import {SpaRoutes} from "../../../../Routes/spaRoutes";

const DeliveryFood = () => {
    const navigate = useNavigate()
    return (
        <>
            <ChangeStreet/>
            <Orders/>
            <SwitchButton/>
            <div className="categories__container" onClick={() => navigate(SpaRoutes.USER.CREATE_OFFER)}>
                <div className="categories__item" >
                    <img className="categories__img" src="./Pictures/vkusImg.svg" alt=""/>
                    <div className="categories__text">Вкусно и точка</div>
                </div>
            </div>
        </>
    );
};

export default DeliveryFood;