import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import './Header.css'

import UserHeader from "./UserHeader/UserHeader";




function Header(){
    const {store} = useContext(Context)

    return(
        <>

            {(store.role === 'User' && (store.isAuth)) && <UserHeader/>}

        </>
    )
}export default observer(Header)
