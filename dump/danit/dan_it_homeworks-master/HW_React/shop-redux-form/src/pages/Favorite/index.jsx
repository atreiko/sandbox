import React, { useEffect } from 'react';

import { ProductItem } from '../../components/productItem/ProductItem';
import { ContainerList } from '../../components/productsList/StyledProductsList';
import { selectProductsList, getProducts } from '../../store/products';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    list: selectProductsList(state)
})

export const Favorite = connect(mapStateToProps, {getProducts})(({ list, getProducts }) => {
    useEffect(() => {
        getProducts();
    }, [getProducts]);

    let cardFavorite = list.map((item) => {
        if (item.inFavorite) {
            return <ProductItem key={item.id}
                {...item}
                item={item}
            />
        }
    })

    return (
        <>
            <ContainerList>
                {cardFavorite}
            </ContainerList>
        </>
    )
}
)