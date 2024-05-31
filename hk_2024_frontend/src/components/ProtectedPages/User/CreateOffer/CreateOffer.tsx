import React, {useContext, useState} from 'react';
import "./CreateOffer.css"
import {ChangeStreet} from "../../../ChangeStreet/ChangeStreet";
import {Orders} from "../../../Orders/Orders";
import {SwitchButton} from "../../../SwitchButton/SwitchButton";
import {Categories} from "../../../Category/Categories";
import "../../../Category/Categories.css"
import Button from "../../../UI/Button/Button";
import UserService from "../../../../services/UserService";
import {Context} from "../../../../index";
import {useNavigate} from "react-router-dom";


const DeliveryFood = () => {
    const navigate = useNavigate()
    const {store} = useContext(Context)
    const [data, setData] = useState({burger: false, fries: false, cola: false})

    const makeOffer = () => {
        store.DataLoadingON()
        UserService.doOffer({Info1: "Доставка"})
            .then(() => {
                alert("Успешно")
                navigate("/")
            })
            .catch(() => alert("Что-то пошло не так"))
            .finally(() => store.DataLoadingOFF())
    }

    return (
        <>
            <ChangeStreet/>
            <Orders/>
            <SwitchButton/>

            <div className="categories__container">
                <div className="categories__item_sel" data-sel={data.burger}
                     onClick={() => setData({...data, burger: !data.burger})}>
                    <img className="categories__img" src="./Pictures/burgerImg.svg" alt=""/>
                    <div className="categories__text">Бургер</div>
                </div>
                <div className="categories__item_sel" data-sel={data.fries}
                     onClick={() => setData({...data, fries: !data.fries})}>
                    <img className="categories__img" src="./Pictures/burgerImg.svg" alt=""/>
                    <div className="categories__text">Картошка фри</div>
                </div>
                <div className="categories__item_sel" data-sel={data.cola}
                     onClick={() => setData({...data, cola: !data.cola})}>
                    <img className="categories__img" src="./Pictures/burgerImg.svg" alt=""/>
                    <div className="categories__text">Кола</div>
                </div>

            </div>
            <div className={"create-offer"}>
                <Button onClick={() => {
                    makeOffer()
                }} styleProps={"green"} size={"small"}>
                    Заказать
                </Button>
            </div>

        </>
    );
};

export default DeliveryFood;