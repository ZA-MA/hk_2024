import React, {useContext, useEffect} from 'react';

import {Context} from "../../../index";

import {observer} from "mobx-react-lite";
import ContextProviderContainer from "../../../ContextProviderContainer";
import "./GuestLayout.css"


function GuestLayout(){
    const {store} = useContext(Context)

    /*async function refresh() {
        await store.checkAuth()
    }

    useEffect(()=> {
        refresh()
        store.setAuthLoading(false)
    },[])*/

    return(
        <div className={"guest-layout"}>
            <div className={"guest-content"}>
                <Context.Provider value={{store}}>
                    <ContextProviderContainer/>
                </Context.Provider>
            </div>
        </div>
    )
}export default observer(GuestLayout)
