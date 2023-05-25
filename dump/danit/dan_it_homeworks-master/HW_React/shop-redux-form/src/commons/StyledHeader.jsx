import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


export const ContainerHeader = styled.header`
display: flex;
justify-content: space-around;
align-items:center;
padding: 1.5rem 0 1.5rem;
border-bottom: .5rem solid #86347a;
`;

export const StyledNavLink = styled(NavLink)`
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
transform:scale(1.2);
}
`;