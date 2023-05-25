import React, { useState, useEffect } from 'react';

import { Modal } from '../Modal/Modal';
import { Cards } from '../Cards/Cards';
import { Button } from '../Button/Button'
import { ContainerList, FaDelete } from './StyledCardsContainer';


export const CardsContainer = ({ items, favorite, setFavorite, basket, setBasket, deleteBtn }) => {

    const [addModal, setAddModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);

    const [itemId, setItemId] = useState('')

    const basketHandler = (event) => {
        setAddModal(true);
        const currentId = event.target.closest('li').dataset.id;
        setItemId(+currentId);
    }

    const addToBasket = () => {
        setAddModal(false);
        setBasket([...basket, itemId]);
        localStorage.setItem('ItemBasket', JSON.stringify([...basket, itemId]))
    }

    const deleteBasketHandler = (event) => {
        setDeleteModal(true);
        const currentId = event.target.closest('li').dataset.id;
        setItemId(currentId);

    };

    useEffect(() => {
        localStorage.setItem('ItemBasket', JSON.stringify(basket))
    }, [basket]);

    const removeFromBasket = () => {
        setDeleteModal(false);
        setBasket(basket.filter((elem) => elem !== +itemId));
    }

    const btnBasket = {
        text: 'ADD TO CART',
        onClick: basketHandler,
        backgroundColor: '#86347a'
    };

    const addModalCart = {
        header: 'Are you ready to add this card to your shopping cart?',
        text: `Click 'Ok' to continue, or 'Cancel' to return`,
        closeModal: () => setAddModal(false),
        actions:
            <>
                <Button text='Ok' backgroundColor='#86347a' onClick={addToBasket} />
                <Button text='Cancel' backgroundColor='#86347a' onClick={() => setAddModal(false)} />
            </>
    }

    const deleteModalCart = {
        header: 'Are you really want to remove this item from your cart?',
        text: `Click 'Ok' to continue, or 'Cancel' to return`,
        closeModal: () => setDeleteModal(false),
        actions:
            <>
                <Button text='Ok' backgroundColor='#86347a' onClick={removeFromBasket} />
                <Button text='Cancel' backgroundColor='#86347a' onClick={() => setDeleteModal(false)} />
            </>
    }

    const itemsList = items.map((item) =>
        <li data-id={item.id} key={item.id}>
            <Cards
                {...item}
                btnBasket={btnBasket}
                favorite={favorite}
                setFavorite={setFavorite}
                basket={basket}
                deleteBtn={deleteBtn}
            />
            {deleteBtn && <FaDelete className="fas fa-trash-alt" onClick={deleteBasketHandler} />}
        </li>
    );
    return (
        <>
            <ContainerList>
                {itemsList}
            </ContainerList>
            {addModal && <Modal {...addModalCart} />}
            {deleteModal && <Modal {...deleteModalCart} />}
        </>
    )
}

