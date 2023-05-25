import React from 'react';
import { connect } from 'react-redux';

import { ContainerItem, Photo, Title, Footer, FaStar, FaDelete } from './StyledProductItem';
import { Button } from '../button/Button';
import { Modal } from '../modal/Modal';
import { selectProductsList, addFavorite, removeFavorite, addBasket, removeBasket } from '../../store/products';
import { selectModal, selectCurrentItem, selectModalDelete, openModalDelete, openModal, closeModal } from '../../store/modals';


const mapStateToProps = (state) => ({
    list: selectProductsList(state),
    modalIsOpen: selectModal(state),
    modaDeletelIsOpen: selectModalDelete(state),
    currentItem: selectCurrentItem(state),
})

export const ProductItem = connect(mapStateToProps,
    { addFavorite, removeFavorite, openModal, openModalDelete, closeModal, addBasket, removeBasket})(
        ({ item, currentItem, price, photo, url, name, article, modaDeletelIsOpen, openModalDelete, openModal, inFavorite,
            addFavorite, removeFavorite, addBasket, inBasket, list, closeModal, modalIsOpen, removeBasket }) => {

            const btnBasket = {
                text: 'ADD TO CART',
                onClick: () => {
                    openModal(item.id);
                },
                backgroundColor: '#86347a'
            };

            const addToBasketHandler = (card) => {
                if (!inBasket) {
                    const basketList = list.map(item => {
                        if (item.id === card.id) {
                            item.inBasket = true
                        }
                        return item
                    })
                    addBasket(basketList);
                    closeModal();
                }
            };

            const removeFromBasketHandler = (card) => {
                const basketList = list.map(item => {
                    if (item.id === card.id) {
                        item.inBasket = false
                    }
                    return item
                })
                removeBasket(basketList);
                closeModal();
            }

            const addModalCart = {
                header: 'Are you ready to add this card to your shopping cart?',
                text: `Click 'Ok' to continue, or 'Cancel' to return`,
                closeModal: () => closeModal(),
                actions:
                    <>
                        <Button text='Ok' backgroundColor='#86347a' onClick={() => addToBasketHandler(item)} />
                        <Button text='Cancel' backgroundColor='#86347a' onClick={() => closeModal()} />
                    </>
            };

            const removeModalCart = {
                header: 'Are you really want to remove this item from your cart?',
                text: `Click 'Ok' to continue, or 'Cancel' to return`,
                closeModal: () => closeModal(),
                actions:
                    <>
                        <Button text='Ok' backgroundColor='#86347a' onClick={() => removeFromBasketHandler(item)} />
                        <Button text='Cancel' backgroundColor='#86347a' onClick={() => closeModal()} />
                    </>
            };
            
            const addFavoriteHandler = (card) => {
                if (!inFavorite) {
                    const favoriteList = list.map((item) => {
                        if (item.id === card.id) {
                            item.inFavorite = true
                        }
                        return item
                    })
                    addFavorite(favoriteList);
                }
            }

            const removeFavoriteHandler = (card) => {
                const favoriteList = list.map((item) => {
                    if (item.id === card.id) {
                        item.inFavorite = false
                    }
                    return item
                })
                removeFavorite(favoriteList)
            }

            return (
                <ContainerItem key={item.id} id={item.id}>
                    <Photo src={photo} alt="avatar-img" />
                    {
                        !inFavorite && <FaStar className="far fa-star" onClick={() => addFavoriteHandler(item)} />
                    }
                    {
                        inFavorite && <FaStar className='fas fa-star' onClick={() => removeFavoriteHandler(item)} />
                    }
                    <Title>
                        <span>Name: {name}</span>
                        <span>Article: {article}</span>
                        <span>url: {url}</span>
                        <Footer>
                            <span>{price}</span>
                            {
                                !inBasket ? <Button {...btnBasket} /> :
                                    <FaDelete
                                        className="fas fa-trash-alt"
                                        onClick={() => {
                                            openModalDelete(item.id)
                                        }
                                        }
                                    />
                            }
                        </Footer>
                        {modalIsOpen && currentItem === item.id && <Modal {...addModalCart} />}
                        {modaDeletelIsOpen && currentItem === item.id && <Modal{...removeModalCart} />}
                    </Title>
                </ContainerItem>
            )
        }
    )