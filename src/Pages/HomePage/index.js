import React from 'react';
import styled from 'styled-components';
import DefaultPage from '../../Components/DefaultPage';
import LinkList from '../../Components/LinkList';
import Logo from '../../Components/Logo';
import Bg from '../../assets/img/bg.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainPage = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: red;

  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  background-image: url(${Bg});
  background-position: center;
  background-size: cover;

  @media (min-width: 1025px) {
    width: 1024px;
  }
`;

const Title = styled.h1`
  color: var(--color-primary);
`;

export default function HomePage() {
  return (
    <>
      <Wrapper>
        <MainPage>
          <Logo width="200px" height="200px" />
        </MainPage>
      </Wrapper>
      <DefaultPage>
        <Wrapper>
          <Title>Nossos Contatos</Title>
          <LinkList />
        </Wrapper>
      </DefaultPage>
    </>
  );
}
