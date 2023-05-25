import React from 'react';

import {ContainerHeader, StyledNavLink} from './StyledHeader';

export const Header = () => {
    return (
        <ContainerHeader>
            <StyledNavLink to='/'>Homepage</StyledNavLink>
            <StyledNavLink to='/favorite'>Favorite</StyledNavLink>
            <StyledNavLink to='/basket'>Basket</StyledNavLink>
        </ContainerHeader>

    )
}
