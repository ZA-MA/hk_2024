import './ChangeStreet.css'

export const ChangeStreet = () => {
    return (
        <>
            <div className="changeStreet__container">
                <div className="changeStreet__select">ул.Демовая, д.56, кв.999</div>
                <div className="changeStreet__search">
                    <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8.5" cy="8.5" r="7.5" stroke="#23CEC2" strokeWidth="2"/>
                        <path d="M14 15L20.5 21.5" stroke="#23CEC2" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </div>
            </div>
        </>
    )
}