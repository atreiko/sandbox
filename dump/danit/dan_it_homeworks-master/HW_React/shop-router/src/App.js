import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import { Basket } from './components/Basket';
import { Favorites } from './components/Favorites';
import { Container } from './components/Container';

import './scss/style.scss';
import styled from 'styled-components';


function App() {
  return (
    <div className='wrapper'>
      <Router>
        <Header>
          <StyleNavLink to='/'>Home</StyleNavLink>
          <StyleNavLink to='/favorites' >Favorites</StyleNavLink>
          <StyleNavLink to='/basket'>Basket</StyleNavLink>
        </Header>
        <Switch>
          <Route path='/favorites'>
            <Favorites />
          </Route>
          <Route path='/basket'>
            <Basket />
          </Route>
          <Route path='/'>
            <Container />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const Header = styled.header`
display: flex;
justify-content: space-around;
align-items:center;
padding: 1.5rem 0 1.5rem;
border-bottom: .5rem solid #86347a
`

const StyleNavLink = styled(NavLink)`
font-size: 2rem;
font-weight: 700;
text-decoration: none;
width: 15rem;
padding: 1rem 0;
border: .1rem solid #86347a;
background: #86347a;
color: #FFFFFF;
border-radius: 1.5rem;
text-align: center;
transition: all .3s linear;
&:hover{
  transform:scale(1.2)
}
`

export default App;