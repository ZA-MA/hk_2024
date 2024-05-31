import React from 'react';
import "./Button.css"

interface IButton {
    type?: "default" | "edit" | "add" | "delete" | "back"
    styleProps?: "green" | "white1" | "white2",
    children?: React.ReactNode
    name?: string,
    size?: "small" | "medium" | "large",
    onClick: () => any,
    selected?: boolean,
    disabled?: boolean
}

const Button = ({
                    children,
                    name,
                    type = "default",
                    styleProps = "green",
                    size = "medium",
                    onClick,
                    selected,
                    disabled
                }: IButton) => {
    return (
        <>
            {type === "default" &&
                <button className={`button`}
                        name={name}
                        disabled={disabled}
                        data-style={styleProps}
                        data-size={size}
                        data-sel={selected}
                        onClick={onClick}
                >
                    {children}
                </button>
            }
            {type === "edit" &&
                <button className={`button-edit`}
                        name={name}
                        disabled={disabled}
                        data-style={styleProps}
                        data-size={size}
                        data-sel={selected}
                        onClick={onClick}
                >
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.8603 1.71026C14.0855 1.48508 14.3528 1.30646 14.647 1.18459C14.9413 1.06272 15.2566 1 15.575 1C15.8935 1 16.2088 1.06272 16.503 1.18459C16.7972 1.30646 17.0646 1.48508 17.2897 1.71026C17.5149 1.93544 17.6935 2.20276 17.8154 2.49697C17.9373 2.79118 18 3.10651 18 3.42497C18 3.74342 17.9373 4.05875 17.8154 4.35296C17.6935 4.64717 17.5149 4.9145 17.2897 5.13968L5.71545 16.714L1 18L2.28603 13.2845L13.8603 1.71026Z" stroke="#AA0A22" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            }
            {type === "add" &&
                <button className={`button-add`}
                        name={name}
                        disabled={disabled}
                        data-style={styleProps}
                        data-size={size}
                        data-sel={selected}
                        onClick={onClick}
                >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.76733 0V20" stroke="#AA0A22" />
                        <path d="M0 10L20 10" stroke="#AA0A22" />
                    </svg>
                </button>
            }
            {type === "delete" &&
                <button className={`button-delete`}
                        name={name}
                        disabled={disabled}
                        data-style={styleProps}
                        data-size={size}
                        data-sel={selected}
                        onClick={onClick}
                >
                    <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 4.2H2.6H15.4" stroke="#AA0A22" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M13.8001 4.2V15.4C13.8001 15.8243 13.6315 16.2313 13.3315 16.5314C13.0314 16.8314 12.6244 17 12.2001 17H4.2001C3.77575 17 3.36878 16.8314 3.06873 16.5314C2.76867 16.2313 2.6001 15.8243 2.6001 15.4V4.2M5.0001 4.2V2.6C5.0001 2.17565 5.16867 1.76869 5.46873 1.46863C5.76879 1.16857 6.17575 1 6.6001 1H9.8001C10.2244 1 10.6314 1.16857 10.9315 1.46863C11.2315 1.76869 11.4001 2.17565 11.4001 2.6V4.2" stroke="#AA0A22" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            }
            {type === "back" &&
                <button className={`button-delete`}
                        name={name}
                        disabled={disabled}
                        data-style={styleProps}
                        data-size={size}
                        data-sel={selected}
                        onClick={onClick}
                >
                    <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26 13.5C26.8284 13.5 27.5 12.8284 27.5 12C27.5 11.1716 26.8284 10.5 26 10.5V13.5ZM0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807612 11.0711 0.807612 10.4853 1.3934L0.93934 10.9393ZM26 10.5H2V13.5H26V10.5Z" fill="#AA0A22" />
                    </svg>
                </button>
            }
        </>
    );
};

export default Button;