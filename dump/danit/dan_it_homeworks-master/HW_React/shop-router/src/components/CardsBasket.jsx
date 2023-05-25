import React from 'react';



export const CardsBasket = (props) => {
    const { id, price, photo, url, name, article, item, addToBasket, removeFromBasket} = props;

    return (
        <div className='cards' id={id}>
        <img className='cards__img' src={photo} alt="avatar-img" />
            {/* <span class="fas fa-trash-alt"></span> */}
            <div className='cards__title'>
                <span className='cards__title-name'>Name: {name}</span>
                <span className="cards__title-article">Article: {article}</span>
                <span className="cards__title-url">url: {url}</span>
                <div className="cards__footer">
                    <span className="cards__footer-price">{price}</span>
                    <span className="fas fa-trash-alt"></span>
                </div>
            </div>
        </div>
    )
}