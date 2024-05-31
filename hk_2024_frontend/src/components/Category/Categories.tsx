import './Categories.css'

export const Categories = () => {
    return (
        <>
            <div className="categories__container">
                <div className="categories__item">
                    <img className="categories__img" src="./Pictures/delivery.svg" alt=""/>
                    <div className="categories__text">Доставка</div>
                </div>
                <div className="categories__item">
                    <img className="categories__img" src="./Pictures/cleaning.svg" alt=""/>
                    <div className="categories__text">Клининг</div>
                </div>
            </div>
        </>
    )
}