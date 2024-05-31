import React, {useContext} from 'react';
import {Context} from "../../../index";
import ContextProviderContainer from "../../../ContextProviderContainer";
import Header from "../../Header/Header";
import "./UserLayout.css"

const UserLayout = () => {
    const {store} = useContext(Context)

    return (
        <div className={"user-layout"}>
        <Header/>
        <div className={"user-content"}>
            <Context.Provider value={{store}}>
                <ContextProviderContainer/>
            </Context.Provider>
        </div>
        </div>
    );
};

export default UserLayout;