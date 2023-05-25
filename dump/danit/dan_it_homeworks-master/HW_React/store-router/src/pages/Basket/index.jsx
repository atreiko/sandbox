import React from 'react';

import { CardsContainer } from '../../components/CardsContainer/CardsContainer';

export const Basket = (props) => {
    const { itemsList, favorite, setFavorite, basket, setBasket } = props;

    const itemsListInBasket = itemsList.filter(({id}) => basket.includes(id))
    return (
        <>
            <CardsContainer
                items={itemsListInBasket}
                favorite={favorite}
                setFavorite={setFavorite}
                basket={basket}
                setBasket={setBasket}
                deleteBtn={true}
            />
        </>
    )
}