import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import { Basket, Homepage, Favorite } from '../../pages';
import { Header } from '../../commons/Header';
import {ContainerWrapper} from './StyledContent';


export const Content = () => {
    const [allData, setAllData] = useState([]);
    const [favorite, setFavorite] = useState(null);
    const [basket, setBasket] = useState(JSON.parse(localStorage.getItem('ItemBasket')) || null);

    useEffect(() => {
        axios.get('MOCK_DATA.json')
            .then(response => {
                setAllData(response.data);
            });

            if (JSON.parse(localStorage.getItem("ItemFavorite")) === null) {
                setFavorite([])
            } else {
                setFavorite(JSON.parse(localStorage.getItem("ItemFavorite")))
            }
    
            if (JSON.parse(localStorage.getItem("ItemBasket")) === null) {
                setBasket([])
            } else {
                setBasket(JSON.parse(localStorage.getItem("ItemBasket")))
            }
    }, [])

    return (
        <ContainerWrapper>
            <Router>
                <Header />
                <Switch>
                    <Route path='/basket'>
                        <Basket
                            itemsList={allData}
                            favorite={favorite}
                            setFavorite={setFavorite}
                            basket={basket}
                            setBasket={setBasket}
                        />
                    </Route>
                    <Route path='/favorite'>
                        <Favorite
                            itemsList={allData}
                            favorite={favorite}
                            setFavorite={setFavorite}
                            basket={basket}
                            setBasket={setBasket}
                        />
                    </Route>
                    <Route path='/' exact>
                        <Homepage
                            itemsList={allData}
                            favorite={favorite}
                            setFavorite={setFavorite}
                            basket={basket}
                            setBasket={setBasket}
                        />
                    </Route>
                </Switch>
            </Router>
        </ContainerWrapper>
    )
}