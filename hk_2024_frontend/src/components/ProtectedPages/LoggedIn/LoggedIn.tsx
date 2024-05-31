import React, {useContext} from 'react';
import "./LoggedIn.css"
import {useNavigate} from "react-router-dom";
import {Context} from "../../../index";

const LoggedIn = () => {
    const {store} = useContext(Context)
    const navigate = useNavigate();

    return (
        <div className={"loggedIn"}>
            <div className={"loggedIn-header"}>
                Вы уже авторизованы
            </div>
            <div className={"loggedIn-content"}>

            </div>
        </div>
    );
};

export default LoggedIn;