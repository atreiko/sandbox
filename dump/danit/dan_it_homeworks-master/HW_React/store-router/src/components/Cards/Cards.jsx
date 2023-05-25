import React, { useState } from 'react';

import { Button } from '../Button/Button';
import { ContainerItem, Photo, Title, Footer, FaStar } from './StyledCards';

export const Cards = (props) => {
    const { id, price, photo, url, name, article, favorite, setFavorite, btnBasket, basket } = props;

    const [isFavorite, setIsFavorite] = useState(localStorage.getItem('ItemFavorite') && localStorage.getItem('ItemFavorite').includes(id));

    const favoriteHandler = () => {
        setIsFavorite(!isFavorite);
        if (!isFavorite) {
            setFavorite([...favorite, id]);
            localStorage.setItem('ItemFavorite', JSON.stringify([...favorite, id]))
        }
        else {
            setFavorite(favorite.filter(elem => elem !== id));
            localStorage.setItem('ItemFavorite', JSON.stringify(favorite.filter(elem => elem !== id)))
        }
    }

    return (
        <ContainerItem key={id}>
            <Photo src={photo} alt="avatar-img" />
            {
                !isFavorite && <FaStar className="far fa-star" onClick={favoriteHandler} />
            }
            {
                isFavorite && <FaStar className='fas fa-star' onClick={favoriteHandler} />
            }
            <Title>
                <span>Name: {name}</span>
                <span>Article: {article}</span>
                <span>url: {url}</span>
                <Footer>
                    <span>{price}</span>
                    {!basket.includes(id) ? <Button {...btnBasket} /> : null}
                </Footer>
            </Title>
        </ContainerItem>
    )
}