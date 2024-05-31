import './MainPage.css'
import {Orders} from "../../Orders/Orders";
import {ChangeStreet} from "../../ChangeStreet/ChangeStreet";
import {SwitchButton} from "../../SwitchButton/SwitchButton";
import {Categories} from "../../Category/Categories";

export const MainPage = () => {
    return (
        <>
        <ChangeStreet/>
        <Orders/>
        <SwitchButton/>
        <Categories/>
        </>
    )
}