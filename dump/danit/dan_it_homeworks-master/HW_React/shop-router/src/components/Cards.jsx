import React, { useState, useEffect } from 'react';
import { ModalContainer } from './ModalContainer'
import PropTypes from 'prop-types';
import { Delete } from './Delete';


export const Cards = (props) => {
    const { id, price, photo, url, name, article, addFavorite, removeFavorite, addToBasket, item, } = props;
    const [addFavor, setAddFavor] = useState(JSON.parse(localStorage.getItem(`${id} addFavor`)) || false)

    // const [inBasket, setInBasket]= useState(true);

    // const showDeleteItem = () => setInBasket(!inBasket)

    useEffect(() => {
        localStorage.setItem(`${id} addFavor`, addFavor)
    }, [id, addFavor])

    return (
        <div className='cards' id={id}>
            <img className='cards__img' src={photo} alt="avatar-img" />
            {
                addFavor && <span className='fas fa-star' onClick={() => {
                    setAddFavor(false)
                    addFavorite(item)
                }}></span>
            }
            {
                !addFavor && <span className='far fa-star' onClick={() => {
                    removeFavorite(item);
                    setAddFavor(true)
                }}></span>
            }
            <div className='cards__title'>
                <span className='cards__title-name'>Name: {name}</span>
                <span className="cards__title-article">Article: {article}</span>
                <span className="cards__title-url">url: {url}</span>
                <div className="cards__footer">
                    <span className="cards__footer-price">{price}</span>
                    <ModalContainer
                        addToBasket={addToBasket}
                        item={item}
                    />
                    {/* {
                        !inBasket && <Delete />
                    } */}
                
                </div>
            </div>
        </div>
    )
}

Cards.propTypes = {
    id: PropTypes.number,
    price: PropTypes.string,
    photo: PropTypes.string,
    name: PropTypes.string,
    article: PropTypes.string,
    url: PropTypes.string,
    removeFavorite: PropTypes.func,
    addFavorite: PropTypes.func,
}

Cards.defaultProps = {
    price: '$5.00',
}