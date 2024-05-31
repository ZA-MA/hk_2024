import React, {useContext, useEffect, useState} from "react";
import "./Offers.css";
import {Context} from "../../../index";
import DeliveryService from "../../../services/DeliveryService";
import {useNavigate, useParams} from "react-router-dom";
import {IOffer} from "../../../models/models";
import axios from "axios";

const Offer = () => {
    const navigate = useNavigate()
    const {store} = useContext(Context)
    const {id} = useParams()
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [accessCode, setAccessCode] = useState("********");
    const [offer, setOffer] = useState<IOffer>({})
    const handleDescriptionClick = () => {
        setIsModalVisible(true);
        setTimeout(()=> {
            setIsModalVisible(false)
        }, 3000)
    };
    const fetchAccessCode = async () => {
        store.DataLoadingON()
        let endDate = new Date();
        endDate.setDate(endDate.getHours() + 6);
        let startDate = new Date();




        const data = new URLSearchParams({
            clientId: "9a93909d021c4feca9ffa8d823646dba",
            accessToken: "48e01c1eb1bed02396e7fbfe09a7aa10",
            lockId: "14673237",
            keyboardPwdType: "1",
            keyboardPwdName: `Delivery№${offer.id}`,
            startDate: startDate.valueOf().toString(),
            endDate: endDate.valueOf().toString(),
            date: new Date().valueOf().toString()
        }).toString();

        axios.post(`https://euapi.ttlock.com/v3/keyboardPwd/get`, data,{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            withCredentials: false,
        })
            .then(response => {
                console.log(response.data);
                setAccessCode(response.data.keyboardPwd)
                DeliveryService.updatePinCode({Number1: offer.id, Info1: response.data.keyboardPwd})
            })
            .catch(error => {
                console.error('Error:', error);
            }).finally(() => store.DataLoadingOFF())

        /*const client = await createClient({
            baseUrl: '',
            clientId: '9a93909d021c4feca9ffa8d823646dba',
            clientSecret: 'ce8318e454df38d1b6e60d4841b2cc17'
        })
        client.passcode.add(
            {
                clientId: "9a93909d021c4feca9ffa8d823646dba",
                accessToken: "48e01c1eb1bed02396e7fbfe09a7aa10",
                lockId: 14673237,
                keyboardPwd: "1",
                keyboardPwdName: `Delivery№${offer.id}`,
                startDate: startDate.valueOf(),
                endDate: endDate.valueOf(),
                date: new Date().valueOf()
            }
        )*/


    };

    const closeOffer = () => {
        store.DataLoadingON()
        DeliveryService.closeOffer({Number1: offer.id})
            .then(() => {
                alert("Заказ закрыт")
                navigate(-1)
            })
            .catch(() => alert("Что-то пошло не так"))
            .finally(() => store.DataLoadingOFF())
    }


    useEffect(() => {
        store.DataLoadingON()
        DeliveryService.getOffer({Number1: Number(id)})
            .then((r) => {
                setOffer(r.data)
                if(r.data.pin != null){
                    setAccessCode(r.data.pin)
                }
            })
            .catch(() => alert("Что-то пошло не так"))
            .finally(() => store.DataLoadingOFF())

    }, [])

    const noWay = () => {
        store.DataLoadingON()
        DeliveryService.creatZayavka({Number1: offer.id})
            .then(() => {
                alert("Заявка была отправлена\nНомер УК: +7-919-444-48-90")
            })
            .catch(() => alert("Что-то пошло не так"))
            .finally(() => store.DataLoadingOFF())
    }

    return (
        <div className="offer-details">
            <p className="of-id">Заказ № {offer.id}</p>
            <p className="of-adress">Адрес: г. {offer.user?.city}, ул. {offer.user?.street}, кв. {offer.user?.numberFlat}</p>
            <p className="of-phone">Телефон: {offer.user?.phone}</p>
            <p className="of-phone">Клиент: {offer.user?.firstName}</p>
            <div className="pin-div">
                <p className="of-pin">Код доступа к двери: {accessCode}</p>
                <div className="btn-modal">
                    <button className="pin-description" onClick={handleDescriptionClick}>?</button>
                    {isModalVisible && (
                        <div className="descr-modal show">
                            Если код доступа скрыт, необходимо нажать кнопку "Подошел к дому" и находится по адресу
                            доставки.
                        </div>
                    )}
                </div>
            </div>
            {accessCode === "********"?
                <button className="coming" onClick={fetchAccessCode}>Подошел к дому</button>
                :
                <div className="two-btns">
                    <button className="coming" onClick={closeOffer}>Закрыть заказ</button>
                    <button className="coming" onClick={noWay}>Не могу войти</button>
                </div>

            }

        </div>
    );
};

export default Offer;
