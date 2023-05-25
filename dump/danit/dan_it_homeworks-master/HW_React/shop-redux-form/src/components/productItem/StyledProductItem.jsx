import styled from 'styled-components';

export const ContainerItem = styled.li`
position: relative;
display: flex;
flex-direction: column;
width: 400px;
box-shadow: 0 0 8px 2px #ffddfa;
border-radius: .5rem;
width: 100%;
`;

export const Photo = styled.img`
box-shadow: 0 0 8px 2px #ffddfa;
background-color: #ffddfa;
`;

export const Title = styled.div`
display: flex;
flex-direction: column;
padding: 1rem 2rem 1rem 5rem;
span{
    font-size: 2.5rem;
    font-weight: 700;
    padding-bottom: 1rem;
   
}
span:not(:first-child){
    font-size: 1.5rem;
    font-weight: 700;
    padding-bottom: 1rem;
}
span:last-child{
    font-size: 2.7rem;
    
}
`;

export const Footer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding-top: 2rem;
position: relative;
span{
    font-size: 2.2rem;
    font-weight: 700;
}
`;

export const FaStar = styled.span`
position: absolute;
top: 1.5rem;
right: 2rem;
color: #86347a;
font-size: 2rem;
cursor: pointer;
`;

export const FaDelete = styled.span`
color: #86347a;
cursor: pointer;
bottom: 0;
left: 0;
position: relative;
`;