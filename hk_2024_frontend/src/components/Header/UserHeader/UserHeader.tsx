import React, {useContext} from 'react';
import {Context} from "../../../index";
import "./UserHeader.css"
import Burger from "../Burger/Burger";
import {observer} from "mobx-react-lite"
import {Link} from "react-router-dom";

const UserHeader = () => {
    const {store} = useContext(Context)

    return (
        <div className={"headerUser"}>
            <div className={"headerUser-info"}>
                <Burger/>


            </div>
            <div className={"headerUser-info-image"}>
                <img src={"/Pictures/logoUjin.png"}/>
            </div>
        </div>
    );

};


export default observer(UserHeader);