import React from "react";

interface Interface {
    error:boolean
}

export const ErrorPage = ({error}:Interface) => {
    return(
        <div style={error?{display:"flex"}:{display:"none"}} id={'loader-container'}>
            Что-то пошло не так
        </div>
    )
}
