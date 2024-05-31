import React, {useContext} from "react";
import App from "./App";
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import {ErrorPage} from "./components/UI/ErrorPage/ErrorPage";
import {Loader} from "./components/UI/Loader/Loader";

const ContextProviderContainer = () => {
    const {store} = useContext(Context)

    return(
        <>
            <Loader load={store.isAuthLoading || store.isDataLoading} />
            <ErrorPage error={store.isError}/>
            {!store.isAuthLoading&&<App/>}
        </>
    )
}
export default observer(ContextProviderContainer);
