import React from 'react';

import { CardsContainer } from '../../components/CardsContainer/CardsContainer';

export const Homepage = (props) => {
    const { itemsList, favorite, setFavorite, basket, setBasket } = props;
    return (
        <>
            <CardsContainer
                items={itemsList}
                favorite={favorite}
                setFavorite={setFavorite}
                basket={basket}
                setBasket={setBasket}
            />
        </>
    )
}