import React, {useContext} from 'react';
import {Context} from "../../../index";
import ContextProviderContainer from "../../../ContextProviderContainer";

const GuardLayout = () => {
    const {store} = useContext(Context)
    return (
        <div className={"guard-content"}>
            <Context.Provider value={{store}}>
                <ContextProviderContainer/>
            </Context.Provider>
        </div>
    );
};

export default GuardLayout;