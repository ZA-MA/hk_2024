import {BeatLoader} from "react-spinners";
import React from "react";
import './Loader.css'

interface Interface {
    load:boolean
}

export const Loader = ({load}:Interface) => {
    return(
        <div style={load?{display:"flex"}:{display:"none"}} id={'loader-container'}>
            <BeatLoader color="#030303" loading={load} />
        </div>
    )
}
