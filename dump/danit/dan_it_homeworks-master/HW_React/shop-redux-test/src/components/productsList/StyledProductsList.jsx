import styled from 'styled-components';

export const ContainerList = styled.ul`
display: grid;
grid-template-columns: repeat(3, 35rem);
grid-template-rows: repeat(3, 1fr);
gap: 3rem;
margin: 2.5rem 0;
padding-bottom: 2.5rem;
place-content: center;
`;
