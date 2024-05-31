import './SwitchButton.css'
import {useState} from "react";

export const SwitchButton = () => {
   const [isActiveCategory, setIsActiveCategory] = useState<boolean>(true)
   const [isActiveCompany, setIsActiveCompany] = useState<boolean>(false)

    const handleClickCategory = () => {
        setIsActiveCategory(true)
        setIsActiveCompany(false)
    }

    const handleClickCompany = () => {
        setIsActiveCategory(false)
        setIsActiveCompany(true)
    }

    return (
        <>
            <div className="switchButton__container">
                <div className={isActiveCategory ? "switchButton switchButton__active" : "switchButton"} onClick={handleClickCategory}>Категории</div>
                <div className={isActiveCompany ? "switchButton switchButton__active" : "switchButton"} onClick={handleClickCompany}>Компании</div>
            </div>
        </>
    )
}
