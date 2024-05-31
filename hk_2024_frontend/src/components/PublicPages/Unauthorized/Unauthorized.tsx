import React from 'react';
import "./Unauthorized.css"
import {useNavigate} from "react-router-dom";


const Unauthorized = () => {
    const navigate = useNavigate()
    return (
        <div className={"unauthorized"}>
            <div className={"loggedIn-header"}>
                У вас нет доступа к этой странице
            </div>
            <div className={"loggedIn-content"}>

            </div>
        </div>
    );
};

export default Unauthorized;