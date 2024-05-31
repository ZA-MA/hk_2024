import "./UserOffers.css"
import {useNavigate} from "react-router-dom";
import ToggleSwitch from "../../../UI/ToggleSwitch/ToggleSwitch";
import {useContext, useEffect, useState} from "react";
import UserService from "../../../../services/UserService";
import {Context} from "../../../../index";
import {Offer as OfferModel} from "../../../../models/models";
const UserOffers = () => {
    const [activeTab, setActiveTab] = useState('current');
    const { store } = useContext(Context);
    const navigate = useNavigate();
    const [offers, setOffers] = useState<OfferModel[]>([]);
    const handleTabChange = (type: string) => {
        setActiveTab(type);
    };
    interface AuthResponse {
        offers: OfferModel[];
    }
    useEffect(() => {
        store.DataLoadingON();
        UserService.getUserOffers()
            .then(response => {
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
    const filteredOffers = activeTab === 'current'
        ? offers.filter(offer => offer.isActive)
        : offers.filter(offer => !offer.isActive);

    return(
        <div className="user-offers">
            <div className="user-offers-header">
                <button className="back-btn" onClick={() => {
                    navigate(-1)
                }}></button>
                <h2>История заказов</h2>
            </div>
            <div className="user-offers-content">
                <ToggleSwitch onChange={handleTabChange}/>
                <div className="offers-list">
                    {filteredOffers.map((offer) => (
                        <div key={offer.id} className="offer-item">
                            <div className="left-part-item">

                            </div>
                            <div className="right-part-item">
                                <p>Заказ № {offer.id}</p>
                                <p>Тип: {offer.type}</p>
                                <p>Статус: {offer.isActive ? 'Активный' : 'Неактивный'}</p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default UserOffers