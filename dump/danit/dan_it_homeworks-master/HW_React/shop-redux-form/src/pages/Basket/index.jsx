import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { selectProductsList, getProducts } from '../../store/products';
import { ProductItem } from '../../components/productItem/ProductItem';
import { CreateForm } from '../../components/form/CreateForm';

const mapStateToProps = (state) => ({
    list: selectProductsList(state),
})

export const Basket = connect(mapStateToProps, { getProducts })(({ list, getProducts, deleteBtn }) => {
    
    useEffect(() => {
        getProducts();
    }, [getProducts]);

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
        <Container>
            <CreateForm />
            <List>
                {cardBasket}
            </List>
        </Container>
    )
})

const Container = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
`;

const List = styled.ul`
display: grid;
grid-template-columns: repeat(2, 35rem);
gap: 3rem;
margin: 2.5rem 0;
padding-bottom: 2.5rem;
place-content: start;
`;