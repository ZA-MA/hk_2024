import React, {useContext, useEffect, useState} from 'react';

import "./DeliveryHome.css"
import {ChangeStreet} from "../../ChangeStreet/ChangeStreet";
import {Orders} from "../../Orders/Orders";
import {SwitchButton} from "../../SwitchButton/SwitchButton";
import {Categories} from "../../Category/Categories";
import "../../Category/Categories.css"
import {useNavigate} from "react-router-dom";
import {SpaRoutes} from "../../../Routes/spaRoutes";
import {Context} from "../../../index";
import {Offer as OfferModel} from "../../../models/models";
import UserService from "../../../services/UserService";
import DeliveryService from "../../../services/DeliveryService";
import dayjs from "dayjs";


const DeliveryHome = () => {
    const { store } = useContext(Context);
    const navigate = useNavigate();
    const [offers, setOffers] = useState<OfferModel[]>([]);

    const handleOfferClick = (offerId: number) => {
        navigate(`/offer/${offerId}`);
    };

    interface AuthResponse {
        offers: OfferModel[];
    }

    useEffect(() => {
        store.DataLoadingON();
        DeliveryService.getAllOffers()
            .then(response => {
                const data: AuthResponse = response.data;
                if (Array.isArray(data)) {
                    setOffers(data);
                } else {
                    setOffers([]);
                    // console.error("Response data does not contain an array:", data);
                    // alert('Неправильный формат данных');
                }
            })
            .catch(error => {
                setOffers([]);
                console.error("Error fetching user offers:", error);
                alert('Что-то пошло не так');
            })
            .finally(() => {
                store.DataLoadingOFF();
            });
    }, [store]);

    return (
        <div className="page courier">
            <div className="courirer-title">
                <h2 className="courirer-name">Courier Name</h2>
                <button className="logout-btn" onClick={() => {store.logout()}}>Выйти</button>
            </div>

            <p className="offers-title">Заказы в процессе:</p>
            {offers.length === 0 ? (
                <p className="no-offers">Заказов нет</p>
            ) : (
                offers.map((offer) => (
                    <div key={offer.id} className="offer-container" onClick={() => handleOfferClick(offer.id)}>
                        <div className="of-data">
                            <p className="of-adress">Адрес: {offer.user.city}</p>
                            <p className="of-phone">Телефон: {offer.user.phone}</p>
                            <p className="of-dates">Дата: {dayjs(offer.dateStart).format('DD.MM.YYYY')}</p>
                            <p className="of-type">Тип: {offer.type}</p>
                            <p className="of-status">Статус: {offer.isActive ? 'Активный' : 'Неактивный'}</p>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default DeliveryHome;