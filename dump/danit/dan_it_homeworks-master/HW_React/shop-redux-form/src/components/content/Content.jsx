import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Basket, Favorite } from '../../pages';
import { ProductList } from '../productsList/ProductsList'
import { Header } from '../../commons/Header';
import { ContainerWrapper } from './StyledContent';

import store from '../../store';

export const Content = () => {

    return (
        <Provider store={store}>
            <ContainerWrapper>
                <Router>
                    <Header />
                    <Switch>
                        <Route path='/basket'>
                            <Basket />
                        </Route>
                        <Route path='/favorite'>
                            <Favorite />
                        </Route>
                        <Route path='/' exact>
                            <ProductList />
                        </Route>
                    </Switch>
                </Router>
            </ContainerWrapper>
        </Provider>
    )
}