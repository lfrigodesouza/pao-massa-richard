import React from 'react';
import styled from 'styled-components';
import DefaultPage from '../../Components/DefaultPage';
import DeliveryRegion from '../../Components/DeliveryRegion';
import LinkList from '../../Components/LinkList';
import Logo from '../../Components/Logo';

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
        <DeliveryRegion />
      </Wrapper>
    </DefaultPage>
  );
}
