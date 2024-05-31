import "../../User/Offers/UserOffers.css"
import "./Passcodes.css"
import {useNavigate} from "react-router-dom";
import ToggleSwitch from "../../../UI/ToggleSwitch/ToggleSwitch";
import {useContext, useEffect, useState} from "react";
import UserService from "../../../../services/UserService";
import {Context} from "../../../../index";
import {IPasscode, Offer as OfferModel} from "../../../../models/models";
import axios from "axios";
import DeliveryService from "../../../../services/DeliveryService";
const Passcodes = () => {

    const { store } = useContext(Context);
    const navigate = useNavigate();
    const [passcodes, setPasscodes] = useState<[IPasscode] | null>()


    useEffect(() => {
        store.DataLoadingON();
        let endDate = new Date();
        endDate.setDate(endDate.getHours() + 6);
        let startDate = new Date();
        const data = new URLSearchParams({
            clientId: "9a93909d021c4feca9ffa8d823646dba",
            accessToken: "48e01c1eb1bed02396e7fbfe09a7aa10",
            lockId: "14673237",
            pageNo: "1",
            pageSize: `20`,
            orderBy: "0",
            searchStr: "Delivery",
            date: new Date().valueOf().toString()
        }).toString();

        axios.post(`https://euapi.ttlock.com/v3/lock/listKeyboardPwd`, data,{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            withCredentials: false,
        })
            .then(response => {
                console.log(response.data);
                setPasscodes(response.data.list)
            })
            .catch(error => {
                console.error('Error:', error);
            }).finally(() => store.DataLoadingOFF())
    }, [store]);


    return(
        <div className="user-offers">
            <div className="user-offers-header">
                <button className="back-btn" onClick={() => {
                    navigate(-1)
                }}></button>
                <h2>Ключи доступа</h2>
            </div>
            <div className="passcodes-content">
                <div className="passcodes-list">
                    {passcodes?.map((offer) => (
                        <div key={offer.keyboardPwdId} className="passcodes-item">
                            <div className="passcodes-left-part-item">
                                <p>№ {offer.keyboardPwdId}</p>
                                <p>Пинкод: {offer.keyboardPwd}</p>
                            </div>
                            <div className="passcodes-right-part-item">
                                <p>Тип: {offer.keyboardPwdType == 1? "Одноразовый" : "Обычный"}</p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Passcodes