import styled from 'styled-components';

export const ContainerModal = styled.div`
display: flex;
justify-content: center;
`;

export const ModalOverlay = styled.div`
position: fixed;
top: 0;
left: 0;
z-index: 10;
width: 100%;
height: 100%;
overflow: auto;
background-color: rgba(0, 0, 0, .1);
`;

export const ModalWindow = styled.div`
margin: 0 auto;
width: 51.7rem;
color: #ffffff;
margin-top: calc(100vh/3);
border-radius: 2rem;
overflow: hidden;
box-shadow: 0 0 2.5rem .7rem #a15f97;
`;

export const ModalHeader = styled.div`
padding: 2.6rem 3rem;
font-size: 2.2rem;
font-weight: 700;
position: relative;
text-align: center;
background-color: #86347a;
`;

export const CloseBtn = styled.button`
position: absolute;
top: 1.5rem;
right: 1.5rem;
font-size: 2rem;
border: none;
outline: none;
color: #ffffff;
background-color: #86347a;
`;

export const ModalBody = styled.div`
font-size: 1.5rem;
text-align: center;
line-height: 3rem;
padding: 3.9rem 4.2rem 3.4rem;
background-color: #a15f97;
`;

export const ModalFooter = styled.div`
padding-bottom: 3.2rem;
display: grid;
grid-template-columns: repeat(2, 13rem);
gap: 7rem;
place-content: center;
background-color: #a15f97;
`;