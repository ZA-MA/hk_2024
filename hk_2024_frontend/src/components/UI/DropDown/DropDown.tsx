import React, {useRef, useState} from 'react';
import "./DropDown.css"
import useOnClickOutside from "../../../hooks/useOnClickOutside";
export interface IDropdownOption{
    key?: string | number;
    id?: number;
    name:string;
    visible?: boolean;
    notBlocked?: boolean;
}

interface IDropDown{
    options: IDropdownOption[]
    value?: string,
    onChange: (val:any)=>any,
    name?: string,
    placeHolder: string,
    size: "large" | "medium" | "small",
    errorMsg?: [string],
    icon?: boolean,
    disabled?: boolean,
    styleProps?: "green" | "white"
}

const DropDown = ({options, value, onChange, name, placeHolder, size, errorMsg, icon=true, disabled=false, styleProps="green"}:IDropDown) => {

    const [show, setShow] = useState(false)
    const refDropDown = useRef(null)
    const dropDownHandler = (item:any) => {
        setShow(false)
        onChange(item)
    }

    const ListDropdown = options.map((item, index) => {
        return (
            <div
                className={`dropdown-item ${value === item.name&& " dropdown-item-select"}`}
                onClick={() => dropDownHandler(item)}
                key={index}
            >
                <div>{item.name}</div>
            </div>
        )
    })

    useOnClickOutside(refDropDown, () => setShow(false))

    return (
        <div className={"dropDown"} ref={refDropDown}>
            <div className={"dropDown-content"} onClick={() => !disabled? setShow(!show) : undefined} data-size={size} data-style={styleProps}>
                <div className={"dropDown-value"} data-value={value&&true}>
                    {value? value : placeHolder}
                </div>
                {icon &&
                    <svg className={"dropDown-icon"} data-show={show} width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2L8 8L14 2" stroke={styleProps === "green" ? "#FFFFFF" : "#000000"} strokeWidth="2.62857" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                }
            </div>
            <div className={"dropDown-list"} data-show={show} data-size={size}>
                <div className={"dropDown-list-content"}>{ListDropdown}</div>
            </div>
        </div>
    );
};

export default DropDown;