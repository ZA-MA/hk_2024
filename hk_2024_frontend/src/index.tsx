import './index.css';
import {BrowserRouter, HashRouter} from "react-router-dom";

import ReactDOM from 'react-dom';
import React, {createContext} from 'react';
import Store from './store/store'

import Layout from "./components/Layout/Layout";
import App from "./App";




interface IStore {
    store:Store;
}

const store = new Store();

export const Context = createContext<IStore>({store})

ReactDOM.render(
    <HashRouter>
        <Context.Provider value={{store}}>
            <Layout/>
        </Context.Provider>
    </HashRouter>
    ,
    document.getElementById("root")
);




