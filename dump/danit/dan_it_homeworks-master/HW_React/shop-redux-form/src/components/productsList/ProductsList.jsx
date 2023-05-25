import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { selectProductsList, getProducts } from '../../store/products';
import { ProductItem } from '../productItem/ProductItem';
import { ContainerList } from './StyledProductsList';

const mapStateToProps = (state) => ({
    list: selectProductsList(state)
});

export const ProductList = connect(mapStateToProps, { getProducts })(
    ({ getProducts, list }) => {

        useEffect(() => {
            getProducts();
        }, [getProducts]);

        return (
            <ContainerList>
                {list.map((item) =>
                    <ProductItem key={item.id}
                        {...item}
                        item={item}
                    />
                )}
            </ContainerList>
        )
    }
)