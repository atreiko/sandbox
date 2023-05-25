import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { selectProductsList, getProducts } from '../../store/products';
import { ProductItem } from '../../components/productItem/ProductItem';
import { ContainerList } from '../../components/productsList/StyledProductsList';


const mapStateToProps = (state) => ({
    list: selectProductsList(state),
})

export const Basket = connect(mapStateToProps, { getProducts })(({ list, deleteBtn, getProducts }) => {

    useEffect(() => {
        getProducts();
    }, []);

    let cardBasket = list.map(item => {
        if (item.inBasket) {
            return <ProductItem key={item.id}
                {...item}
                item={item}
                deleteBtn={deleteBtn}
            />
        }
    })

    return (
        <>
            <ContainerList>
                {cardBasket}
            </ContainerList>
        </>
    )
})
