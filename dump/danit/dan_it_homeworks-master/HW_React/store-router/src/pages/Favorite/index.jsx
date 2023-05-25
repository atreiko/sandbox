import React from 'react';

import { CardsContainer } from '../../components/CardsContainer/CardsContainer';

export const Favorite = (props) => {
    const { itemsList, favorite, setFavorite, basket, setBasket } = props;

    const itemsListToFavorite = itemsList.filter(({id}) => favorite.includes(id))
    return (
        <>
            <CardsContainer
                items={itemsListToFavorite}
                favorite={favorite}
                setFavorite={setFavorite}
                basket={basket}
                setBasket={setBasket}
            />
        </>
    )
}