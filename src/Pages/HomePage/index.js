import React from 'react';
import styled from 'styled-components';
import DefaultPage from '../../Components/DefaultPage';
import LinkList from '../../Components/LinkList';
import Logo from '../../Components/Logo';
import ProductsList from '../../Components/ProductsList';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function HomePage() {
  return (
    <DefaultPage>
      <Wrapper>
        <Logo width="200px" height="200px" />
        <LinkList />
        <ProductsList />
      </Wrapper>
    </DefaultPage>
  );
}
