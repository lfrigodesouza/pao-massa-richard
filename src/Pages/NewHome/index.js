/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import LogoImage from '../../assets/img/logo.png';
import PanquecaImage from '../../assets/img/panqueca.png';

const Home = styled.div`
  height: min-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.nav`
  padding: 5px;
  width: 100%;
  font-family: var(--font-family-secondary);
  font-size: var(--font-size-xxg);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const Content = styled.main`
  width: 1024px;
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0px;
  height: 25px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid var(--color-black);
  font-size: var(--font-size-sm);
`;

const Logo = styled.img`
  border: 2px solid var(--color-black);
  border-radius: 10%;
  background-color: var(--color-background);
`;

const Dividers = styled.div`
  width: 100%;
  margin-top: -40px;
  z-index: -1;
`;

const Divider = styled.div`
  width: 100%;
  height: 5px;
  background-color: ${({ color }) => color};
  margin-bottom: 3px;
  z-index: -1;
`;

const Brand = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px;
`;
const Title = styled.span`
  font-size: var(--font-size-xxg);
`;

export default function NewHome() {
  return (
    <Home className="new-home">
      <Header className="header">
        <Logo
          className="logo"
          alt="Logomarca Pão e Massa do Richard"
          src={LogoImage}
          width="120x"
          height="120px"
        />
        <Brand className="brand">
          <Title className="title">Pão e Massa do Richard</Title>
        </Brand>
      </Header>
      <Dividers>
        <Divider color="var(--color-green)" />
        <Divider color="var(--color-red)" />
      </Dividers>
      <Content className="content">Massas Artensanais</Content>
      <Footer className="footer">Pão e Massa do Richard | © 2020 - 2021</Footer>
    </Home>
  );
}
