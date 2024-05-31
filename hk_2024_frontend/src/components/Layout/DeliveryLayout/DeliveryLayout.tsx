import React, {useContext} from 'react';
import {Context} from "../../../index";
import ContextProviderContainer from "../../../ContextProviderContainer";
import Header from "../../Header/Header";
import "./DeliveryLayout.css"

const DeliveryLayout = () => {
    const {store} = useContext(Context)

    return (
        <div className={"delivery-layout"}>

            <div className={"delivery-content"}>
                <Context.Provider value={{store}}>
                    <ContextProviderContainer/>
                </Context.Provider>
            </div>
        </div>
    );
};

export default DeliveryLayout;