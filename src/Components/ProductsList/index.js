import React from 'react';
import styled from 'styled-components';

export const ColorBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 5px;
  font-family: 'Roboto', sans-serif;
  color: var(--color-primary-darker);
  &::before {
    margin: 5px;
    display: inline-block;
    content: '';
    width: 20px;
    height: 20px;
    background-color: ${(props) => props.color};
  }
`;

export const Title = styled.h1`
  margin: 10px 0px 0px 0px;
  padding: 10px;
  font-family: 'Roboto', sans-serif;
  color: var(--color-primary);
  @media (max-width: 375px) {
    font-size: 150%;
  }
`;

export const MapFrame = styled.img`
  margin: 30px;
  width: 320px;
  @media (min-width: 425px) {
    width: 425px;
  }
  @media (min-width: 600px) {
    width: 600px;
  }
`;

export default function ProductsList() {
  return (
    <>
      <Title>Faça seu pedido pelo WhatsApp com 15% de desconto</Title>
    </>
  );
}
