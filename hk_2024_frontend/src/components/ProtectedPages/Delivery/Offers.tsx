import React, { useContext, useEffect, useState } from 'react';
import "./Offers.css";
import { useNavigate } from "react-router-dom";
import UserService from "../../../services/UserService";
import { Context } from "../../../index";
import { Offer as OfferModel } from "./../../../models/models";

const Offers = () => {
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
        UserService.getUserOffers()
            .then(response => {
                // Извлекаем массив offers из response.data
                const data: AuthResponse = response.data;
                if (Array.isArray(data.offers)) {
                    setOffers(data.offers);
                } else {
                    console.error("Response data does not contain an array:", data);
                    alert('Неправильный формат данных');
                }
            })
            .catch(error => {
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
                <button className="logout-btn">Выйти</button>
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
                            <p className="of-dates">Дата начала: {offer.dateStart}</p>
                            <p className="of-dates">Дата окончания: {offer.dateEnd}</p>
                            <p className="of-type">Тип: {offer.type}</p>
                            <p className="of-status">Статус: {offer.isActive ? 'Активный' : 'Неактивный'}</p>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Offers;
