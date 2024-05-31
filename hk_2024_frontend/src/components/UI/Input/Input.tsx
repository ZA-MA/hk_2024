import React, {useState} from 'react';
import "./Input.css"
import InputMask from "react-input-mask";

interface IInput {
    type?: string
    name?: string,
    value?: any,
    placeHolder?: string,
    onChange?: (val: any) => any,
    icon?: boolean,
    error?: boolean,
    errorMsg?: [string],
    mask?: string,
    styleInputField?: string,
    disabled?: boolean,
    required?: boolean,
    inputSize?: "large" | "small" | "medium",
    min?: string,
    max?: string,
    step?: string,
    numberButtons?: boolean,
    ref?: any
}

function Input(
    {
        type = "text", name, value, placeHolder,
        onChange, icon, error, errorMsg, mask = "",
        styleInputField = "", disabled=false,
        required=false, inputSize, min, max, step, numberButtons = true, ref
    }: IInput) {
    const [isRevealPwd, setIsRevealPwd] = useState(false);


    //icon ? errorMsg ? "75px" : "44px" : "21px"
    return (
        <>
            {type === "text" &&
                <div className={"input"}>
                    <input
                        ref={ref}
                        required={required}
                        style={{paddingRight: icon && errorMsg? "80px" : icon || errorMsg? "50px" : "21px", borderColor: errorMsg ? "#db2020" : ""}}
                        className={"input-field " + styleInputField}
                        type={"text"}
                        name={name}
                        value={value}
                        placeholder={placeHolder}
                        onChange={onChange}
                        disabled={disabled}
                        data-size={inputSize}
                    />
                    {errorMsg &&
                        <div className={"input-error"} style={{right: icon? "50px" : "21px"}}>
                            <img
                                className={"input-error-image"}
                                src={"/Pictures/errorIcon.svg"}
                            />
                            <div className={"input-error-text"}>
                                {errorMsg.map((e: any) => <div>{e}</div>)}
                            </div>
                        </div>
                    }
                    {icon &&
                        <img className={"input-image"}
                             src={"/Pictures/InputIcon.svg"}
                        />
                    }
                </div>
            }
            {type === "number" &&
                <div className={"input"} style={{borderColor: error ? "#db2020" : ""}}>
                    <input
                        style={{paddingRight: icon && errorMsg? "80px" : icon || errorMsg? "50px" : "21px", borderColor: errorMsg ? "#db2020" : ""}}
                        className={"input-field"}
                        data-numberButtons={numberButtons}
                        type={"number"}
                        name={name}

                        value={value}
                        placeholder={placeHolder}
                        onChange={onChange}
                        disabled={disabled}
                        data-size={inputSize}
                        min={min}
                        max={max}
                        step={step}
                    />
                    {errorMsg &&
                        <div className={"input-error"} style={{right: icon? "50px" : "21px"}}>
                            <img
                                className={"input-error-image"}
                                src={"/Pictures/errorIcon.svg"}
                            />
                            <div className={"input-error-text"}>
                                {errorMsg.map((e: any) => <div>{e}</div>)}
                            </div>
                        </div>
                    }
                    {icon &&
                        <img className={"input-image"}
                             src={"/Pictures/InputIcon.svg"}
                        />
                    }
                </div>
            }
            {type === "telephone" &&
                <div className={"input"} style={{borderColor: error ? "#db2020" : ""}}>
                    <InputMask
                        style={{paddingRight: icon && errorMsg? "80px" : icon || errorMsg? "50px" : "21px", borderColor: errorMsg ? "#db2020" : ""}}
                        className={"input-field"}
                        mask="+7 (999) 999-99-99" //+7 (999) 999-99-99
                        name={name}
                        value={value}
                        placeholder={placeHolder}
                        onChange={onChange}
                        disabled={disabled}
                        data-size={inputSize}
                    />
                    {errorMsg &&
                        <div className={"input-error"} style={{right: icon? "50px" : "21px"}}>
                            <img
                                className={"input-error-image"}
                                src={"/Pictures/errorIcon.svg"}
                            />
                            <div className={"input-error-text"}>
                                {errorMsg.map((e: any) => <div>{e}</div>)}
                            </div>
                        </div>
                    }
                    {icon &&
                        <img className={"input-image"}
                             src={"/Pictures/InputIcon.svg"}
                        />
                    }
                </div>
            }
            {type === "inputMask" &&
                <div className={"input"} style={{borderColor: error ? "#db2020" : ""}}>
                    <InputMask
                        style={{paddingRight: icon && errorMsg? "80px" : icon || errorMsg? "50px" : "21px", borderColor: errorMsg ? "#db2020" : ""}}
                        className={"input-field"}
                        mask={mask}
                        name={name}
                        value={value}
                        placeholder={placeHolder}
                        onChange={onChange}
                        disabled={disabled}
                        data-size={inputSize}
                    />
                    {errorMsg &&
                        <div className={"input-error"} style={{right: icon? "50px" : "21px"}}>
                            <img
                                className={"input-error-image"}
                                src={"/Pictures/errorIcon.svg"}
                            />
                            <div className={"input-error-text"}>
                                {errorMsg.map((e: any) => <div>{e}</div>)}
                            </div>
                        </div>
                    }
                    {icon &&
                        <img className={"input-image"}
                             src={"/Pictures/InputIcon.svg"}
                        />
                    }
                </div>
            }
            {
                type === "password" &&
                <div className={"input password"} style={{borderColor: error ? "#db2020" : ""}}>
                    <input
                        style={{paddingRight: icon && errorMsg? "80px" : icon || errorMsg? "50px" : "21px", borderColor: errorMsg ? "#db2020" : ""}}
                        name={name}
                        className={"input-field"}
                        type={"text"}
                        onChange={onChange}
                        value={value}
                        placeholder={placeHolder}
                        disabled={disabled}
                        data-size={inputSize}
                        data-reval={isRevealPwd}
                    />
                    {errorMsg &&
                        <div className={"input-error"} style={{right: icon? "50px" : "21px"}}>
                            <img
                                className={"input-error-image"}
                                src={"/Pictures/errorIcon.svg"}
                            />
                            <div className={"input-error-text"}>
                                {errorMsg.map((e: any) => <div>{e}</div>)}
                            </div>
                        </div>
                    }
                    {icon &&
                        <img
                            className={"input-image"}
                            src={isRevealPwd ? "/Pictures/closeEye.svg" : "/Pictures/openEye.svg"}
                            onClick={() => setIsRevealPwd(prevState => !prevState)}
                        />
                    }
                </div>
            }
            {
                type === "passwordReal" &&
                <div className={"input password"} style={{borderColor: error ? "#db2020" : ""}}>
                    <input
                        style={{paddingRight: icon && errorMsg? "80px" : icon || errorMsg? "50px" : "21px", borderColor: errorMsg ? "#db2020" : ""}}
                        name={name}
                        className={"input-field"}
                        type={isRevealPwd ? "text" : "password"}
                        onChange={onChange}
                        value={value}
                        placeholder={placeHolder}
                        disabled={disabled}
                        data-size={inputSize}
                    />
                    {errorMsg &&
                        <div className={"input-error"} style={{right: icon? "50px" : "21px"}}>
                            <img
                                className={"input-error-image"}
                                src={"/Pictures/errorIcon.svg"}
                            />
                            <div className={"input-error-text"}>
                                {errorMsg.map((e: any) => <div>{e}</div>)}
                            </div>
                        </div>
                    }
                    {icon &&
                        <img
                            className={"input-image"}
                            src={isRevealPwd ? "/Pictures/closeEye.svg" : "/Pictures/openEye.svg"}
                            onClick={() => setIsRevealPwd(prevState => !prevState)}
                        />
                    }
                </div>
            }
            {type === "inputMaskFIO" &&
                <div className={"input"} style={{borderColor: error ? "#db2020" : ""}}>
                    <InputMask
                        style={{paddingRight: icon && errorMsg? "80px" : icon || errorMsg? "50px" : "21px", borderColor: errorMsg ? "#db2020" : ""}}
                        className={"input-field"}
                        mask={mask}
                        name={name}
                        value={value}
                        placeholder={placeHolder}
                        onChange={onChange}
                        disabled={disabled}
                        data-size={inputSize}
                    />
                    {errorMsg &&
                        <div className={"input-error"} style={{right: icon? "50px" : "21px"}}>
                            <img
                                className={"input-error-image"}
                                src={"/Pictures/errorIcon.svg"}
                            />
                            <div className={"input-error-text"}>
                                {errorMsg.map((e: any) => <div>{e}</div>)}
                            </div>
                        </div>
                    }
                    {icon &&
                        <img className={"input-image"}
                             src={"/Pictures/InputIcon.svg"}
                        />
                    }
                </div>
            }
        </>
    )

};

export default Input;