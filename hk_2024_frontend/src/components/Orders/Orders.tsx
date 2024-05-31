import './Orders.css'
import {useNavigate} from "react-router-dom";

export const Orders = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="orders__container" onClick={()=> {navigate("/userOffers")}}>
                <div className="orders__text">Заказы</div>
                <div className="orders__num"><span className="orders__number">54</span>
                    <svg className="orders__svg" width="6" height="14" viewBox="0 0 6 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5 7L1 12.5" stroke="#ADADAD" strokeLinecap="square"/>
                    </svg>
                </div>
            </div>
        </>
    )
}