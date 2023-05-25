import React from 'react';
import styled, { css } from 'styled-components';

const Title = styled.h2`
  color: aqua;
  background-color: yellow;

  ${props => props.small && css`
    font-size: 14px;
  `}
`;

function StyledComponents() {
  return (
    <div>
      <Title>Hello world - styled components</Title>
      <Title small>Small title</Title>
    </div>
  )
}

export default StyledComponents
