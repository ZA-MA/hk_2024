import React, {useContext, useEffect, useRef, useState} from 'react';
import './Burger.css';
import {Link, useLocation} from "react-router-dom";
import {Context} from "../../../index";
import {SpaRoutes} from "../../../Routes/spaRoutes";
import {UserBurgerList} from "../../../data/BurgerData/UserBurgerList";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import {IBurgerList} from "../../../models/models";
import Button from "../../UI/Button/Button";
import {observer} from "mobx-react-lite";


const Burger = () => {
    const {store} = useContext(Context)

    const [isOpen, setIsOpen] = useState(false);

    const ref = useRef(null)

    const location = useLocation()

    const handlerBurger = () => {
        setTimeout(() => setIsOpen(!isOpen), 350)
    }

    let list: JSX.Element[] = [];

    if (store.role === "User")
        UserBurgerList.forEach((i: IBurgerList, index) => {
            list.push(
                <Link to={i.link} onClick={handlerBurger} className={"burger-link"} key={index} data-sel={location.pathname === i.link}>
                    {i.name}
                </Link>
            )
        })

    useOnClickOutside(ref, () => {
        if (isOpen) handlerBurger()
    });

    return (
        <>
            <div className={"burger-button"} onClick={handlerBurger}>
                <img src={"/Pictures/burgerIcon.svg"}/>
            </div>

            <div className={`burger-content ${isOpen ? "burger-open" : "burger-close"}`} ref={ref}>

                <div className={"burger-content-top"}>
                    <div className={"burger-info"}>
                        <div className={"burger-info-image"}>
                            <img className={"burger-user-avatar"} src={"/Pictures/userTemp.svg"}/>
                        </div>

                        <div className={"burger-info-names"}>
                            {store.user.firstName} {store.user.lastName}
                        </div>
                    </div>

                    <div className={"burger-buttons-container"}>
                        <div className={"burger-links"}>
                            {list}
                        </div>
                    </div>
                </div>
                <div className={"burger-content-bottom"}>
                    <div className={"burger-number"}>
                        <div>Телефон УК</div>
                        <div className={"enable-select"}>+7-919-444-48-90</div>
                    </div>
                    <div className={"burger-exit"}>
                        <Button onClick={() => store.logout()} styleProps={"white1"} size={"small"}>Выйти</Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default observer(Burger);