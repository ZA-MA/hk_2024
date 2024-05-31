import React from 'react';
import "./Delivery.css"
import {ChangeStreet} from "../../../ChangeStreet/ChangeStreet";
import {Orders} from "../../../Orders/Orders";
import {SwitchButton} from "../../../SwitchButton/SwitchButton";
import {Categories} from "../../../Category/Categories";
import "../../../Category/Categories.css"
import {useNavigate} from "react-router-dom";
import {SpaRoutes} from "../../../../Routes/spaRoutes";

const Delivery = () => {
    const navigate = useNavigate()
    return (
        <>
            <ChangeStreet/>
            <Orders/>
            <SwitchButton/>
            <div className="categories__container">
                <div className="categories__item" onClick={() => navigate(SpaRoutes.USER.DELIVERY_FOOD)}>
                    <img className="categories__img" src="./Pictures/restImg.svg" alt=""/>
                    <div className="categories__text">Готовая еда</div>
                </div>
                <div className="categories__item">
                    <img className="categories__img" src="./Pictures/prodImg.svg" alt=""/>
                    <div className="categories__text">Продукты</div>
                </div>
            </div>
        </>
    );
};

export default Delivery;