import "./GuardHome.css"
import {useContext, useEffect, useRef, useState} from "react";
import {Context} from "../../../index";
import GuardService from "../../../services/GuardService";
import {AuthResponse} from "../../../models/response/AuthResponse";
import {IZayavk, Offer as OfferModel, Offer} from "../../../models/models";
import dayjs from "dayjs";
import Button from "../../UI/Button/Button";
import useOnClickOutside from "../../../hooks/useOnClickOutside";

const GuardHome = () => {
    const {store} = useContext(Context)
    const [offers, setOffers] = useState<Offer[]>([]);
    const [openPopup, setOpenPopup] = useState(false)
    const [zayavki, setZayavki] = useState<IZayavk[]>([])
    const ref = useRef(null)

    useOnClickOutside(ref, () => setOpenPopup(false))
    interface AuthResponse {
        offers: OfferModel[];
    }



    useEffect(() => {
        store.DataLoadingON();
        GuardService.getAllOffers()
            .then(response => {
                const data: AuthResponse = response.data;
                if (Array.isArray(data.offers)) {
                    setOffers(data.offers);
                } else {
                    console.error("Response data does not contain an array:", data);
                    alert('Неправильный формат данных');
                }
                GuardService.getAllZayavki()
                    .then(r => setZayavki(r.data))
                    .catch(() => alert('Что-то пошло не так'))
                    .finally()
            })
            .catch(error => {
                console.error("Error fetching offers:", error);
                alert('Что-то пошло не так');
            })
            .finally(() => {
                store.DataLoadingOFF();
            });
    }, []);
    return (
        <div className="security-container">
            <div className="security-title">
                <h2>Охранный пост</h2>
                <button className="logout-btn" onClick={() => {
                    store.logout()
                }}>Выйти
                </button>
            </div>
            <div className="sec-adress">
                <p>Адрес: шоссе космонавтов, д. 111д, подъезд 2, оф. 304</p>
                <Button onClick={() => setOpenPopup(!openPopup)} styleProps={"green"} size={"small"}>Заявки</Button>
            </div>
            <div className="offers-list">
                {offers.map((offer) => (
                    <div key={offer.id} className="offer-details">
                        <div className="offer-details-left">
                            <div className="offer-title">
                                <p>Заказ №: {offer.id}</p>

                                <p>({offer.type})</p>
                                {/*<p>Статус: {offer.isActive ? 'Активный' : 'Неактивный'}</p>*/}
                            </div>
                            <p>Жилец: {offer.user.lastName} {offer.user.firstName} {offer.user.patronymic} (кв. {offer.user.numberFlat})</p>
                            <p>Код доступа: {offer.pin ?? "Не указан"}</p>

                        </div>
                        <div className="offer-details-right">
                            <p>Дата: {dayjs(offer.dateStart).format('DD.MM.YYYY HH:mm')}</p>
                        </div>

                    </div>
                ))}
            </div>
            {
                openPopup &&  zayavki.length > 0 &&
                <div className={"popup"}>
                    <div className={"popup-content"} ref={ref}>
                        {
                            zayavki.map((z) => {
                                return (<div key={z.id} className="offer-details">
                                    <div className="offer-details-left">
                                        <div className="offer-title">
                                            <p>Заявка №: {z.id}</p>

                                            <p>Дата: {dayjs(z.date).format("DD-MM-YYYY")}</p>
                                            <p>Заказ №: {z.offer_id}</p>

                                        </div>
                                        Сообщение
                                        <p>{z.text}</p>


                                    </div>


                                </div>)
                            })
                        }
                    </div>
                </div>
            }

        </div>
    )
}
export default GuardHome;